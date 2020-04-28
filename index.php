
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- <meta http-equiv="X-UA-Compatible" content="ie=edge"> -->
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<title>CleverBook - Thế giới sách</title>
	<link rel="shortcut icon" href="img/icons8-books-16.ico" />
	<link rel="stylesheet" href="css/chung.css">
	<?php require_once "php/echoHTML.php"; ?>
</head>
<body>
	<?php  

	echo_head();
	if(isset($_GET['dispatch'])){
		if($_GET['dispatch'] == "useradd"){
			echo_form_dki();
		}
	}

	

	?>

	
	

	<script src="js/chung.js"></script>
</body>
</html>