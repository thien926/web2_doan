<?php

	require_once("../ConnectDB/DB_classes.php");
	if(!isset($_POST['request']) && !isset($_GET['request'])){
		die(null);
		return;
	}
	switch ($_POST['request']) {
		case 'getAllloaisanpham':
			$lspBUS = new loaisanphamBUS();
			$list = $lspBUS->select_all();
			die(json_encode($list));
			break;
		case 'getid':
			getid();
			break;
		default:
			# code...
			break;
	}

	function getid(){
		$id = $_POST['id'];
		$lsp = new loaisanphamBUS();
		$res = $lsp->select_by_id("*", $id);
		if($res == false) die(json_encode(null));
		die(json_encode($res));
	}

?>