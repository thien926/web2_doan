<?php

	require_once("../ConnectDB/DB_classes.php");
	if(!isset($_POST['request']) && !isset($_GET['requset'])) die(null);
	switch ($_POST['request']) {
		case 'phantich_URL':
			phantich_URL();
			break;
		case 'price_max':
			price_max();
			break;
		case 'load_author':
			load_author();
			break;
		case 'load_nxb':
			load_nxb();
			break;
		case 'load_sp_ban_chay':
			load_sp_ban_chay();
			break;
		case 'load_detail_sp_for_detail':
			load_detail_sp_for_detail();
			break;
		case 'load_sp_khac':
			load_sp_khac();
			break;
		case 'load_sp_giamgia':
			load_sp_giamgia();
			break;
		case 'load_gio_hang':
			load_gio_hang();
			break;
		case 'dat_hang':
			dat_hang();
			break;
		case 'kt_sl_trong_kho':
			kt_sl_trong_kho();
			break;
		case 'load_sanpham_theo_lsp':
			load_sanpham_theo_lsp();
			break;
		default:
			# code...
			break;
	}

	function phantich_URL(){
		$filters = $_POST['URL'];

		$sql = "SELECT * FROM sanpham WHERE trangthai = 1 AND ";
		$ori = $sql;

		$tenThanhPhanCanSort = null;
		$typeSort = null;
		$page = null;

		$db = new DB_driver();

		forEach($filters as $filter){
			$dauBang = explode("=", $filter);
			switch ($dauBang[0]) {
				case 'search':
					$dauBang[1] = explode("+", $dauBang[1]);
					$dauBang[1] = join(" ", $dauBang[1]);
					$dauBang[1] = addslashes($dauBang[1]);
					$sql .= (($sql == $ori) ? "" : " AND ") . "( tensp LIKE '%$dauBang[1]%' OR tacgia LIKE '%$dauBang[1]%' )";
					break;
				
				case 'type':
					$dauBang[1] = explode("+", $dauBang[1]);
					$dauBang[1] = join(" ", $dauBang[1]);
					if($dauBang[1] == 1){
						$tenThanhPhanCanSort = "soluongdaban";
						$typeSort = "DESC";
						break;
					}
					$sql .= (($sql == $ori) ? "" : " AND ") . "maloai = '$dauBang[1]'";
					break;
				case 'nxb':
					$dauBang[1] = explode("+", $dauBang[1]);
					$dauBang[1] = join(" ", $dauBang[1]);
					$dauBang[1] = addslashes($dauBang[1]);
					$sql .= (($sql == $ori) ? "" : " AND ") . "nxb = '$dauBang[1]'";
					break;
				case 'author':
					$dauBang[1] = explode("+", $dauBang[1]);
					$dauBang[1] = join(" ", $dauBang[1]);
					$dauBang[1] = addslashes($dauBang[1]);
					$sql .= (($sql == $ori) ? "" : " AND ") . "tacgia LIKE '%$dauBang[1]%'";
					break;
				case 'price':
					$prices = explode("-", $dauBang[1]);
					$from = (int)$prices[0];
					$to = (int)$prices[1];
					$sql .= (($sql == $ori) ? "" : " AND ") . "dongia >= $from AND dongia <= $to";
					break;
				case 'sort':
					$s = explode("-", $dauBang[1]);
					$tenThanhPhanCanSort = $s[0];
					$typeSort = (($s[1] == "asc") ? "ASC" : "DESC");
					break;
				case 'page':
					$page = (int)$dauBang[1];
					break;
				default:
					# code...
					break;
			}
		}

		// sort phải để cuối
		if($typeSort != null && $tenThanhPhanCanSort != null){
			$sql .= ($sql == $ori)? "1=1 " : "";
			$sql .= " ORDER BY $tenThanhPhanCanSort $typeSort";
		}
		if($typeSort == null || $tenThanhPhanCanSort == null) $sql .= ($sql == $ori)? "1 = 1" : "";

		//Phân trang
		if($page == null) $page=1;
		if($page == 0) $page = 1;
		$limit = 16;
		$dkien = strstr($sql, 'WHERE');
		$total = $db->get_total_record("sanpham", "masp", $dkien);
		$total_page = ceil($total / $limit);
		if($page < 1){
			$page = 1;
		}
		else if($page > $total_page){
			$page = $total_page;
		}
		if($page <= 0){
			$page=1;
		}

		$start = ($page-1)*$limit;
		

		$sql .= " LIMIT $start,$limit";
		
		// $sql = "SELECT * FROM sanpham  WHERE trangthai = 1 LIMIT 0,12";
		$res = $db->get_list($sql);
		$kmBUS = new khuyenmaiBUS();
		for ($i=0; $i < sizeof($res); $i++) { 
			$res[$i]["KM"] = $kmBUS->select_by_id('*', $res[$i]['makm']);
		}
		$db->close();
		$res[] = $total_page;
		die(json_encode($res));
	}

	function load_gio_hang(){
		$ds = $_POST['ds'];
		$sql = "SELECT * FROM sanpham WHERE trangthai = 1 AND ";
		$ori = $sql;
		$db = new DB_driver();
		forEach($ds as $phantu){
			if($phantu != "" && $phantu != null){
				$dauVa = explode("&", $phantu);
				$sql .= (($sql == $ori) ? "" : " OR ") . "masp = '$dauVa[0]'";
			}
		}
		$sql .= ($sql == $ori)? "1 = 1" : "";
		$res = $db->get_list($sql);
		forEach($ds as $phantu){
			$dauVa = explode("&", $phantu);
			for ($i=0; $i < sizeof($res); $i++) { 
				if($dauVa[0] == $res[$i]['masp']){
					$res[$i]["slmua"] = $dauVa[1];
					break;
				}
			}
		}
		$kmBUS = new khuyenmaiBUS();
		for ($i=0; $i < sizeof($res); $i++) { 
			$res[$i]["KM"] = $kmBUS->select_by_id('*', $res[$i]['makm']);
		}
		die(json_encode($res));
	}

	function price_max(){
		$type = $_POST['type'];
		if($type == 1){
			$sql = "SELECT MAX(dongia) AS maxdongia, MIN(dongia) AS mindongia FROM sanpham";
		}
		else{
			$sql = "SELECT MAX(dongia) AS maxdongia, MIN(dongia) AS mindongia FROM sanpham WHERE maloai = $type";
		}
		
		$db = new DB_driver();

		$res = $db->get_row($sql);
		$db->close();
		if($res == false) die(json_encode(null));
		die(json_encode($res));
	}

	function load_author(){
		$sql = "SELECT DISTINCT tacgia FROM sanpham";
		$db = new DB_driver();
		$res = $db->get_list($sql);
		$db->close();
		die(json_encode($res));
	}

	function load_nxb(){
		$sql = "SELECT DISTINCT nxb FROM sanpham";
		$db = new DB_driver();
		$res = $db->get_list($sql);
		$db->close();
		die(json_encode($res));
	}

	function load_sp_ban_chay(){
		$sql = "SELECT * FROM sanpham ORDER BY soluongdaban DESC";
		$db = new DB_driver();
		$res = $db->get_list($sql);
		$kmBUS = new khuyenmaiBUS();
		for ($i=0; $i < sizeof($res); $i++) { 
			$res[$i]["KM"] = $kmBUS->select_by_id('*', $res[$i]['makm']);
		}
		$db->close();
		die(json_encode($res));
	}

	function load_sanpham_theo_lsp(){
		$type = $_POST['type'];
		if($type == 1) $sql = "SELECT * FROM sanpham ORDER BY soluongdaban DESC LIMIT 0,4";
		else $sql = "SELECT * FROM sanpham WHERE maloai = $type ORDER BY soluongdaban DESC LIMIT 0,4";
		$db = new DB_driver();
		$res = $db->get_list($sql);
		$kmBUS = new khuyenmaiBUS();
		for ($i=0; $i < sizeof($res); $i++) { 
			$res[$i]["KM"] = $kmBUS->select_by_id('*', $res[$i]['makm']);
		}
		$db->close();
		die(json_encode($res));
	}

	function load_detail_sp_for_detail(){
		$masp = $_POST["masp"];
		if($masp == "") $masp = 1;
		$spBUS = new sanphamBUS();
		$res = $spBUS->select_by_id("*", $masp);
		if($res == false){
			die(json_encode(null));
		}
		else{
			$kmBUS = new khuyenmaiBUS();
			$res['makm'] = $kmBUS->select_by_id('*', $res['makm']);
			die(json_encode($res));
		}
	}

	function load_sp_khac(){
		$masp = $_POST["masp"];
		if($masp == "") $masp = 1;
		$sql = "SELECT * FROM sanpham WHERE trangthai = 1 AND masp != $masp LIMIT 0,4";
		$db = new DB_driver();
		$res = $db->get_list($sql);
		$kmBUS = new khuyenmaiBUS();
		for ($i=0; $i < sizeof($res); $i++) { 
			$res[$i]["KM"] = $kmBUS->select_by_id('*', $res[$i]['makm']);
		}
		die(json_encode($res));
	}

	function load_sp_giamgia(){
		$masp = $_POST["masp"];
		if($masp == "") $masp = 1;
		$sql = "SELECT * FROM sanpham WHERE trangthai = 1 AND masp != $masp";
		$db = new DB_driver();
		$res = $db->get_list($sql);
		$kmBUS = new khuyenmaiBUS();
		for ($i=0; $i < sizeof($res); $i++) { 
			$res[$i]["KM"] = $kmBUS->select_by_id('*', $res[$i]['makm']);
		}
		die(json_encode($res));
	}

	function dat_hang(){
		$dsdh = $_POST['dsdh'];
		$db = new DB_driver();
		for($i = 0; $i < sizeof($dsdh); ++$i){
			if($dsdh[$i] != ""){
				$dauVa = explode("&", $dsdh[$i]);
				$sql = "SELECT * FROM sanpham WHERE masp = $dauVa[0]";
				$res = $db->get_row($sql);
				$slspban = (int)$res['soluongdaban'] + 1;
				$soluong = (int)$res['soluong'] - (int)$dauVa[1];
				$db->update("sanpham", array(
					"soluong" => $soluong,
					"soluongdaban" => $slspban
				), "masp = $dauVa[0]");
			}
		}

		die("ok");
	}

	// function kt_sl_trong_kho(){
	// 	$dsdh = $_POST['dsdh'];
	// 	$db = new DB_driver();
	// 	for($i = 0; $i < sizeof($dsdh); ++$i){
	// 		if($dsdh[$i] != ""){
	// 			$dauVa = explode("&", $dsdh[$i]);
	// 			$sql = "SELECT * FROM sanpham WHERE masp = $dauVa[0]";
	// 			$res = $db->get_row($sql);
	// 			$soluong = (int)$res['soluong'] - (int)$dauVa[1];
	// 			if($soluong < 0){
	// 				$res = "Sản phẩm " . $res['tensp'] . " không đủ số lượng để bán";
	// 				die($res);
	// 				return;
	// 			}
	// 		}
	// 	}

	// 	die("ok");
	// }
?>