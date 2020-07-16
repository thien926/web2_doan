load_tieu_de("");


function load_tieu_de(tieude){
	var user = null;
	$.ajax({
		url : "php/xulytaikhoan.php",
		type : "post",
		dataType : "json",
		timeout : 3000,
		data : {
			request : "getCurrentUser"
		},
		async: false,
		success: function(data, status, xhr){
			if(data != null){
				user = data;
			} 
			else{
				location.href = "index.php";
			}
		},
		error: function(e){
			location.href = "index.php";
		}
		// getCurrentUser();
	});
	$("#phan_trang").html("");
	switch(tieude){
		case "":{
			$("#tieu_de").html("Xin chào " + user.hoten);
			break;
		}
		case "Xem Thông Tin Cá Nhân":{
			$("#tieu_de").html(tieude);
			$("#list").html(load_xem_thong_tin_ca_nhan(user));
			break;
		}
		case "Sửa thông tin cá nhân":{
			$("#tieu_de").html(tieude);
			$("#list").html(load_sua_thong_tin_ca_nhan(user));
			break;
		}
		case "Sửa mật khẩu":{
			$("#tieu_de").html(tieude);
			$("#list").html(load_sua_mat_khau(user));
			break;
		}
		case "Đơn hàng của tôi":{
			$("#tieu_de").html(tieude);
			load_don_hang(user.mand, 1);
			break;
		}
		default: break;
	}
}

function load_xem_thong_tin_ca_nhan(data){
	var s = `<div class="single-shop mb-30">
				<div class="row">
					<div class="single-register">
						<form>
							<label>Họ và tên</label>
							<input type="text" id="name" disabled value="`+ data.hoten +`" />
						</form>
					</div>
					<div class="single-register">
						<form>
							<label>Tên đăng nhập</label>
							<input type="text" id="user" value = "`+ data.taikhoan +`" disabled/>
						</form>
					</div>
					<div class="row">
						<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
							<div class="single-register">
								<form>
									<label>Thư điện tử</label>
									<input type="text" id="mail" value = "`+data.thudientu+`" disabled/>
								</form>
							</div>
						</div>
						<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
							<div class="single-register">
								<form>
									<label>Số điện thoại</label>
									<input type="text" id="phone" value = "`+ data.sdt +`" disabled/>
								</form>
							</div>
						</div>
					</div>
					<div class="single-register">
						<form >
							<label>Địa chỉ</label>
							<input type="text" id="address" value = "`+ data.diachi +`" disabled/>
						</form>
					</div>
					<div class="single-register">
						<form >
							<label>Giới tính`;
							if(data.gioitinh == "Nam"){
								s += `<input type="radio" value="Nam" name="sex" id="nam" checked/><span>Nam</span>
								<input type="radio" value="Nữ" name="sex" id="nu" disabled/><span>Nữ</span>`;
							}
							else{
								s += `<input type="radio" value="Nam" name="sex" id="nam" disabled/><span>Nam</span>
								<input type="radio" value="Nữ" name="sex" id="nu" checked/><span>Nữ</span>`;
							}
								
							s+=`</label>
							
						</form>
					</div>
					<div class="single-register">
						<form>
							<label>Ngày sinh</label>
							<input type="text" value = "`+data.ngaysinh+`" disabled/>
						</form>
					</div>
				</div>
			</div>`;
	return s;
}

function load_sua_thong_tin_ca_nhan(data){
	var s = `<div class="single-shop mb-30">
				<div class="row">
					<div class="single-register">
						<form>
							<label>Họ và tên <span class="note" id="note_name">*</span></label>
							<input type="text" id="name" value="`+ data.hoten +`" />
						</form>
					</div>
					<div class="single-register">
						<form>
							<label>Tên đăng nhập</label>
							<input type="text" id="user" value = "`+ data.taikhoan +`" disabled/>
						</form>
					</div>
					<div class="row">
						<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
							<div class="single-register">
								<form>
									<label>Thư điện tử <span class="note" id="note_mail">*</span></label>
									<input type="text" id="mail" value = "`+data.thudientu+`"/>
								</form>
							</div>
						</div>
						<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
							<div class="single-register">
								<form>
									<label>Số điện thoại <span class="note" id="note_phone">*</span></label>
									<input type="text" id="phone" value = "`+ data.sdt +`"/>
								</form>
							</div>
						</div>
					</div>
					<div class="single-register">
						<form >
							<label>Địa chỉ <span class="note" id="note_diachi">*</span></label>
							<input type="text" id="address" value = "`+ data.diachi +`"/>
						</form>
					</div>
					<div class="single-register">
						<form >
							<label>Giới tính <span class="note" id="note_sex">*</span>`;
							if(data.gioitinh == "Nam"){
								s += `<input type="radio" value="Nam" name="sex" id="nam" checked/><span>Nam</span>
								<input type="radio" value="Nữ" name="sex" id="nu"/><span>Nữ</span>`;
							}
							else{
								s += `<input type="radio" value="Nam" name="sex" id="nam"/><span>Nam</span>
								<input type="radio" value="Nữ" name="sex" id="nu" checked/><span>Nữ</span>`;
							}
								
							s+=`</label>
							
						</form>
					</div>
					<div class="single-register">
						<label>Ngày sinh <span class="note" id="note_date">*</span></label>
						<select class="chosen-select" tabindex="1" style="width:30%;" data-placeholder="Default Sorting" id="ngay">
							<option value="0">Ngày</option>`;
							var date_born = data.ngaysinh.split("-");
							for(let i = 1; i < 32; ++i){
								if(i < 10){
									if(parseInt(date_born[2]) == i){
										s += '<option value="0'+ i +'" selected>'+ i +'</option>';
									}
									else{
										s += '<option value="0'+ i +'">'+ i +'</option>';
									}
								}
								else{
									if(parseInt(date_born[2]) == i){
										s += '<option value="'+ i +'" selected>'+ i +'</option>';
									}
									else{
										s += '<option value="'+ i +'">'+ i +'</option>';
									}
									
								}
							}
							
						s+=`</select>
						<select class="chosen-select" tabindex="1" style="width:30%;" data-placeholder="Default Sorting" id="thang">
							<option value="0" selected>Tháng</option>`;
							for(let i = 1; i < 13; ++i){
								if(i < 10){
									if(parseInt(date_born[1]) == i){
										s += '<option value="0'+ i +'" selected>'+ i +'</option>';
									}
									else{
										s += '<option value="0'+ i +'">'+ i +'</option>';
									}
								}
								else{
									if(parseInt(date_born[1]) == i){
										s += '<option value="'+ i +'" selected>'+ i +'</option>';
									}
									else{
										s += '<option value="'+ i +'">'+ i +'</option>';
									}
								}
							}
						s+=`</select>
						<select class="chosen-select" tabindex="1" style="width:30%;" data-placeholder="Default Sorting" id="year">
							<option value="0">Năm</option>`
							var nam_sinh = parseInt(date_born[0]);
							for(let i = nam_sinh-120; i <= nam_sinh + 120; ++i){
								if(i == nam_sinh){
									s += '<option value="'+ i +'" selected>'+ i +'</option>';
								}
								else{
									s += '<option value="'+ i +'">'+ i +'</option>';
								}
							}
						s+=`</select>
					</div>
					<div class="single-user">
						<a onclick="sua_thong_tin_ca_nhan(`+ data.mand +`)">SỬA</a>
					</div>
				</div>
			</div>`;
	return s;
}

function load_sua_mat_khau(data){
	var s = `<div class="single-shop mb-30">
				<div class="row">
					<div class="single-register">
						<form>
							<label>Mật khẩu cũ <span class="note" id="note_pass">*</span></label>
							<input type="Password" id="pass" placeholder = "Mật khẩu cũ"/>
						</form>
					</div>
					<div class="single-register">
						<form>
							<label>Mật khẩu mới <span class="note" id="note_newpass">*</span></label>
							<input type="Password" id="newpass" placeholder = "Mật khẩu mới"/>
						</form>
					</div>
					<div class="single-register">
						<form>
							<label>Nhập lại mật khẩu mới <span class="note" id="note_repass">*</span></label>
							<input type="Password" id="repass" placeholder = "Nhập lại mật khẩu mới"/>
						</form>
					</div>
					<div class="single-user">
						<a onclick="sua_mat_khau(`+ data.mand +`)">SỬA</a>
					</div>
				</div>
			</div>`;
	return s;
}

function sua_thong_tin_ca_nhan(mand){
	$("#note_name").html("*");
	$("#note_mail").html("*");
	$("#note_phone").html("*");
	$("#note_diachi").html("*");
	$("#note_date").html("*");
	var ngdung = layThongTinSuaThongTinCaNhan(mand);
	var t = true;
	var format = "";
	if(ngdung.hoten == ""){
		t = false;
		$("#note_name").html("Họ và tên không được rỗng!");
	}

	if(ngdung.thudientu == ""){
		t = false;
		$("#note_mail").html("Thư điện tử không được rỗng!");
	}
	else if(ngdung.thudientu < 5){
		t = false;
		$("#note_mail").html("Thư điện tử phải lớn hơn hoặc bằng 5 kí tự!");
	}
	else{
		format = /[A-Z0-9._%+-]{6,30}@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
        if(!format.test(ngdung.thudientu)){
            $("#note_mail").html("Thư điện tử không hợp lệ!");
            return false;
        }
	}

	if(ngdung.sdt == ""){
		t = false;
		$("#note_phone").html("Số điện thoại không được rỗng!");
	}
	else{
		format = /\D/g;
		if(format.test(ngdung.sdt)){
	        $("#note_phone").html("Số điện thoại phải là chữ số!");
	        t = false;
	    }
	    else if(ngdung.sdt.length < 10 || ngdung.sdt.length > 11){
	        $("#note_phone").html("Số điện thoại không phù hợp!");
	        t = false;
	    }
	}

	if(ngdung.diachi == ""){
		t = false;
		$("#note_diachi").html("Họ và tên không được rỗng!");
	}

	if(ngdung.ngaysinh == "0-0-0"){
		t = false;
		$("#note_date").html("Ngày sinh chưa được chọn!");
	}
	else{
		var d = new Date(ngdung.ngaysinh);
		var ngaysinh = ngdung.ngaysinh.split("-");
        if(parseInt(ngaysinh[0]) != d.getFullYear() || parseInt(ngaysinh[1]) != d.getMonth()+1 || parseInt(ngaysinh[2]) != d.getDate()){
            t = false;
            $("#note_date").html("Ngày sinh chọn không đúng. Hãy kiểm tra lại!");
        }
	}

	if(!t) return;

	$.ajax({
		url : "php/xulytaikhoan.php",
		type : "post",
		dataType : "text",
		data : {
			request : "sua_taikhoan_user",
			data_update : ngdung
		},
		success : function(data){
			if(data == "ok"){
				Swal.fire({
					type : "success",
					title : "Sửa thành công!"
				});
				load_tieu_de("Sửa thông tin cá nhân");
			}
			else{
				Swal.fire({
					type : "error",
					title : "Sửa thất bại!"
				});	
			}	
		},
		error : function(e){
			Swal.fire({
				type : "error",
				title : "Lỗi sửa thông tin cá nhân!",
				html : e.responseText
			});	
		}
	});
}

function layThongTinSuaThongTinCaNhan(mand){
    var namsinh = $("#year").val();
    var thangsinh = $("#thang").val();
    var ngaysinh = $("#ngay").val();
    ngaysinh = namsinh + "-" + thangsinh + "-" + ngaysinh;
    var sex = "";
    if($("#nam").attr("checked") == "checked"){
    	sex = $("#nam").val();
    }
    else{
    	sex = $("#nu").val();
    }

    return {
        "mand": mand,
        "hoten": $("#name").val().trim(),
        "sdt": $("#phone").val().trim(),
        "thudientu": $("#mail").val().trim(),
        "diachi": $("#address").val().trim(),
        "gioitinh": sex,
        "ngaysinh": ngaysinh
    };
}

function sua_mat_khau(mand){
	$("#note_pass").html("*");
	$("#note_newpass").html("*");
	$("#note_repass").html("*");
	var t = true;
	var format = "";
	var matkhau = layThongTinSuaMatKhau(mand);
	if(matkhau.pass == ""){
		t = false;
		$("#note_pass").html("Mật khẩu không được rỗng");
	}
	else if(matkhau.pass.length < 5){
        $("#note_pass").html("Mật khẩu phải bằng hoặc hơn 5 kí tự!");
        t = false;
    }
    else{
        format = /\W/ig;
        if(format.test(matkhau.pass)){
            $("#note_pass").html("Mật khẩu bao gồm các kí tự chữ, số và dấu gạch dưới!");
            t = false;
        }
    }

    if(matkhau.newpass == ""){
		t = false;
		$("#note_newpass").html("Mật khẩu mới không được rỗng");
	}
	else if(matkhau.newpass.length < 5){
        $("#note_newpass").html("Mật khẩu mới phải bằng hoặc hơn 5 kí tự!");
        t = false;
    }
    else{
        format = /\W/ig;
        if(format.test(matkhau.newpass)){
            $("#note_newpass").html("Mật khẩu mới bao gồm các kí tự chữ, số và dấu gạch dưới!");
            t = false;
        }
    }

	if(matkhau.repass == ""){
		$("#note_repass").html("Nhập lại mật khẩu mới không được rỗng!");
        t = false;
	}  
	else if(matkhau.newpass != matkhau.repass){
		$("#note_repass").html("Nhập lại mật khẩu mới không khớp!");
        t = false;
	} 

	if(!t){
		return;
	} 

	$.ajax({
		url : "php/xulytaikhoan.php",
		type : "post",
		dataType : "text",
		data : {
			request : "sua_mat_khau_user",
			data_update : matkhau
		},
		success : function(data){
			if(data == "ok"){
				Swal.fire({
					type : "success",
					title : "Sửa mật khẩu thành công"
				});
				load_sua_mat_khau("Sửa mật khẩu");
			}
			else if(data == "no_pass_khac"){
				Swal.fire({
					type : "error",
					title : "Nhập mật khẩu không đúng. Hãy thử lại!"
				});	
			}
			else{
				Swal.fire({
					type : "error",
					title : "Sửa mật khẩu không thành công!"
				});	
			}
		},
		error : function(e){
			Swal.fire({
				type : "error",
				title : "Lỗi sửa mật khẩu",
				html : e.responseText
			});
		}
	});	
}

function layThongTinSuaMatKhau(mand){
	return {
		"mand" : mand,
		"pass" : $("#pass").val().trim(),
		"newpass" : $("#newpass").val().trim(),
		"repass" : $("#repass").val().trim()
	};
}

function load_don_hang(mand, page){
	$.ajax({
		url : "php/xulydonhang.php",
		type : "post",
		dataType : "json",
		data:{
			request : "get_don_hang_user",
			mand : mand,
			page : page
		},
		success : function(data){
			if(data != null){
				console.log(data);
				var s = `<div class="row">
							<table class = "class_table_user">
								<tr class = "class_table_user_tr_title">
									<td >Mã hóa đơn</td>
									<td >Ngày đặt hàng</td>
									<td >Ngày nhận hàng</td>
									<td >Phương thức thanh toán</td>
									<td >Địa chỉ nhận hàng</td>
									<td >Tổng tiền</td>
									<td >Trạng thái</td>
								</tr>
							</table>
						</div>`;
				for(let i = 0; i < data.length-1; ++i){
					s+= return_1_khung_don_hang(data[i], i);
				}
				$("#list").html(s);
				var tong_page = data[data.length-1];

				if(tong_page == 1){
					$("#phan_trang").html("");
				}
				else{
					if(page == 1){
						s = `<li><a onclick = "load_don_hang('`+ mand +`', `+ (page+1) +`)" style="background: #333 none repeat scroll 0 0;
						    border: 2px solid #fff;
						    border-radius: 100%;
						    bottom: 35px;
						    color: #fff;
						    font-size: 20px;
						    height: 40px;
						    line-height: 32px;
						    right: 12px;
						    text-align: center;
						    width: 40px;
						    transition: .3s;
						    position: relative;"><i class="fa fa-angle-right"></i></a></li>`;
						$("#phan_trang").html(s);
					}
					else if(page == tong_page){
						s = `<li><a onclick = "load_don_hang('`+ mand +`', `+ (page-1) +`)" style="background: #333 none repeat scroll 0 0;
						    border: 2px solid #fff;
						    border-radius: 100%;
						    bottom: 35px;
						    color: #fff;
						    font-size: 20px;
						    height: 40px;
						    line-height: 32px;
						    right: 12px;
						    text-align: center;
						    width: 40px;
						    transition: .3s;
						    position: relative;"><i class="fa fa-angle-left"></i></a></li>`;
						$("#phan_trang").html(s);
					}
					else{
						s = `<li><a onclick = "load_don_hang('`+ mand +`', `+ (page-1) +`)" style="background: #333 none repeat scroll 0 0;
						    border: 2px solid #fff;
						    border-radius: 100%;
						    bottom: 35px;
						    color: #fff;
						    font-size: 20px;
						    height: 40px;
						    line-height: 32px;
						    right: 12px;
						    text-align: center;
						    width: 40px;
						    transition: .3s;
						    position: relative;"><i class="fa fa-angle-left"></i></a></li>
							<li><a onclick = "load_don_hang('`+ mand +`', `+ (page+1) +`)" style="background: #333 none repeat scroll 0 0;
						    border: 2px solid #fff;
						    border-radius: 100%;
						    bottom: 35px;
						    color: #fff;
						    font-size: 20px;
						    height: 40px;
						    line-height: 32px;
						    right: 12px;
						    text-align: center;
						    width: 40px;
						    transition: .3s;
						    position: relative;"><i class="fa fa-angle-right"></i></a></li>`;
						$("#phan_trang").html(s);
					}
				}
				
			}
		},
		error : function(e){
			Swal.fire({
				type : "error",
				title : "Lỗi load đơn hàng",
				html : e.responseText
			});
		}
	});
}


function return_1_khung_don_hang(donhang, i){
	var s = "";
	if(donhang.ngaynhanhang == "0000-00-00 00:00:00"){
		donhang.ngaynhanhang = "Chưa nhận hàng";
	}
	if(i % 2 == 0){
		s+= `<div class="row">
				<table class = "class_table_user" onclick = "chuyen_sang_ctdh('`+ donhang.mahd +`')">
					<tr class = "class_table_user_tr">
						<td >`+ donhang.mahd +`</td>
						<td >`+ donhang.ngaydathang +`</td>
						<td >`+ donhang.ngaynhanhang +`</td>
						<td >`+ donhang.phuongthuctt +`</td>
						<td >`+ donhang.diachi +`</td>
						<td >`+ ham_xu_ly_tien_te(donhang.tongtien) +`đ</td>
						<td >`+ donhang.trangthai +`</td>
					</tr>
				</table>
			</div>`;
	}
	else{
		s+= `<div class="row">
				<table class = "class_table_user" onclick = "chuyen_sang_ctdh('`+ donhang.mahd +`')">
					<tr class = "class_table_user_tr1">
						<td >`+ donhang.mahd +`</td>
						<td >`+ donhang.ngaydathang +`</td>
						<td >`+ donhang.ngaynhanhang +`</td>
						<td >`+ donhang.phuongthuctt +`</td>
						<td >`+ donhang.diachi +`</td>
						<td >`+ ham_xu_ly_tien_te(donhang.tongtien) +`đ</td>
						<td >`+ donhang.trangthai +`</td>
					</tr>
				</table>
			</div>`;
	}
	return s;
}

function chuyen_sang_ctdh(mahd){
	var x = location.href;
	x = x.replace('user.php', 'cart.php');
	x = x.split("?");
	x = x[0];
	x = x + "?madh=" + mahd;
	window.open(x,'_blank');
}

function ham_xu_ly_tien_te(s){
	s = parseFloat(s);
	s= s.toFixed();
	// alert(s);
	var ss = "";
	var j = 0;
	for(let i = s.length -1; i >= 0; --i){
		++j;
		ss = s[i] + ss;
		if(j == 3 && i >= 1){
			j = 0;
			ss = "." + ss;
		}
	}
	return ss;
}