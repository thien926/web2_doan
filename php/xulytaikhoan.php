<?php

	session_start();

	require_once("../ConnectDB/DB_classes.php");

	if(!isset($_POST['request']) && !isset($_GET['request'])) die(json_encode(null));

	switch ($_POST['request']) {
		case 'dangky':
			dangKy();
			break;

		case 'dangnhap':
			dangNhap();
			break;
			
		case 'getCurrentUser':
			if(isset($_SESSION['currentUser'])) {
				die (json_encode($_SESSION['currentUser']));
			}
			die (json_encode(null));
			break;
		case 'dangxuat':
			dangXuat();
			break;
		case 'sua_taikhoan_user':
			sua_taikhoan_user();
			break;
		case 'sua_mat_khau_user':
			sua_mat_khau_user();
			break;
		default:
			# code...
			break;
	}

	function dangKy(){
		$name = $_POST['data_name'];
		$user = $_POST['data_user'];
		$pass = md5($_POST['data_pass']);
		$phone = $_POST['data_phone'];
		$mail = $_POST['data_mail'];
		$address = $_POST['data_address'];
		$sex = $_POST['data_sex'];
		$date = $_POST['data_date'];
		$ndBUS = new nguoidungBUS();
		$status = $ndBUS->add_new_ND(array(
			"mand" => "",
			"taikhoan" => $user,
			"matkhau" => $pass,
			"hoten" => $name,
			"sdt" => $phone,
			"thudientu" => $mail,
			"diachi" => $address,
			"gioitinh" => $sex,
			"ngaysinh" => $date,
			"maquyen" => 1,
			"trangthai" => 1
		));

		if($status == null){
			die (json_encode(null));
			return;
		}

		$sql = "SELECT * FROM nguoidung WHERE taikhoan='$user' AND maquyen=1 AND trangthai=1";
		$db = new DB_driver();
		$result = $db->get_row($sql);

		if($result != false){
		    $_SESSION['currentUser']=$result;
		    die (json_encode($result)); 
		    return;
		} 
		unset($_SESSION['currentUser']);
		die (json_encode(null));
	}

	function dangNhap(){
		$user = $_POST['user'];
		$pass = md5($_POST['pass']);

		$sql = "SELECT * FROM nguoidung WHERE taikhoan = '$user' AND matkhau = '$pass' AND maquyen = 1";
		$db = new DB_driver();
		$result = $db->get_row($sql);

		if($result != false){
			$_SESSION['currentUser'] = $result;
			die(json_encode($result));
			return;
		}
		unset($_SESSION['currentUser']);
		die (json_encode(null));
	}

	function dangXuat(){
		if(isset($_SESSION['currentUser'])){
			unset($_SESSION['currentUser']);
			die("ok");
			return;
		}
		die("no_ok");
	}

	function sua_taikhoan_user(){
		$data = $_POST['data_update'];
		$khupdate = array(
            'mand' => $data['mand'],
            'hoten' => $data['hoten'],
            'sdt' => $data['sdt'],
            'thudientu' => $data['thudientu'],
            'diachi' => $data['diachi'],
            'gioitinh' => $data['gioitinh'],
            'ngaysinh' => $data['ngaysinh']
        );

        $ndBUS = new nguoidungBUS();
        $res = $ndBUS->update_by_id($khupdate, $data['mand']);

        // Thiết lập lại session tài khoản
        $mand = $data['mand'];
		$sql = "SELECT * FROM nguoidung WHERE mand = '$mand' AND maquyen = 1";
		$db = new DB_driver();
		$result = $db->get_row($sql);
		if($result != false){
			$_SESSION['currentUser'] = $result;
		}

        if($res == null) die("no_ok");
        die("ok");
	}

	function sua_mat_khau_user(){
		$data = $_POST['data_update'];
		$data['pass'] = md5($data['pass']);
		$mand = $data['mand'];
		// Lấy mật khẩu cũ đễ so sánh 2 mật khẩu
		$sql = "SELECT * FROM nguoidung WHERE mand = '$mand' AND maquyen = 1";
		$db = new DB_driver();
		$nguoidung = $db->get_row($sql);

		if($nguoidung['matkhau'] != $data['pass']){
			die("no_pass_khac");
		}

		// Update mật khẩu
		$data['newpass'] = md5($data['newpass']);
		$khupdate = array(
            'mand' => $data['mand'],
            'matkhau' => $data['newpass']
        );
        $ndBUS = new nguoidungBUS();
        $res = $ndBUS->update_by_id($khupdate, $data['mand']);

        // Lấy tài khoản khi đã update mật khẩu để lưu vào session
        $sql = "SELECT * FROM nguoidung WHERE mand = '$mand' AND maquyen = 1";
		$nguoidung = $db->get_row($sql);
		if($nguoidung != false){
			$_SESSION['currentUser'] = $nguoidung;
		}

		if($res == null) die("no_ok");
        die("ok");
	}

?>