document.getElementById("list_danhmuc").onclick = function() {showdanhmuc();};
document.getElementById("icon_danhmuc").onclick = function() {showdanhmuc();};
// Form đăng kí
document.getElementById("div_dki_date").onchange = function() {onchange_date();};
document.getElementById("div_dki_month").onchange = function() {onchange_date();};
document.getElementById("div_dki_year").onchange = function() {onchange_date();};
document.forms.namedItem("form_dki").addEventListener("submit", (e) => {

	kiem_tra_dki(e);

});
// Kết thức form đăng kí

function showdanhmuc(){
	if(document.getElementById("danh_muc").value != true){
		document.getElementById("danh_muc").value = true;
		document.getElementById("submenu").style.display = "block";
	}
	else{
		document.getElementById("danh_muc").value = false;
		document.getElementById("submenu").style.display = "none";
	}
	
}



// ========================   Phần đăng kí   ===============
function kiem_tra_dki(e){
	var t = true;
	var name = document.forms.namedItem("form_dki").name;
	var user = document.forms.namedItem("form_dki").user;
	var pass = document.forms.namedItem("form_dki").pass;
	var replay_pass = document.forms.namedItem("form_dki").replay_pass;
	var phone = document.forms.namedItem("form_dki").phone;
	var mail = document.forms.namedItem("form_dki").mail;
	var sex = document.forms.namedItem("form_dki").sex;
	var date = document.forms.namedItem("form_dki").date;
	var month = document.forms.namedItem("form_dki").month;
	var year = document.forms.namedItem("form_dki").year;

	document.getElementById('note_name').innerHTML = "";
	document.getElementById('note_user').innerHTML = "";
	document.getElementById('note_pass').innerHTML = "";
	document.getElementById('note_replay_pass').innerHTML = "";
	document.getElementById('note_phone').innerHTML = "";
	document.getElementById('note_mail').innerHTML = "";
	document.getElementById('note_sex').innerHTML = "";
	document.getElementById('note_date').innerHTML = "";


	// Kiểm tra họ tên
	if(name.value == ""){
		document.getElementById('note_name').innerHTML = "Họ và tên không được rỗng!";
		t = false;
	}
	else if(name.value.length < 3){
		document.getElementById('note_name').innerHTML = "Họ và tên phải lớn hơn bằng 3 kí tự!";
		t = false;
	}

	// Kiểm tra tên đăng nhập
	if(user.value == ""){
		document.getElementById('note_user').innerHTML = "Tên đăng nhập không được rỗng!";
		t = false;
	}
	else if(user.value.length < 5){
		document.getElementById('note_user').innerHTML = "Tên đăng nhập phải bằng hoặc hơn 5 kí tự!";
		t = false;
	}
	else{
		format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
		if(format.test(user.value)){
			document.getElementById('note_user').innerHTML = "Tên đăng nhập không chứa các kí tự đặc biệt!"
			t = false;
		}
		else{
			format = /[A-Z]{1}/i;
			if(!format.test(user.value)){
				document.getElementById('note_user').innerHTML = "Tên đăng nhập phải chứa ít nhất 1 kí tự chữ";
				t = false;
			}
			//Cái này cần chỉnh sửa do chưa có database
			// else{
			// 	if(account != null){
			// 		for(let i = 0; i < account.length; i++) if(user.value == account[i].user){
			// 			document.getElementById('chuthich1').innerHTML = "Tài khoản đã tồn tại!";
			// 			t = false;
			// 		}
			// 	}
			// }
		}
	}

	// Kiểm tra password
	if(pass.value == ""){
		document.getElementById('note_pass').innerHTML = "Mật khẩu không được rỗng!";
		t = false;
	}
	else if(pass.value.length < 5){
		document.getElementById('note_pass').innerHTML = "Mật khẩu phải bằng hoặc hơn 5 kí tự!";
		t = false;
	}
	if(replay_pass.value == ""){
		document.getElementById('note_replay_pass').innerHTML = "Nhập lại mật khẩu không được rỗng!";
		t = false;
	}
	else if(replay_pass.value != pass.value){
		document.getElementById('note_replay_pass').innerHTML = "Xác nhận mật khẩu không khớp!";
		t = false;
	}

	// Kiểm tra số điện thoại
	if(phone.value == ""){
		document.getElementById('note_phone').innerHTML = "Số điện thoại không được rỗng!";
		t = false;
	}
	else{
		format = /\D/g;
		if(format.test(phone.value)){
			document.getElementById('note_phone').innerHTML = "Số điện thoại phải là chữ số!";
			t = false;
		}
		else if(phone.value.length < 10 || phone.value.length > 11){
			document.getElementById('note_phone').innerHTML = "Số điện thoại không phù hợp!";
			t = false;
		}
	}

	// Kiểm tra mail
	if(mail.value == ""){
		document.getElementById('note_mail').innerHTML = "Thư điện tử không được rỗng!";
		t = false;
	}
	else if(mail.value.length < 5){
		document.getElementById('note_mail').innerHTML = "Thư điện tử quá ngắn!";
		t = false;
	}
	else{
		format = /[A-Z0-9._%+-]{6,30}@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
		if(!format.test(mail.value)){
			document.getElementById('note_mail').innerHTML = "Thư điện tử không hợp lệ!";
			t = false;
		}
	}

	// Kiểm tra giới tính
	if(sex.value == ""){
		document.getElementById('note_sex').innerHTML = "Giới tính phải được chọn!";
		t = false;
	}

	// Kiểm tra ngày sinh
	var s = "";
	var t_date = true;
	if(parseInt(date.value) == 0){
		t = false;
		t_date = false;
		s += "ngày, ";
	}
	if(parseInt(month.value) == 0){
		t = false;
		t_date = false;
		s += "tháng, ";
	}
	if(parseInt(date.value) == 0){
		t = false;
		t_date = false;
		s += "năm, ";
	}

	s = s.trim();
	s = s[0].toUpperCase() + s.slice(1, s.length-1) + " không được rỗng!";
	if(!t_date) document.getElementById('note_date').innerHTML = s;

	if(!t) e.preventDefault();
}

function onchange_date(){
	var date = parseInt(document.getElementById('div_dki_date').value);
	var month = parseInt(document.getElementById('div_dki_month').value);
	var year = parseInt(document.getElementById('div_dki_year').value);

	if(year == 0){
		// year = 0 thì xét month trước mới xét date, year != 0 thì ngược lại
		if(month == 0){
			return;
		}
		if(date == 0){
			return;
		}
		// Có tháng, có ngày, nhưng ko có year thì xét ngày có đúng với tháng ko
		switch(month){
			case 1:
			case 3:
			case 5:
			case 7:
			case 8:
			case 10:
			case 12:{
				return;
			}
			case 4:
			case 6:
			case 9:
			case 11:{
				if(date > 30){
					document.getElementById('div_dki_date').value = 30;
				}
				return;
			}
			case 2:{
				if(date > 29){
					document.getElementById('div_dki_date').value = 29;
				}
				return;
			}
			default: return;
		}
	}
	else{
		// Năm nào cũng có 12 tháng nên ko cần xét month trước
		if(date == 0){
			return;
		}
		// Nếu có ngày mà ko có month thì return
		if(month == 0){
			return;
		}
		// có đủ ngày tháng năm thì xét ngày có đúng với tháng ko và xét thêm phải năm nhuận ko
		switch(month){
			case 1:
			case 3:
			case 5:
			case 7:
			case 8:
			case 10:
			case 12:{
				return;
			}
			case 4:
			case 6:
			case 9:
			case 11:{
				if(date > 30){
					document.getElementById('div_dki_date').value = 30;
				}
				return;
			}
			case 2:{
				if(kiem_tra_year_nhuan(year)){
					if(date > 29){
						document.getElementById('div_dki_date').value = 29;
					}
				}
				else{
					if(date > 28){
						document.getElementById('div_dki_date').value = 28;
					}
				}
				return;
			}
			default: return;
		}
	}
}

function kiem_tra_year_nhuan(year){
	year = parseInt(year);
	// Nếu số năm chia hết cho 400,
    // đó là 1 năm nhuận
    if (year % 400 == 0) 
        return true; 
  
    // Nếu số năm chia hết cho 4 và không chia hết cho 100,
    // đó là 1 năm nhuận
    if (year % 4 == 0 && year % 100 != 0) 
        return true;
 
    // trường hợp còn lại 
    // không phải năm nhuận
    return false; 
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