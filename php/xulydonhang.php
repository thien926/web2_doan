<?php
	session_start();

	require_once("../ConnectDB/DB_classes.php");

	if(!isset($_POST['request']) && !isset($_GET['request'])) die(json_encode(null));

	switch ($_POST['request']) {
		case 'them_sp_gh':
			them_sp_gh();
			break;
		case 'load_sp_trong_gh':
			load_sp_trong_gh();
			break;
		case 'xoa_cookie_don_hang':
			xoa_cookie_don_hang();
			break;
		case 'thay_doi_sluong_sp':
			thay_doi_sluong_sp();
			break;
		case 'xoa_sp_donhang':
			xoa_sp_donhang();
			break;
		case 'tao_hd':
			tao_hd();
			break;
		case 'dat_hang':
			dat_hang();
			break;
		case 'get_don_hang_user':
			get_don_hang_user();
			break;
		case 'ctsp_from_cart':
			ctsp_from_cart();
			break;
		case 'check_user_hd':
			check_user_hd();
			break;
		default:
			# code...
			break;
	}

	function them_sp_gh(){
		$mand = $_POST['mand'];
		$masp = $_POST['masp'];
		$slmua = $_POST['slmua'];
		if($mand == null){
			if(isset($_SESSION['donhang'])){
				if($masp != null){
					$_SESSION['donhang'] = $_SESSION['donhang'] . $masp . "&" . $slmua . "-";
				}
				die(($_SESSION['donhang']));
			}
			else{
				if($masp != null){
					$_SESSION['donhang'] =  $masp . "&" . $slmua . "-";
					die(($_SESSION['donhang']));
				}
				else{
					die((null));
				}
			}
		}	
		else{
			if(isset($_SESSION['donhang'])){
				if(isset($_COOKIE[$mand])){
					unset($_SESSION['donhang']);
					die($_COOKIE[$mand]);
				}
				else{
					if($masp != null){
						$_SESSION['donhang'] = $_SESSION['donhang'] . $masp . "&" . $slmua . "-";
					}

					setcookie($mand, $_SESSION['donhang'], time()+2592000);
					unset($_SESSION['donhang']);
					die(($_COOKIE[$mand]));
				}
			}
			else{
				if($masp != null){
					unset($_SESSION['donhang']);
					if(isset($_COOKIE[$mand])){
						$sp = $_COOKIE[$mand] . $masp . "&" . $slmua . "-";
					}
					else{
						$sp = $masp . "&" . $slmua . "-";
					}
					setcookie($mand, $sp, time()+2592000);
					die(($sp));
				}
				else{
					if(isset($_COOKIE[$mand])){
						die($_COOKIE[$mand]);
					}
					else{
						die((null));
					}
				}
				
			}
		}
	}

	function them_sp_gh_for_detail(){
		$mand = $_POST['mand'];
		$masp = $_POST['masp'];
		$slmua = $_POST['slmua']; 
		if($mand == null){
			if(isset($_SESSION['donhang'])){
				if($masp != null){
					$_SESSION['donhang'] = $_SESSION['donhang'] . $masp . "&" . $slmua . "-";
				}
				die(($_SESSION['donhang']));
			}
			else{
				if($masp != null){
					$_SESSION['donhang'] =  $masp . "&" . $slmua . "-";
					die(($_SESSION['donhang']));
				}
				else{
					die((null));
				}
			}
		}	
		else{
			if(isset($_SESSION['donhang'])){
				if(isset($_COOKIE[$mand])){
					unset($_SESSION['donhang']);
					die($_COOKIE[$mand]);
				}
				else{
					if($masp != null){
						$_SESSION['donhang'] = $_SESSION['donhang'] . $masp . "&" . $slmua . "-";
					}

					setcookie($mand, $_SESSION['donhang'], time()+2592000);
					unset($_SESSION['donhang']);
					die(($_COOKIE[$mand]));
				}
			}
			else{
				if($masp != null){
					unset($_SESSION['donhang']);
					if(isset($_COOKIE[$mand])){
						$sp = $_COOKIE[$mand] . $masp . "&" . $slmua . "-";
					}
					else{
						$sp = $masp . "&" . $slmua . "-";
					}
					setcookie($mand, $sp, time()+2592000);
					die(($sp));
				}
				else{
					if(isset($_COOKIE[$mand])){
						die($_COOKIE[$mand]);
					}
					else{
						die((null));
					}
				}
				
			}
		}
	}

	function load_sp_trong_gh(){
		$mand = $_POST['mand'];
		$masp = $_POST['masp'];
		if($masp == null){
			die("no_ok");
		}
		if($mand == null){
			if(isset($_SESSION['donhang'])){
				$pos = strpos($_SESSION['donhang'], $masp . "&");
				if(!is_int($pos)){
					die("no_ok");
				}
				else{
					die("ok");
				}
			}
			else{
				die("no_ok");
			}
		}	
		else{
			if(isset($_COOKIE[$mand])){
				$pos = strpos($_COOKIE[$mand], $masp . "&");
				if(!is_int($pos)){
					die("no_ok");
				}
				else{
					die("ok");
				}
			}
			else{
				die("no_ok");
			}
		}
	}

	function thay_doi_sluong_sp(){
		$mand = $_POST['mand'];
		$masp = $_POST['masp'];
		$soluong = $_POST['soluong'];
		if($mand == null){
			if(isset($_SESSION['donhang'])){
				if($masp != null){
					$dssp = $_SESSION['donhang'];
					$dssp = explode("-", $dssp);
					$length = count($dssp);
					for($i = 0; $i < $length; ++$i){
						$dauVa = explode("&", $dssp[$i]);
						if($dauVa[0] == $masp){
							$dauVa[1] = $soluong;
							$dssp[$i] = $dauVa[0] . "&" . $dauVa[1];
							$dssp = join("-", $dssp);
							$_SESSION['donhang'] = $dssp;
							break;
						}
					}
				}
				die(($_SESSION['donhang']));
			}
			else{
				die((null));
			}
		}	
		else{
			if(isset($_SESSION['donhang'])){
				if(isset($_COOKIE[$mand])){
					$dssp = $_COOKIE[$mand];
					$dssp = explode("-", $dssp);
					$length = count($dssp);
					for($i = 0; $i < $length; ++$i){
						$dauVa = explode("&", $dssp[$i]);
						if($dauVa[0] == $masp){
							$dauVa[1] = $soluong;
							$dssp[$i] = $dauVa[0] . "&" . $dauVa[1];
							$dssp = join("-", $dssp);
							setcookie($mand, $dssp, time()+2592000);
							break;
						}
					}
					unset($_SESSION['donhang']);
					die($_COOKIE[$mand]);
				}
				else{
					if($masp != null){
						$dssp = $_SESSION['donhang'];
						$dssp = explode("-", $dssp);
						$length = count($dssp);
						for($i = 0; $i < $length; ++$i){
							$dauVa = explode("&", $dssp[$i]);
							if($dauVa[0] == $masp){
								$dauVa[1] = $soluong;
								$dssp[$i] = $dauVa[0] . "&" . $dauVa[1];
								$dssp = join("-", $dssp);
								$_SESSION['donhang'] = $dssp;
								break;
							}
						}
					}
					setcookie($mand, $_SESSION['donhang'], time()+2592000);
					unset($_SESSION['donhang']);
					die(($_COOKIE[$mand]));
				}
			}
			else{
				if($masp != null){
					unset($_SESSION['donhang']);
					$dssp = $_COOKIE[$mand];
					$dssp = explode("-", $dssp);
					$length = count($dssp);
					for($i = 0; $i < $length; ++$i){
						$dauVa = explode("&", $dssp[$i]);
						if($dauVa[0] == $masp){
							$dauVa[1] = $soluong;
							$dssp[$i] = $dauVa[0] . "&" . $dauVa[1];
							$dssp = join("-", $dssp);
							setcookie($mand, $dssp, time()+2592000);
							break;
						}
					}
					die($dssp);
				}
				else{
					if(isset($_COOKIE[$mand])){
						die($_COOKIE[$mand]);
					}
					else{
						die((null));
					}
				}
				
			}
		}
	}

	function xoa_sp_donhang(){
		$text = $_POST['text_sp'];
		$mand = $_POST['mand'];
		if($mand == null){
			if(isset($_SESSION['donhang'])){
				$dssp = $_SESSION['donhang'];
				$dssp = str_replace($text, "", $dssp);
				$_SESSION['donhang'] = $dssp;
				die(($_SESSION['donhang']));
			}
			else{
				die((null));
			}
		}	
		else{
			if(isset($_SESSION['donhang'])){
				if(isset($_COOKIE[$mand])){
					$dssp = $_COOKIE[$mand];
					$dssp = str_replace($text, "", $dssp);
					unset($_SESSION['donhang']);
					if($dssp == ""){
						setcookie($mand, $dssp, time()-2593000);
						die(null);
					}
					else{
						setcookie($mand, $dssp, time()+2592000);
						die($_COOKIE[$mand]);
					}
					
				}
				else{
					$dssp = $_SESSION['donhang'];
					$dssp = str_replace($text, "", $dssp);
					setcookie($mand, $dssp, time()+2592000);
					unset($_SESSION['donhang']);
					die(($_COOKIE[$mand]));
				}
			}
			else{
				if(isset($_COOKIE[$mand])){
					$dssp = $_COOKIE[$mand];
					$dssp = str_replace($text, "", $dssp);
					if($dssp == ""){
						setcookie($mand, $dssp, time()-2593000);
						die(null);
					}
					else{
						setcookie($mand, $dssp, time()+2592000);
						die($dssp);
					}
					
				}
				else{
					die((null));
				}
			}
		}
	}

	function dat_hang(){
		$mand = $_POST['mand'];
		$sdt = $_POST['sdt'];
		$diachi = $_POST['diachi'];
		$ngaydathang = $_POST['ngaydathang'];
		$ngaynhanhang = $_POST['ngaynhanhang'];
		$phuongthuctt = $_POST['phuongthuctt'];
		$tongtien = $_POST['tongtien'];
		$trangthai = $_POST['trangthai'];
		$sql = "SELECT MAX(mahd) as maxmahd FROM hoadon";
		$db = new DB_driver();
		$res = $db->get_row($sql);
		$mahd = 1;
		if($res['maxmahd'] != ""){
			$mahd = (int)$res['maxmahd'] + 1;
		}

		$res = $db->insert("hoadon", array(
			"mahd" => $mahd,
			"mand" => $mand,
			"sdt" => $sdt,
			"diachi" => $diachi,
			"ngaydathang" => $ngaydathang,
			"ngaynhanhang" => $ngaynhanhang,
			"phuongthuctt" => $phuongthuctt,
			"tongtien" => $tongtien,
			"trangthai" => $trangthai
		), true);

		if($res == null){
			die("no_ok");
		}
		$dsdh = $_POST['dsdh'];
		for($i = 0; $i < sizeof($dsdh); ++$i){
			if($dsdh[$i] != ""){
				$dauVa = explode("&", $dsdh[$i]);
				$db->insert("chitiethoadon", array(
					"mahd" => $mahd,
					"masp" => $dauVa[0],
					"soluong" => $dauVa[1],
					"dongia" => $dauVa[2]
				), true);
			}
		}
		setcookie($mand,"",time()-2593000);
		$db->close();
		die("ok");
	}

	function get_don_hang_user(){
		$page = $_POST['page'];
		$mand = $_POST['mand'];
		$db = new DB_driver();
		$total = $db->get_total_record("hoadon", "mahd", "WHERE mand = '$mand'");
		$limit = 5;
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
		
		$sql = "SELECT * FROM hoadon WHERE mand = '$mand' ORDER BY mahd DESC LIMIT $start,$limit";
		$donhang = $db->get_list($sql);
		$donhang[] = $total_page;
    	die (json_encode($donhang));
	}

	function ctsp_from_cart(){
		$mahd = $_POST['mahd'];
		$db = new DB_driver();
		$sql = "SELECT * FROM chitiethoadon WHERE mahd = '$mahd'";
		$res = $db->get_list($sql);
		for($i = 0; $i < sizeof($res); ++$i){
			$masp = $res[$i]['masp'];
			$sql = "SELECT * FROM sanpham WHERE masp = '$masp'";
			$res[$i]['sanpham'] = $db->get_row($sql);
			$makm = $res[$i]['sanpham']['makm'];
			$sql = "SELECT * FROM khuyenmai WHERE makm = '$makm'";
			$res[$i]['sanpham']['KM'] =  $db->get_row($sql);
		}
		die(json_encode($res));
	}

	function check_user_hd(){
		$mahd = $_POST['mahd'];
		$mand = $_POST['mand'];
		$sql = "SELECT * FROM hoadon WHERE mahd = '$mahd' AND mand = '$mand'";
		$db = new DB_driver();
		$res = $db->get_row($sql);
		if($res == false){
			die("no_ok");
		}
		die("ok");
	}

	function xoa_cookie_don_hang(){
		$mand = $_POST['mand'];
		if(isset($_COOKIE[$mand])){
			setcookie($mand, '', time()-2593000);
		}
	}
?>