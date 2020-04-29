<?php

	session_start();

	require_once("../ConnectDB/DB_classes.php");

	if(!isset($_POST['request']) && !isset($_GET['request'])) die();

	switch ($_POST['request']) {
		case 'dangky':
			dangKy();
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
		
		$status = (new nguoidungBus())->add_new_ND(array(
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

		$result = (new DB_driver())->get_row($sql);

		if($result != false){
		    $_SESSION['currentUser']=$result;
		    die (json_encode($result)); 
		}  
		else{
			unset($_SESSION['currentUser']);
		}

		die (json_encode(null));
	}


?>
