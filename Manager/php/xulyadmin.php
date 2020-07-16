<?php
	session_start();
	require_once("../../ConnectDB/DB_classes.php");
	if(!isset($_POST['request']) && !isset($_GET['request'])) die(json_encode(null));

	switch ($_POST['request']) {
		case 'getadmin':
			if(isset($_SESSION['useradmin'])) {
				die("ok");
			}
			die("no_ok");
			break;
		case 'get_infor_admin':
			if(isset($_SESSION['useradmin'])) {
				die(json_encode($_SESSION['useradmin']));
			}
			die(json_encode(null));
			break;
		case 'login_admin':
			login_admin();
			break;
		case 'getallsp':
			getallsp();
    		break;
    	case 'getall_lsp':
    		getall_lsp();
    		break;
    	case 'getall_makm':
    		getall_makm();
    		break;
    	case 'load_author':
			load_author();
			break;
		case 'load_nxb':
			load_nxb();
			break;
		case 'hide_sp':
			hide_sp();
			break;
		case 'delete_sp':
			delete_sp();
			break;
		case 'delete_lsp':
			delete_lsp();
			break;
		case 'delete_tk':
			delete_tk();
			break;
		case 'xoa_don_hang':
			xoa_don_hang();
			break;
		case 'getall_donhang':
			getall_donhang();
			break;
		case 'getall_kh':
			getall_kh();
			break;
		case 'add_sp':
			add_sp();
			break;
		case 'update_sp':
			update_sp();
			break;
		case 'update_lsp':
			update_lsp();
			break;
		case 'update_tt_dh':
			update_tt_dh();
			break;
		case 'an_nd':
			an_nd();
			break;
		case 'get_nd':
			get_nd();
			break;
		case 'sua_kh':
			sua_kh();
			break;
		case 'them_kh':
			them_kh();
			break;
		case 'them_lsp':
			them_lsp();
			break;
		case 'max_mand':
			max_mand();
			break;
		case 'max_lsp':
			max_lsp();
			break;
		case 'max_sp':
			max_sp();
			break;
		case 'select_chitietdonhang':
			select_chitietdonhang();
			break;
		case 'getallsp_sort':
			getallsp_sort();
			break;
		case 'getall_lsp_sort':
			getall_lsp_sort();
			break;
		case 'getall_donhang_sort':
			getall_donhang_sort();
			break;
		case 'getall_kh_sort':
			getall_kh_sort();
			break;
		case 'dangXuat':
			dangXuat();
			break;
		case 'load_nam_for_thong_ke':
			load_nam_for_thong_ke();
			break;
		case 'load_thong_ke_san_pham_ban_chay_admin':
			load_thong_ke_san_pham_ban_chay_admin();
			break;
		case 'load_thong_ke_san_pham_ban_chay_admin_sort':
			load_thong_ke_san_pham_ban_chay_admin_sort();
			break;
		case 'load_thong_ke_loai_san_pham_ban_chay_admin':
			load_thong_ke_loai_san_pham_ban_chay_admin();
			break;
		case 'load_thong_ke_loai_san_pham_ban_chay_admin_sort':
			load_thong_ke_loai_san_pham_ban_chay_admin_sort();
			break;
		case 'getrow_lsp':
			getrow_lsp();
			break;
		default:
			# code...
			break;
	}

	function dangXuat(){
		if(isset($_SESSION['useradmin'])){
			unset($_SESSION['useradmin']);
			die("ok");
			return;
		}
		die("no_ok");
	}

	function getallsp(){
		$spBUS = new sanphamBUS();
		$kmBUS = new khuyenmaiBUS();
		$lspBUS = new loaisanphamBUS();
		$dssp = $spBUS->select_all();
        for($i = 0; $i < sizeof($dssp); $i++) {
            // thêm thông tin khuyến mãi
            $dssp[$i]["KM"] = $kmBUS->select_by_id('*', $dssp[$i]['makm']);
            // thêm thông tin loại sản phẩm
            $dssp[$i]["LSP"] = $lspBUS->select_by_id('*', $dssp[$i]['maloai']);
        }
    	die (json_encode($dssp));
	}

	function getallsp_sort(){
		$type = $_POST['loai'];
		$sort = $_POST['sort'];
		switch ($type) {
			case 'masp':
				$sql = "SELECT * FROM sanpham, khuyenmai WHERE sanpham.makm = khuyenmai.makm ORDER BY sanpham.masp $sort";
				break;
			case 'ten':
				$sql = "SELECT * FROM sanpham, khuyenmai WHERE sanpham.makm = khuyenmai.makm ORDER BY sanpham.tensp $sort";
				break;
			case 'soluong':
				$sql = "SELECT * FROM sanpham, khuyenmai WHERE sanpham.makm = khuyenmai.makm ORDER BY sanpham.soluong $sort";
				break;
			case 'gia':
				$sql = "SELECT * FROM sanpham, khuyenmai WHERE sanpham.makm = khuyenmai.makm ORDER BY sanpham.dongia $sort";
				break;
			case 'khuyenmai':
				$sql = "SELECT * FROM sanpham, khuyenmai WHERE sanpham.makm = khuyenmai.makm ORDER BY khuyenmai.tenkm $sort";
				break;
			case 'trangthai':
				$sql = "SELECT * FROM sanpham, khuyenmai WHERE sanpham.makm = khuyenmai.makm ORDER BY sanpham.trangthai $sort";
				break;
			default:
				# code...
				break;
		}

		$db = new DB_driver();
		$res = $db->get_list($sql);
		die(json_encode($res));
	}

	function getall_lsp_sort(){
		$type = $_POST['loai'];
		$sort = $_POST['sort'];
		$sql = "SELECT * FROM loaisanpham ORDER BY $type $sort";

		$db = new DB_driver();
		$res = $db->get_list($sql);
		die(json_encode($res));
	}

	function getall_donhang_sort(){
		$type = $_POST['loai'];
		$sort = $_POST['sort'];
		switch ($type) {
			case 'madon':
				$sql = "SELECT * FROM hoadon ORDER BY mahd $sort";
				break;
			case 'khach':
				$sql = "SELECT * FROM hoadon ORDER BY mand $sort";
				break;
			case 'sdt':
				$sql = "SELECT * FROM hoadon ORDER BY sdt $sort";
				break;
			case 'diachi':
				$sql = "SELECT * FROM hoadon ORDER BY diachi $sort";
				break;
			case 'pptt':
				$sql = "SELECT * FROM hoadon ORDER BY phuongthuctt $sort";
				break;
			case 'tongtien':
				$sql = "SELECT * FROM hoadon ORDER BY tongtien $sort";
				break;
			case 'ngaydathang':
				$sql = "SELECT * FROM hoadon ORDER BY ngaydathang $sort";
				break;
			case 'ngaynhanhang':
				$sql = "SELECT * FROM hoadon ORDER BY ngaynhanhang $sort";
				break;
			case 'trangthai':
				$sql = "SELECT * FROM hoadon ORDER BY trangthai $sort";
				break;
			default:
				# code...
				break;
		}

		$db = new DB_driver();
		$res = $db->get_list($sql);
		die(json_encode($res));
	}

	function getall_kh_sort(){
		$type = $_POST['loai'];
		$sort = $_POST['sort'];
		switch ($type) {
			case 'mand':
				$sql = "SELECT * FROM nguoidung ORDER BY mand $sort";
				break;
			case 'taikhoan':
				$sql = "SELECT * FROM nguoidung ORDER BY taikhoan $sort";
				break;
			case 'hoten':
				$sql = "SELECT * FROM nguoidung ORDER BY hoten $sort";
				break;
			case 'sdt':
				$sql = "SELECT * FROM nguoidung ORDER BY sdt $sort";
				break;
			case 'email':
				$sql = "SELECT * FROM nguoidung ORDER BY thudientu $sort";
				break;
			case 'diachi':
				$sql = "SELECT * FROM nguoidung ORDER BY diachi $sort";
				break;
			case 'sex':
				$sql = "SELECT * FROM nguoidung ORDER BY gioitinh $sort";
				break;
			case 'date':
				$sql = "SELECT * FROM nguoidung ORDER BY ngaysinh $sort";
				break;
			case 'tt':
				$sql = "SELECT * FROM nguoidung ORDER BY trangthai $sort";
				break;
			default:
				# code...
				break;
		}

		$db = new DB_driver();
		$res = $db->get_list($sql);
		die(json_encode($res));
	}

	function getall_lsp(){
		$lspBUS = new loaisanphamBUS();
		$dslsp = $lspBUS->select_all();
		die(json_encode($dslsp));
	}

	function getall_makm(){
		$kmBUS = new khuyenmaiBUS();
		$dskm = $kmBUS->select_all();
		die(json_encode($dskm));
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

	function hide_sp(){
		$masp = $_POST['id'];
		$trangthai = $_POST['trangthai'];
		$spBUS = new sanphamBUS();
		$res = $spBUS->update_by_id(array("trangthai" => 0), $masp);
		die(json_encode($res));
	}

	function delete_sp(){
		$masp = $_POST['masp'];
		$spBUS = new sanphamBUS();
		$res = $spBUS->delete_by_id($masp);
		if($res != false) die("ok");
		else die("no_ok");
	}
	function delete_lsp(){
		$maloai = $_POST['maloai'];
		$lspBUS = new loaisanphamBUS();
		$res = $lspBUS->delete_by_id($maloai);
		if($res != false) die("ok");
		else die("no_ok");
	}

	function delete_tk(){
		$mand = $_POST['mand'];
		$ndBUS = new nguoidungBUS();
		$res = $ndBUS->delete_by_id($mand);
		if($res != false) die("ok");
		else die("no_ok");
	}

	function xoa_don_hang(){
		$mahd = $_POST['madh'];
		$db = new DB_driver();
		$db->remove("hoadon", "mahd = '$mahd'");
		$db->remove("chitiethoadon", "mahd = '$mahd'");
		die("ok");
	}

	function getall_donhang(){
		$db = new DB_driver();
		$sql = "SELECT * FROM hoadon";
		$donhang = $db->get_list($sql);
		// $sql = "SELECT * FROM chitiethoadon";
  //       $ctdonhang = $db->get_list($sql);
    	die (json_encode($donhang));
	}

	function getall_kh(){
		$sql = "SELECT * FROM nguoidung WHERE maquyen = 1";
		$db = new DB_driver();
		$res = $db->get_list($sql);
		die(json_encode($res));
	}

	function max_mand(){
		$sql = "SELECT MAX(mand) as maxmand FROM nguoidung";
		$db = new DB_driver();
		$res = $db->get_row($sql);
		die(json_encode($res));
	}

	function max_lsp(){
		$sql = "SELECT MAX(maloai) as maxlsp FROM loaisanpham";
		$db = new DB_driver();
		$res = $db->get_row($sql);
		die(json_encode($res));
	}

	function max_sp(){
		$sql = "SELECT MAX(masp) as maxsp FROM sanpham";
		$db = new DB_driver();
		$res = $db->get_row($sql);
		die(json_encode($res));
	}

	function add_sp(){
		$data = $_POST['dataAdd'];
        $spAddArr = array(
            'masp' => $data['masp'],
            'tensp' => $data['tensp'],
            'maloai' => $data['lsp'],
            'tacgia' => $data['tacgia'],
            'nxb' => $data['nxb'],
            'soluong' => $data['soluong'],
            'dongia' => $data['price'],
            'makm' => $data['makm'],
            'img' => $data['img'],
            'mota' => $data['mota'],
            'trangthai' => $data['trangthai'],
            'soluongdaban' => $data['soluongdaban']
        );

        $spBUS = new sanphamBUS();
        $res = $spBUS->add_new($spAddArr, true);
        die (json_encode($res));
	}

	function update_sp(){
		$data = $_POST['data_update'];
		$spupdate = array(
            'masp' => $data['masp'],
            'tensp' => $data['tensp'],
            'maloai' => $data['lsp'],
            'tacgia' => $data['tacgia'],
            'nxb' => $data['nxb'],
            'soluong' => $data['soluong'],
            'dongia' => $data['price'],
            'makm' => $data['makm'],
            'img' => $data['img'],
            'mota' => $data['mota'],
            'trangthai' => $data['trangthai'],
            'soluongdaban' => $data['soluongdaban']
        );
        $spBUS = new sanphamBUS();
        $res = $spBUS->update_by_id($spupdate, $data['masp']);
        die(json_encode($res));
	}

	function update_lsp(){
		$data = $_POST['data_update'];
		$lspupdate = array(
            'maloai' => $data['maloai'],
            'tenloai' => $data['tenloai'],
            'mota' => $data['mota']
        );
        $lspBUS = new loaisanphamBUS();
        $res = $lspBUS->update_by_id($lspupdate, $data['maloai']);
        die(json_encode($res));
	}

	function update_tt_dh(){
		$trangthai = $_POST['trangthai'];
		$ngaynhanhang = $_POST['ngaynhan'];
		if($trangthai == "") die("ok");
		$madh = $_POST['madh'];
		$db = new DB_driver();
		$res = $db->update("hoadon", array("ngaynhanhang" => $ngaynhanhang,"trangthai" => $trangthai), "mahd = '$madh'");
		if($res == "" || $res == null) die("no_ok" . "-" . $res);
		if($trangthai == "Đã hủy đơn hàng"){
			$sql = "SELECT * FROM chitiethoadon WHERE mahd = $madh";
			$res = $db->get_list($sql);
			for($i = 0; $i < sizeof($res); ++$i){
				add_sluong_sp($res[$i]['masp'], $res[$i]['soluong']);
			}
		}
		die("ok");
	}

	function add_sluong_sp($masp, $sluong){
		$spBUS = new sanphamBUS();
		$res = $spBUS->select_by_id("*", $masp);
		$soluong = (int)$res['soluong'] + (int)$sluong;
		$spBUS->update_by_id(array("soluong" => $soluong), $masp);
		return true;
	}

	function an_nd(){
		$mand = $_POST['mand'];
		$ndBUS = new nguoidungBUS();
		$res = $ndBUS->update_by_id(array('trangthai' => 0), $mand);
		die(json_encode($res));
	}

	function get_nd(){
		$mand = $_POST['mand'];
		$ndBUS = new nguoidungBUS();
		$res = $ndBUS->select_by_id("*",$mand);
		die(json_encode($res));
	}

	function sua_kh(){
		$data = $_POST['data_update'];
		if($data['matkhaucu'] != $data['matkhau']){
			$khupdate = array(
	            'mand' => $data['mand'],
	            'taikhoan' => $data['taikhoan'],
	            'matkhau' => md5($data['matkhau']),
	            'hoten' => $data['hoten'],
	            'sdt' => $data['sdt'],
	            'thudientu' => $data['thudientu'],
	            'diachi' => $data['diachi'],
	            'gioitinh' => $data['gioitinh'],
	            'ngaysinh' => $data['ngaysinh'],
	            'maquyen' => $data['maquyen'],
	            'trangthai' => $data['trangthai']
	        );
		}
		else{
			$khupdate = array(
	            'mand' => $data['mand'],
	            'taikhoan' => $data['taikhoan'],
	            'hoten' => $data['hoten'],
	            'sdt' => $data['sdt'],
	            'thudientu' => $data['thudientu'],
	            'diachi' => $data['diachi'],
	            'gioitinh' => $data['gioitinh'],
	            'ngaysinh' => $data['ngaysinh'],
	            'maquyen' => $data['maquyen'],
	            'trangthai' => $data['trangthai']
	        );
		}
		
        $ndBUS = new nguoidungBUS();
        $res = $ndBUS->update_by_id($khupdate, $data['mand']);
        if($data['maquyen'] == 0){
        	$khupdate = array(
	            'mand' => $data['mand'],
	            'taikhoan' => $data['taikhoan'],
	            'matkhau' => md5($data['matkhau']),
	            'hoten' => $data['hoten'],
	            'sdt' => $data['sdt'],
	            'thudientu' => $data['thudientu'],
	            'diachi' => $data['diachi'],
	            'gioitinh' => $data['gioitinh'],
	            'ngaysinh' => $data['ngaysinh'],
	            'maquyen' => $data['maquyen'],
	            'trangthai' => $data['trangthai']
	        );
        	$_SESSION['useradmin'] = $khupdate;
        }
        die(json_encode($res));
	}

	function them_kh(){
		$data = $_POST['data_update'];
		$khinsert = array(
            'mand' => $data['mand'],
            'taikhoan' => $data['taikhoan'],
            'matkhau' => md5($data['matkhau']),
            'hoten' => $data['hoten'],
            'sdt' => $data['sdt'],
            'thudientu' => $data['thudientu'],
            'diachi' => $data['diachi'],
            'gioitinh' => $data['gioitinh'],
            'ngaysinh' => $data['ngaysinh'],
            'maquyen' => $data['maquyen'],
            'trangthai' => $data['trangthai']
        );
        $ndBUS = new nguoidungBUS();
        $res = $ndBUS->add_new($khinsert, false);
        die("ok");
	}

	function them_lsp(){
		$data = $_POST['data_update'];
		$lspinsert = array(
            'maloai' => $data['maloai'],
            'tenloai' => $data['tenloai'],
            'mota' => $data['mota']
        );
        $lspBUS = new loaisanphamBUS();
        $res = $lspBUS->add_new($lspinsert, false);
        die("ok");
	}

	function select_chitietdonhang(){
		$mahd = $_POST['mahd'];
		$db = new DB_driver();
		$sql = "SELECT * FROM chitiethoadon WHERE mahd = '$mahd'";
		$spBUS = new sanphamBUS();
		$res = $db->get_list($sql);
		for($i = 0; $i < sizeof($res); ++$i){
			$res[$i]['sanpham'] = $spBUS->select_by_id("*", $res[$i]['masp']);
		}
		die(json_encode($res));
	}

	function load_nam_for_thong_ke(){
		$sql = 'SELECT DISTINCT YEAR(ngaynhanhang) as nam FROM `hoadon` ORDER BY nam DESC';
		$db = new DB_driver();
		$res = $db->get_list($sql);

		die(json_encode($res));
	}

	function load_thong_ke_san_pham_ban_chay_admin(){
		$nam = $_POST['nam'];
		$thang = $_POST['thang'];
		if($thang == 0){
			$sql = "SELECT sanpham.masp, sanpham.tensp, chitiethoadon.soluong, sanpham.dongia, khuyenmai.tenkm, sanpham.trangthai, sanpham.img FROM chitiethoadon, sanpham, khuyenmai, hoadon WHERE chitiethoadon.masp = sanpham.masp AND sanpham.makm = khuyenmai.makm AND sanpham.trangthai = 1 AND hoadon.mahd = chitiethoadon.mahd AND YEAR(hoadon.ngaynhanhang) = '$nam' ORDER BY chitiethoadon.soluong DESC";
		}
		else{
			$sql = "SELECT sanpham.masp, sanpham.tensp, chitiethoadon.soluong, sanpham.dongia, khuyenmai.tenkm, sanpham.trangthai, sanpham.img FROM chitiethoadon, sanpham, khuyenmai, hoadon WHERE chitiethoadon.masp = sanpham.masp AND sanpham.makm = khuyenmai.makm AND sanpham.trangthai = 1 AND hoadon.mahd = chitiethoadon.mahd AND YEAR(hoadon.ngaynhanhang) = '$nam' AND MONTH(hoadon.ngaynhanhang) = '$thang' ORDER BY chitiethoadon.soluong DESC";
		}

		$db = new DB_driver();
		$res = $db->get_list($sql);
		die(json_encode($res));
	}

	function load_thong_ke_loai_san_pham_ban_chay_admin(){
		$nam = $_POST['nam'];
		$thang = $_POST['thang'];
		if($thang == 0){
			$sql = "SELECT loaisanpham.maloai, loaisanpham.tenloai, SUM(chitiethoadon.soluong) as soluong, SUM(sanpham.dongia) as tongtien FROM loaisanpham, sanpham, chitiethoadon, hoadon WHERE chitiethoadon.masp = sanpham.masp AND sanpham.maloai = loaisanpham.maloai AND hoadon.mahd = chitiethoadon.mahd AND YEAR(hoadon.ngaynhanhang) = '$nam' GROUP BY loaisanpham.maloai ORDER BY soluong DESC";
		}
		else{
			$sql = "SELECT loaisanpham.maloai, loaisanpham.tenloai, SUM(chitiethoadon.soluong) as soluong, SUM(sanpham.dongia) as tongtien FROM loaisanpham, sanpham, chitiethoadon, hoadon WHERE chitiethoadon.masp = sanpham.masp AND sanpham.maloai = loaisanpham.maloai AND hoadon.mahd = chitiethoadon.mahd AND YEAR(hoadon.ngaynhanhang) = '$nam' AND MONTH(hoadon.ngaynhanhang) = '$thang' GROUP BY loaisanpham.maloai ORDER BY soluong DESC";
		}

		$db = new DB_driver();
		$res = $db->get_list($sql);
		die(json_encode($res));
	}

	function load_thong_ke_san_pham_ban_chay_admin_sort(){
		$nam = $_POST['nam'];
		$thang = $_POST['thang'];
		$type = $_POST['loai'];
		$sort = $_POST['sort'];
		switch ($type) {
			case 'masp':
				$sql = "ORDER BY sanpham.masp $sort";
				break;
			case 'ten':
				$sql = "ORDER BY sanpham.tensp $sort";
				break;
			case 'soluong':
				$sql = "ORDER BY chitiethoadon.soluong $sort";
				break;
			case 'gia':
				$sql = "ORDER BY sanpham.dongia $sort";
				break;
			case 'khuyenmai':
				$sql = "ORDER BY khuyenmai.tenkm $sort";
				break;
			case 'trangthai':
				$sql = "ORDER BY sanpham.trangthai $sort";
				break;
			default:
				# code...
				break;
		}
		if($thang == 0){
			$sql = "SELECT sanpham.masp, sanpham.tensp, chitiethoadon.soluong, sanpham.dongia, khuyenmai.tenkm, sanpham.trangthai, sanpham.img FROM chitiethoadon, sanpham, khuyenmai, hoadon WHERE chitiethoadon.masp = sanpham.masp AND sanpham.makm = khuyenmai.makm AND sanpham.trangthai = 1 AND hoadon.mahd = chitiethoadon.mahd AND YEAR(hoadon.ngaynhanhang) = '$nam' " . $sql;
		}
		else{
			$sql = "SELECT sanpham.masp, sanpham.tensp, chitiethoadon.soluong, sanpham.dongia, khuyenmai.tenkm, sanpham.trangthai, sanpham.img FROM chitiethoadon, sanpham, khuyenmai, hoadon WHERE chitiethoadon.masp = sanpham.masp AND sanpham.makm = khuyenmai.makm AND sanpham.trangthai = 1 AND hoadon.mahd = chitiethoadon.mahd AND YEAR(hoadon.ngaynhanhang) = '$nam' AND MONTH(hoadon.ngaynhanhang) = '$thang' " . $sql;
		}

		$db = new DB_driver();
		$res = $db->get_list($sql);
		die(json_encode($res));
	}

	function load_thong_ke_loai_san_pham_ban_chay_admin_sort(){
		$nam = $_POST['nam'];
		$thang = $_POST['thang'];
		$type = $_POST['loai'];
		$sort = $_POST['sort'];
		switch ($type) {
			case 'maloai':
				$sql = "ORDER BY loaisanpham.maloai $sort";
				break;
			case 'tenloai':
				$sql = "ORDER BY loaisanpham.tenloai $sort";
				break;
			case 'soluong':
				$sql = "ORDER BY soluong $sort";
				break;
			case 'gia':
				$sql = "ORDER BY tongtien $sort";
				break;
			default:
				# code...
				break;
		}
		

		if($thang == 0){
			$sql = "SELECT loaisanpham.maloai, loaisanpham.tenloai, SUM(chitiethoadon.soluong) as soluong, SUM(sanpham.dongia) as tongtien FROM loaisanpham, sanpham, chitiethoadon, hoadon WHERE chitiethoadon.masp = sanpham.masp AND sanpham.maloai = loaisanpham.maloai AND hoadon.mahd = chitiethoadon.mahd AND YEAR(hoadon.ngaynhanhang) = '$nam' GROUP BY loaisanpham.maloai " . $sql;
		}
		else{
			$sql = "SELECT loaisanpham.maloai, loaisanpham.tenloai, SUM(chitiethoadon.soluong) as soluong, SUM(sanpham.dongia) as tongtien FROM loaisanpham, sanpham, chitiethoadon, hoadon WHERE chitiethoadon.masp = sanpham.masp AND sanpham.maloai = loaisanpham.maloai AND hoadon.mahd = chitiethoadon.mahd AND YEAR(hoadon.ngaynhanhang) = '$nam' AND MONTH(hoadon.ngaynhanhang) = '$thang' GROUP BY loaisanpham.maloai " . $sql;
		}

		$db = new DB_driver();
		$res = $db->get_list($sql);
		die(json_encode($res));
	}

	function getrow_lsp(){
		$maloai = $_POST['maloai'];
		$lspBUS = new loaisanphamBUS();
		$res = $lspBUS->select_by_id("*", $maloai);
		if($res == false) die(json_encode(null));
		die(json_encode($res));
	}

	function login_admin(){
		$user = $_POST['user'];
		$pass = md5($_POST['pass']);

		$sql = "SELECT * FROM nguoidung WHERE taikhoan = '$user' AND matkhau = '$pass' AND maquyen = 0";
		$db = new DB_driver();
		$result = $db->get_row($sql);

		if($result != false){
			$_SESSION['useradmin'] = $result;
			die(json_encode($result));
			return;
		}
		unset($_SESSION['useradmin']);
		die (json_encode(null));
	}

?>