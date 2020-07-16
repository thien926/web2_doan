load_ngay_thang();


function load_ngay_thang(){
	var s = '<option value="0" selected>Ngày</option>';
	for(let i = 1; i < 32; ++i){
		if(i < 10){
			s += '<option value="0'+ i +'">'+ i +'</option>';
		}
		else{
			s += '<option value="'+ i +'">'+ i +'</option>';
		}
	}
	$("#ngay").html(s);
	s = '<option value="0" selected>Tháng</option>';
	for(let i = 1; i < 13; ++i){
		if(i < 10){
			s += '<option value="0'+ i +'">'+ i +'</option>';
		}
		else{
			s += '<option value="'+ i +'">'+ i +'</option>';
		}
	}
	$("#thang").html(s);
	var d = new Date();
	d = d.getFullYear();

	s = '<option value="0">Năm</option>';
	var k = d-100;
	for(let i = d; i >= k; --i){
		s += '<option value="'+ i +'">'+ i +'</option>';
	}
	$("#year").html(s);
}

function kt_dki(){
	var t = true;
	var name = $("#name").val();
	var user = $("#user").val();
	var pass = $("#pass").val();
	var replay_pass = $("#replay_pass").val();
	var mail = $("#mail").val();
	var phone = $("#phone").val();
	var address = $("#address").val();
	var sex = "";
	if($("#nam").prop("checked") == true){
		sex = $("#nam").val();
	}
	else if($("#nu").prop("checked") == true){
		sex = $("#nu").val();
	}
	var date = $("#ngay").val();
	var month = $("#thang").val();
	var year = $("#year").val();
	
	$(".note").html("*");


	// Kiểm tra họ tên
	if(name == ""){
		$("#note_name").html("(Họ và tên không được rỗng!)");
		t = false;
	}
	else if(name.length < 3){
		$("#note_name").html("(Họ và tên phải lớn hơn bằng 3 kí tự!)");
		t = false;
	}

	// Kiểm tra tên tài khoản
	if(user == ""){
		$("#note_user").html("(Tên tài khoản không được rỗng!)");
		t = false;
	}
	else if(user.length < 5){
		$("#note_user").html("(Tên tài khoản phải bằng hoặc hơn 5 kí tự!)");
		t = false;
	}
	else{
		format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
		if(format.test(user)){
			$("#note_user").html("(Tên tài khoản không chứa các kí tự đặc biệt!)");
			t = false;
		}
		else if(kiem_tra_chuoi_co_dau(user)){
			$("#note_user").html("(Tên tài khoản không chứa các kí tự có dấu!)");
			t = false;
		}
		else{
			format = /[A-Z]{1}/i;
			if(!format.test(user)){
				$("#note_user").html("(Tên tài khoản phải chứa ít nhất 1 kí tự chữ)");
				t = false;
			}
		}
	}


	// Kiểm tra password
	if(pass == ""){
		$("#note_pass").html("(Mật khẩu không được rỗng!)");
		t = false;
	}
	else if(pass.length < 5){
		$("#note_pass").html("(Mật khẩu phải bằng hoặc hơn 5 kí tự!)");
		t = false;
	}
	if(replay_pass == ""){
		$("#note_replay_pass").html("(Nhập lại mật khẩu không được rỗng!)");
		t = false;
	}
	else if(replay_pass != pass){
		$("#note_replay_pass").html("(Xác nhận mật khẩu không khớp!)");
		t = false;
	}

	// Kiểm tra mail
	if(mail == ""){
		$("#note_mail").html("(Thư điện tử không được rỗng!)");
		t = false;
	}
	else if(mail.length < 5){
		$("#note_mail").html("(Thư điện tử quá ngắn!)");
		t = false;
	}
	else{
		format = /[A-Z0-9._%+-]{6,30}@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
		if(!format.test(mail)){
			$("#note_mail").html("(Thư điện tử không hợp lệ!)");
			t = false;
		}
	}

	// Kiểm tra số điện thoại
	if(phone == ""){
		$("#note_phone").html("(Số điện thoại không được rỗng!)");
		t = false;
	}
	else{
		format = /\D/g;
		if(format.test(phone)){
			$("#note_phone").html("(Số điện thoại phải là chữ số!)");
			t = false;
		}
		else if(phone.length < 10 || phone.length > 11){
			$("#note_phone").html("(Số điện thoại không phù hợp!)");
			t = false;
		}
	}

	//Kiểm tra địa chỉ
	if(address == ""){
		$("#note_diachi").html("Địa chỉ không được rỗng!");
		t = false;
	}

	// Kiểm tra giới tính
	if(sex == ""){
		$("#note_sex").html("Giới tính phải được chọn!");
		t = false;
	}
	// Kiểm tra ngày sinh
	var s = "";
	var t_date = true;
	if(parseInt(date) == 0){
		t = false;
		t_date = false;
		s += "ngày, ";
	}
	if(parseInt(month) == 0){
		t = false;
		t_date = false;
		s += "tháng, ";
	}
	if(parseInt(year) == 0){
		t = false;
		t_date = false;
		s += "năm, ";
	}
	
	if(!t_date){
		s = s.trim();
		s = s[0].toUpperCase() + s.slice(1, s.length-1) + " không được rỗng!";
		$("#note_date").html(s);
	}

	var thoigian = year+"-"+month+"-"+date;	

	if(t){
		
		$.ajax({
	        url: "php/xulytaikhoan.php",
	        type: "post",
	        dataType: "json",
	        timeout: 1500,
	        data: {
	            request: 'dangky',
	            data_name: name,
	            data_user: user,
	            data_pass: pass,
	            data_phone: phone,
	            data_mail: mail,
	            data_address: address,
	            data_sex: sex,
	            data_date: thoigian
	        },
	        success: function(kq) {
	            if(kq != null) {
	                Swal.fire({
	                    type: 'success',
	                    title: 'Đăng kí thành công ' + kq.taikhoan,
	                    text: 'Bạn sẽ được đăng nhập tự động',
	                    confirmButtonText: 'Tuyệt'
	                }).then((result) => {
                        location.reload();
                    });
	            }
	            else{
	            	t = false;
	            	Swal.fire({
	            		type : "error",
	            		title : "Tài khoản đã tồn tại!"
	            	});
	            	$('#note_user').html("Tài khoản đã tồn tại!");
	            }
	        },
	        error: function(e) {
	            Swal.fire({
	                type: "error",
	                title: "Lỗi đăng ký tài khoản",
	                html: e.responseText
	            });
	            // console.log(e.responseText)
	        }
	    });
	}

}

function kiem_tra_chuoi_co_dau(s){
	for(let i = 0; i < s.length; i++){
		switch(s[i]){
			case 'á':{
				return true;
			}
			case 'à':{
				return true;
			}
			case 'ả':{
				return true;
			}
			case 'ã':{
				return true;
			}
			case 'ạ':{
				return true;
			}
			case 'ă':{
				return true;
			}
			case 'ắ':{
				return true;
			}
			case 'ằ':{
				return true;
			}
			case 'ẳ':{
				return true;
			}
			case 'ẵ':{
				return true;
			}
			case 'ặ':{
				return true;
			}
			case 'â':{
				return true;
			}
			case 'ấ':{
				return true;
			}
			case 'ầ':{
				return true;
			}
			case 'ẩ':{
				return true;
			}
			case 'ẫ':{
				return true;
			}
			case 'ậ':{
				return true;
			}
			case 'é':{
				return true;
			}
			case 'è':{
				return true;
			}
			case 'ẻ':{
				return true;
			}
			case 'ẽ':{
				return true;
			}
			case 'ẹ':{
				return true;
			}
			case 'ê':{
				return true;
			}
			case 'ế':{
				return true;
			}
			case 'ề':{
				return true;
			}
			case 'ể':{
				return true;
			}
			case 'ễ':{
				return true;
			}
			case 'ệ':{
				return true;
			}
			case 'í':{
				return true;
			}
			case 'ì':{
				return true;
			}
			case 'ỉ':{
				return true;
			}
			case 'ĩ':{
				return true;
			}
			case 'ị':{
				return true;
			}
			case 'ó':{
				return true;
			}
			case 'ò':{
				return true;
			}
			case 'ỏ':{
				return true;
			}
			case 'õ':{
				return true;
			}
			case 'ọ':{
				return true;
			}
			case 'ô':{
				return true;
			}
			case 'ố':{
				return true;
			}
			case 'ồ':{
				return true;
			}
			case 'ổ':{
				return true;
			}
			case 'ỗ':{
				return true;
			}
			case 'ộ':{
				return true;
			}
			case 'ơ':{
				return true;
			}
			case 'ớ':{
				return true;
			}
			case 'ờ':{
				return true;
			}
			case 'ở':{
				return true;
			}
			case 'ỡ':{
				return true;
			}
			case 'ợ':{
				return true;
			}
			case 'ú':{
				return true;
			}
			case 'ù':{
				return true;
			}
			case 'ủ':{
				return true;
			}
			case 'ũ':{
				return true;
			}
			case 'ụ':{
				return true;
			}
			case 'ư':{
				return true;
			}
			case 'ứ':{
				return true;
			}
			case 'ừ':{
				return true;
			}
			case 'ử':{
				return true;
			}
			case 'ữ':{
				return true;
			}
			case 'ự':{
				return true;
			}
			default:break;
		}
	}
	return false;
}
