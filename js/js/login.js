

function kt_dn(){
	var user = $("#user").val();
	var pass = $("#pass").val();
	var t = true;
	$("#note_user").val("*");
	$("#note_pass").val("*");

	if(user == ""){
		$("#note_user").html("Tên tài khoản không được rỗng!");
		t = false;
	}

	if(pass == ""){
		$("#note_pass").html("Mật khẩu không được rỗng!");
		t = false;
	}
	if(t){
		$.ajax({
			url : "php/xulytaikhoan.php",
			type : "post",
			dataType : "json",
			timeout : 1500,
			data : {
				request : "dangnhap",
				user : user,
				pass : pass
			},
			success: function(data, status, xhr){
				if(data != null){
					Swal.fire({
						type: "success",
						title: "Đăng nhập thành công!",
						text: "Chào " + data.hoten
					}).then((result) => {
						getCurrentUser();
						load_icon_cart();
						$("#user").val("");
						$("#pass").val("");
					});
					
					// getCurrentUser();

				} else {
					t = false;
					Swal.fire({
						type: "error",
						title: "Tài khoản hoặc mật khẩu không đúng"
					});
				}
			},
			error: function(e){
				t = false;
				Swal.fire({
					type: "error",
					title: "Lỗi đăng nhập",
					html: e.responseText
				});
			}
		});
	}
}