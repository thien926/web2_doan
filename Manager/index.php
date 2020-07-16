<?php  ob_start();  ?>
<!DOCTYPE html>
<!--[if lt IE 7]> <html class="lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]> <html class="lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]> <html class="lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html lang="en"> <!--<![endif]-->
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title>Đăng nhập Admin - Koparion</title>
  <link rel="stylesheet" href="css/login.css">
  <link rel="shortcut icon" type="image/x-icon" href="../favicon.png">
  <!--[if lt IE 9]><script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
</head>
<body>
  <section class="container">
    <div class="login">
      <h1>Đăng nhập admin</h1>
      <form method="post" action="admin.php" onsubmit="return dangnhap()" name="myform">
        <p><input type="text" name="user" value="" placeholder="Tên đăng nhập"></p>
        <p><input type="password" name="pass" value="" placeholder="Mật khẩu"></p>
        <p class="submit"><input type="submit" name="commit" value="Đăng nhập"></p>
      </form>
    </div>
  </section>
  <script src="../js/vendor/jquery-1.12.0.min.js"></script>
  <script src="../js/js/sweetalert2@8.js"></script>
  <script type="text/javascript">
    function dangnhap(){
      var myform = document.forms['myform'];
      var user = myform['user'].value;
      var pass = myform['pass'].value;

      if(user == "" || pass == ""){
        Swal.fire({
          type : "error",
          title : "Lỗi đăng nhập",
          html : "Các trường dữ liệu không được bỏ trống. Hãy nhập lại!"
        });
        return false;
      }

      $.ajax({
        url : "php/xulyadmin.php",
        type : "post",
        timeout : 3000,
        dataType : "json",
        data : {
          request : "login_admin",
          user : user,
          pass : pass
        },
        async: false,
        success : function(data){
          if(data != null){
            Swal.fire({
              type: "success",
              title: "Đăng nhập thành công!",
              text: "Chào admin " + data.hoten
            }).then((result) => {
              if(result.value){
                location.href="admin.php";
              }
            });
            
          }
        },
        error : function(e){
          Swal.fire({
            type : "error",
            title : "Lỗi đăng nhập",
            html : e.responseText
          });
        }
      });
      return false;
    }
  </script>
</body>
</html>
