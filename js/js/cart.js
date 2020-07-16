var tong_tien = 0;
var dsdh_gh = "";

window.onload = function(){
	var s = lay_value_type_url("madh");
	if(s == ""){
		load_dssp_gio_hang();
	}
	else{
		var format = /\d/g;
		if(format.test(s)){
			load_don_hang_from_user(s);
		}
	}
	
}

$("#dc_tt_khac").css("display", "none");

function load_don_hang_from_user(mahd){
	var tk_current = null;
	$.ajax({
		url : "php/xulytaikhoan.php",
		type : "post",
		timeout : 3000,
		dataType : "json",
		data : {
			request : "getCurrentUser"
		},
		async: false,
		success: function(data, status, xhr){
			if(data != null){
				tk_current = data;
			} 
		},
		error: function(e){
		}
	});

	if(tk_current == null){
		document.getElementById("tieu_de_cart").html("Không tìm thấy chi tiết hóa đơn.");
		return;
	}

	var mand = tk_current['mand'];

	$.ajax({
		url : "php/xulydonhang.php",
		type : "post",
		dataType : "text",
		data : {
			request : "check_user_hd",
			mahd : mahd,
			mand : mand
		},
		success : function(data){
			if(data == "no_ok"){
				document.getElementById("tieu_de_cart").html("Không tìm thấy chi tiết hóa đơn.");
				return;
			}
		},
		error : function(e){
			return;
		}
	});

	document.getElementById("truong_can_sua").style.display = "none";
	$.ajax({
		url : "php/xulydonhang.php",
		type : "post",
		dataType : "json",
		data :{
			request : "ctsp_from_cart",
			mahd : mahd
		},
		success : function(data){
			if(data != null){
				var slmua = 0;
				var s = "";
				var giamoi = 0;
				var total = 0;
				var tong_sp = 0;
				var tong_gia_bia = 0;
				for(let i = 0; i < data.length; ++i){
					giamoi = parseFloat(data[i]['sanpham']['dongia'])-parseFloat(data[i]['sanpham']['dongia'])*parseFloat(data[i]['sanpham']['KM']['phantramkm'])/100;
					slmua += parseInt(data[i]['soluong']);
					s += return_1_khung_sp_for_load_don_hang_from_user(data[i]['sanpham']['img'], data[i]['sanpham']['tensp'], data[i]['sanpham']['dongia'], data[i]['sanpham']['KM']['phantramkm'], data[i]['soluong'], giamoi, data[i]['sanpham']['masp']);
					total += parseFloat(giamoi)*parseFloat(data[i]['soluong']);
					tong_sp += parseInt(data[i]['soluong']);
					tong_gia_bia += parseFloat(data[i]['sanpham']['dongia'])*parseFloat(data[i]['soluong']);
					
				}
				$("#sua_cart").html(s);
				$("#khung_thanh_toan").html(return_1_khung_thanh_toan_user(tong_sp, tong_gia_bia, total));
				tong_tien = total;
				$("#pptt_sua").html("");
			}
		},
		error : function(e){
			Swal.fire({
				type : "error",
				title : "Lỗi load chi tiết đơn hàng",
				html : e.responseText
			});
		}
	});	
}

function return_1_khung_sp_for_load_don_hang_from_user(img, tensp, giacu, phantramkm, slmua, giamoi, masp){
	var s = '<tr>'+
				'<td class="product-thumbnail"><a ><img src="img/products/'+ img +'" alt="man" /></a></td>'+
				'<td class="product-name"><a >'+ tensp +'</a></td>'+
				'<td class="product-price"><span class="amount">'+ ham_xu_ly_tien_te(giacu) +'đ/1 sản phẩm</span></td>'+
				'<td class="product-price"><span class="amount">'+ phantramkm +'%</span></td>'+
				'<td class="product-price"><span class="amount">'+ ham_xu_ly_tien_te(giamoi) +'đ/1 sản phẩm</span></td>'+
				'<td class="product-quantity"><input type="text" value="'+ slmua +'" disabled/></td>'+
			'</tr>';
	return s;
}

function return_1_khung_thanh_toan_user(tong_sp, tong_gia_bia, total){
	var s = '<h2>Tổng thanh toán</h2>'+
            '<table>'+
                '<tbody>'+
                    '<tr class="shipping">'+
                        '<th>Tổng sản phẩm</th>'+
                        '<td>'+
                            '<strong>'+
                                '<span class="amount" id="total_sp">'+ tong_sp +'</span>'+
                            '</strong>'+
                        '</td>'+
                    '</tr>'+
                    '<tr class="shipping">'+
                        '<th>Tổng giá bìa</th>'+
                        '<td>'+
                            '<strong>'+
                                '<span class="amount" id="total_gia_bia">'+ ham_xu_ly_tien_te(tong_gia_bia) +'đ</span>'+
                            '</strong>'+
                        '</td>'+
                    '</tr>'+
                    '<tr class="order-total">'+
                        '<th>Tổng thành tiền</th>'+
                        '<td>'+
                            '<strong>'+
                                '<span class="amount" id="total_thanh_tien">'+ ham_xu_ly_tien_te(total) +'đ</span>'+
                            '</strong>'+
                        '</td>'+
                    '</tr>'+
                '</tbody>'+
            '</table>';
    return s;
}

function load_dssp_gio_hang(){
	dsdh_gh = "";
	var tk_current = null;
	var dsdh = null;
	$.ajax({
		url : "php/xulytaikhoan.php",
		type : "post",
		timeout : 3000,
		dataType : "json",
		data : {
			request : "getCurrentUser"
		},
		async: false,
		success: function(data, status, xhr){

			if(data != null){
				tk_current = data;
			} 
		},
		error: function(e){
			Swal.fire({
				type : "error",
				title : "Không lấy được thông tin Tài khoản hiện tại",
				html : e.responseText
			})
		}
	});

	var mand = null;
	if(tk_current != null){
		mand = tk_current['mand'];
	}
	var masp = null;

	$.ajax({
		url : "php/xulydonhang.php",
		type: "post",
		timeout : 3000,
		dataType : "text",
		data : {
			request : "them_sp_gh",
			masp : masp,
			slmua : 1,
			mand : mand
		},
		async: false,
		success : function(data){
			dsdh = data;

			if(masp != null){
				Swal.fire({
					type :"success",
					title : "Thêm sản phẩm vào giỏ thành công"
				});
			}
		},
		error : function(e){
			Swal.fire({
				type :"error",
				title : "Lỗi thêm sản phẩm vào giỏ",
				html : e.responseText
			});
		}
	});
	// alert(dsdh);
	if(dsdh == ""){
		$("#tieu_de_cart").html("Chưa có sản phẩm trong giỏ hàng")
		$("#sua_cart").html("");
		$("#total_sp").html("Không tính toán được");
		$("#total_gia_bia").html("Không tính toán được");
		$("#total_thanh_tien").html("Không tính toán được");
		return;
	}
	dsdh = dsdh.split("-");

	$.ajax({
		url : "php/xulysanpham.php",
		type : "post",
		timeout : 3000,
		dataType : "json",
		data: {
			request : "load_gio_hang",
			ds : dsdh
		},
		async: false,
		success : function(data){

			var slmua = 0;
			var s = "";
			var giamoi = 0;
			var total = 0;
			var tong_sp = 0;
			var tong_gia_bia = 0;
			for(let i = 0; i < data.length; ++i){
				giamoi = parseFloat(data[i]['dongia'])-parseFloat(data[i]['dongia'])*parseFloat(data[i]['KM']['phantramkm'])/100;
				slmua += parseInt(data[i]['slmua']);
				s += return_1_khung_sp_for_cart(data[i]['img'], data[i]['tensp'], data[i]['dongia'], data[i]['KM']['phantramkm'], data[i]['slmua'], giamoi, data[i]['soluong'], data[i]['masp']);
				total += parseFloat(giamoi)*parseFloat(data[i]['slmua']);
				tong_sp += parseInt(data[i]['slmua']);
				tong_gia_bia += parseFloat(data[i]['dongia'])*parseFloat(data[i]['slmua']);
				
			}
			$("#sua_cart").html(s);
			$("#khung_thanh_toan").html(return_1_khung_thanh_toan(tong_sp, tong_gia_bia, total));
			tong_tien = total;
		},
		error : function(e){
			Swal.fire({
				type : "error",
				title : "Lỗi load sản phảm trong giỏ hàng tại cart.php",
				html : e.responseText
			});
		}
	});
}

function return_1_khung_sp_for_cart(img, tensp, giacu, phantramkm, slmua, giamoi, max, masp){
	dsdh_gh += masp + "&" + slmua + "&" + giamoi + "-";
	var s = '<tr>'+
				'<td class="product-thumbnail"><a ><img src="img/products/'+ img +'" alt="man" /></a></td>'+
				'<td class="product-name"><a >'+ tensp +'</a></td>'+
				'<td class="product-price"><span class="amount">'+ ham_xu_ly_tien_te(giacu) +'đ/1 sản phẩm</span></td>'+
				'<td class="product-price"><span class="amount">'+ phantramkm +'%</span></td>'+
				'<td class="product-price"><span class="amount">'+ ham_xu_ly_tien_te(giamoi) +'đ/1 sản phẩm</span></td>'+
				'<td class="product-quantity"><button type="button" value="-" onclick="tang_giam_sl(this, '+ masp +')">-</button><input type="text" value="'+ slmua +'" onkeyup="kt_sl(this, '+ masp +')" id="'+masp+'" max="'+ max +'"/><button type="button" value="+" onclick="tang_giam_sl(this, '+masp+')">+</button></td>'+
				
				'<td class="product-remove"><a class="cursor" onclick="xoa_sp_donhang_for_cart('+ masp +', '+ slmua +')"><i class="fa fa-times"></i></a></td>'+
			'</tr>';
	return s;
}

function return_1_khung_thanh_toan(tong_sp, tong_gia_bia, total){
	var s = '<h2>Tổng thanh toán</h2>'+
            '<table>'+
                '<tbody>'+
                    '<tr class="shipping">'+
                        '<th>Tổng sản phẩm</th>'+
                        '<td>'+
                            '<strong>'+
                                '<span class="amount" id="total_sp">'+ tong_sp +'</span>'+
                            '</strong>'+
                        '</td>'+
                    '</tr>'+
                    '<tr class="shipping">'+
                        '<th>Tổng giá bìa</th>'+
                        '<td>'+
                            '<strong>'+
                                '<span class="amount" id="total_gia_bia">'+ ham_xu_ly_tien_te(tong_gia_bia) +'đ</span>'+
                            '</strong>'+
                        '</td>'+
                    '</tr>'+
                    '<tr class="order-total">'+
                        '<th>Tổng thành tiền</th>'+
                        '<td>'+
                            '<strong>'+
                                '<span class="amount" id="total_thanh_tien">'+ ham_xu_ly_tien_te(total) +'đ</span>'+
                            '</strong>'+
                        '</td>'+
                    '</tr>'+
                '</tbody>'+
            '</table>'+
            '<div class="wc-proceed-to-checkout">'+
                '<a class="cursor" onclick="dat_hang()">Đặt hàng</a>'+
            '</div>';
    return s;
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

function kt_sl(aa, masp){
	var format = /\D/g;
	if(format.test(aa.value)){
		aa.value = 1;
	}
	if(aa.value == "" || parseInt(aa.value) == 0){
		aa.value = 1;
	}
	if(parseInt(aa.value) > parseInt(aa.max)){
		aa.value = aa.max;
	}

	ajax_thay_doi_sl(masp, aa.value);
}

function tang_giam_sl(aa, masp){
	if(aa.value == "-"){
		var tru = parseInt($("#" + masp).val()) - 1;
		if(tru <= 0) tru = 1;
		$("#" + masp).val(tru);
		ajax_thay_doi_sl(masp, tru);
	}
	else{
		var max = parseInt($("#" + masp).attr('max'));
		var cong = parseInt($("#" + masp).val()) + 1;
		if(cong > max) cong = max;
		$("#" + masp).val(cong);
		ajax_thay_doi_sl(masp, cong);
	}
}

function onchange_dc(aa){
	if(aa.value == 'diachi'){
		$("#dc_tt_khac").css("display", "block");
		$("#dc_tt_khac").val("");
	}
	else{
		$("#dc_tt_khac").css("display", "none");
	}
}

function ajax_thay_doi_sl(masp, soluong){
	// alert(masp + " " + soluong);
	var tk_current = null;
	$.ajax({
		url : "php/xulytaikhoan.php",
		type : "post",
		timeout : 3000,
		dataType : "json",
		data : {
			request : "getCurrentUser",
		},
		async: false,
		success: function(data, status, xhr){
			if(data != null){
				tk_current = data;
			} 
		},
		error: function(e){
			Swal.fire({
				type : "error",
				title : "Không lấy được thông tin Tài khoản hiện tại",
				html : e.responseText
			})
		}
	});

	var mand = null;
	if(tk_current != null){
		mand = tk_current['mand'];
	}

	$.ajax({
		url : "php/xulydonhang.php",
		type: "post",
		timeout : 3000,
		dataType : "text",
		data : {
			request : "thay_doi_sluong_sp",
			mand : mand,
			masp : masp,
			soluong : soluong
		},
		async: false,
		success : function(data){
			// alert(data);
		},
		error : function(e){
			Swal.fire({
				type : "success",
				title : "Lỗi thay đổi số lượng sản phẩm",
				html : e.responseText
			});
		}
	});

	load_dssp_gio_hang();
	load_icon_cart();
}

function xoa_sp_donhang_for_cart(masp, soluong){
	var tk_current = null;
	$.ajax({
		url : "php/xulytaikhoan.php",
		type : "post",
		timeout : 3000,
		dataType : "json",
		data : {
			request : "getCurrentUser",
		},
		async: false,
		success: function(data, status, xhr){
			if(data != null){
				tk_current = data;
			} 
		},
		error: function(e){
			Swal.fire({
				type : "error",
				title : "Không lấy được thông tin Tài khoản hiện tại",
				html : e.responseText
			})
		}
	});

	var mand = null;
	if(tk_current != null){
		mand = tk_current['mand'];
	}

	text_sp = masp + "&" + soluong + "-";

	$.ajax({
		url : "php/xulydonhang.php",
		type: "post",
		timeout : 3000,
		dataType : "text",
		data : {
			request : "xoa_sp_donhang",
			mand : mand,
			text_sp : text_sp
		},
		async : false,
		success : function(data){
			// alert(data);
		},
		error : function(e){
			Swal.fire({
				type: "error",
				title : "Lỗi xóa sản phẩm",
				html : e.responseText
			});
		}
	});

	load_dssp_gio_hang();
	load_icon_cart();
}

function dat_hang(){
	var tk_current = null;
	var dsdh = null;

	// Kiểm tra có đăng nhập chưa
	$.ajax({
		url : "php/xulytaikhoan.php",
		type : "post",
		timeout : 3000,
		dataType : "json",
		data : {
			request : "getCurrentUser",
		},
		async: false,
		success: function(data, status, xhr){
			if(data != null){
				tk_current = data;
			} 
		},
		error: function(e){
			Swal.fire({
				type : "error",
				title : "Không lấy được thông tin Tài khoản hiện tại",
				html : e.responseText
			});
			return;
		}
	});

	if(tk_current == null){
		Swal.fire({
			type : "error",
			title : "Bạn chưa đăng nhập. Hãy đăng nhập trước khi đặt hàng!"
		});
		return;
	}

	// Kiểm tra có sản phẩm để đặt hàng chưa
	var masp = null;
	dsdh = dsdh_gh;
	if(dsdh == ""){
		Swal.fire({
			type : "error",
			title : "Chưa có sản phẩm nào cần đặt hàng"
		});
		return;
	}
	dsdh = dsdh.split("-");

	// Kiểm tra địa chỉ đã có chưa
	var diachi = "";
	if($("#thay_doi_dia_chi").val() == "diachi"){
		diachi = $("#dc_tt_khac").val();
	}
	else{
		diachi = tk_current['diachi'];
	}

	if(diachi == ""){
		Swal.fire({
			type : "error",
			title : "Bạn chưa chọn địa chỉ giao hàng!"
		});
		return;
	}

	// Kiềm tra xem danh sách sản phẩm có sản phẩm nào có số lượng mua vượt quá số lượng trong kho ko - Ko cần vì có gán giá trị max cho hàm input so luong r
	// $.ajax({
	// 	url : "php/xulysanpham.php",
	// 	type : "post",
	// 	timeout : 3000,
	// 	dataType : "text",
	// 	data : {
	// 		request : "kt_sl_trong_kho",
	// 		dsdh : dsdh
	// 	},
	// 	async : false,
	// 	success : function(data){
	// 		if(data != "ok"){
	// 			Swal.fire({
	// 				type  : "error",
	// 				title : data
	// 			});
	// 		}
	// 	},
	// 	error : function(e){
	// 		Swal.fire({
	// 			type  :"error",
	// 			title : "Lỗi kiểm tra số lượng trong kho",
	// 			html : e.responseText
	// 		});
	// 		return;
	// 	}
	// });


	// alert(diachi);
	var d = new Date();
	var ngaydathang = d.getFullYear() + "-";
	if(d.getMonth()+1 < 10){
		ngaydathang += "0" + (d.getMonth()+1) + "-";
	}
	else{
		ngaydathang += (d.getMonth()+1) + "-";
	}

	if(d.getDate() < 10){
		ngaydathang += "0" + d.getDate()+ " ";
	}
	else{
		ngaydathang += d.getDate() + " ";
	}

	if(d.getHours() < 10){
		ngaydathang += "0" + d.getHours() + ":";
	}
	else{
		ngaydathang += d.getHours() + ":";
	}

	if(d.getMinutes() < 10){
		ngaydathang += "0" + d.getMinutes() + ":";
	}
	else{
		ngaydathang += d.getMinutes() + ":";
	}

	if(d.getSeconds() < 10){
		ngaydathang += "0" + d.getMinutes();
	}
	else{
		ngaydathang += d.getSeconds();
	}
	// alert(ngaydathang);

	var phuongthuctt = $("#pptt").val();

	$.ajax({
		url : "php/xulydonhang.php",
		type : "post",
		timeout : 3000,
		dataType : "text",
		data : {
			request : "dat_hang",
			dsdh : dsdh,
			mand : tk_current['mand'],
			sdt : tk_current['sdt'],
			diachi : diachi,
			ngaydathang : ngaydathang,
			ngaynhanhang : "",
			phuongthuctt : phuongthuctt,
			tongtien : tong_tien,
			trangthai : "Đang xử lý"
		},
		success : function(data){
			if(data == "ok"){
				Swal.fire({
					type : "success",
					title : "Đặt hàng thành công!"
				}).then((result) => {
					load_icon_cart();
					load_dssp_gio_hang();
				});
				dsdh_gh = "";
			}
		},
		error : function(e){
			Swal.fire({
				type : "error",
				title : "Lỗi đặt hàng!",
				html : e.responseText
			});
			return;
		}
	});

	$.ajax({
		url : "php/xulysanpham.php",
		type : "post",
		timeout : 3000,
		dataType : "text",
		data : {
			request : "dat_hang",
			dsdh : dsdh
		},
		async: false,
		success : function(data){
			// alert(dsdh);
			if(data == "ok"){

			}
		},
		error : function(e){
			Swal.fire({
				type  :"error",
				title : "Lỗi khi sửa lại thông tin sản phẩm",
				html : e.responseText
			});
			return;
		}
	});
}

function lay_value_type_url(type){
	var url = location.href;
	var dauHoi = url.split("?");
	var dauVa;
	if(dauHoi[1]){
		dauVa = dauHoi[1].split("&");
		for(let i = 0; i < dauVa.length; ++i){
			var dauBang = dauVa[i].split("=");
			if(dauBang.length <= 1) return "";
 			if(type == dauBang[0]){
				return dauBang[1];
			}
		}
	}
	
	return "";
}