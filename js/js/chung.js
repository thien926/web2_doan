load_loai_sach();
load_tac_gia();
load_nxb();
getCurrentUser();
load_icon_cart();

function search_chung(){
	var s = $("#input_search").val();
	location.href = "shop.php?search=" + s;
}

function load_loai_sach(){
	$.ajax({
		url : "php/xulyloaisanpham.php",
		type : "post",
		timeout : 3000,
		dataType : "json",
		data:{
			request : "getAllloaisanpham"
		},
		success : function(data){
			if(data != null){
				var pc = "";
				var mobile = "";
				for(let i = 0; i < data.length; ++i){
					pc += '<a href="shop.php?type='+data[i].maloai+'&page=1">'+ data[i].tenloai +'</a>';
					mobile += '<li><a href="shop.php?type='+ data[i].maloai +'&page=1">'+ data[i].tenloai +'</a></li>';
				}
				$("#pc_load_loai_sach").html(pc);
				$("#mobile_load_loai_sach").html(mobile);
				// document.getElementById("")
			}
			else{
				Swal.fire({
					type: "error",
					title: "Lỗi loại sản phẩm null"
				});
			}
		},
		error : function(e){
			Swal.fire({
				type: "error",
				title: "Lỗi load loại sản phẩm",
				html : e.responseText
			});
		}
	});
}

function load_tac_gia(){
	$.ajax({
		url : "php/xulysanpham.php",
		type : "post",
		timeout : 3000,
		dataType : "json",
		data:{
			request : "load_author"
		},
		success : function(data){
			if(data != null){
				var pc = "";
				var mobile = "";
				var s = "";
				var k = 0;
				for(let i = 0; i < data.length; ++i){
					s = data[i].tacgia.split(",");
					for(let j = 0; j < s.length; ++j){
						if(pc.indexOf(s[j]) < 0){
							++k;
							pc += '<a href="shop.php?author='+ s[j].trim() +'&page=1">'+s[j].trim()+'</a>';
							mobile += '<li><a href="shop.php?author='+ s[j].trim() +'&page=1">'+s[j].trim()+'</a></li>';
						}
						if(k > 11) break;
					}
					if(k > 11) break;
				}
				if(data.length > 12){
					pc += '<a href="shop.php?type=1&page=1"><font color = "green">Xem thêm...</font></a>';
					mobile += '<li><a href="shop.php?type=1&page=1"><font color = "green">Xem thêm...</font></a></li>';
				}

				$("#pc_load_tac_gia").html(pc);
				$("#mobile_load_tac_gia").html(mobile);
			}
			else{
				Swal.fire({
					type : "error",
					title : "Lỗi tác giả null"
				})
			}
		},
		error : function(e){
			Swal.fire({
				type : "error", 
				title : "Lỗi load tác giả",
				html : e.responseText
			});
		}
	});
}

function load_nxb(){
	$.ajax({
		url : "php/xulysanpham.php",
		type : "post",
		timeout : 3000,
		dataType : "json",
		data : {
			request : "load_nxb"
		},
		success : function(data){
			if(data != null){
				var pc = "";
				var mobile = "";
				for(let i = 0; i < data.length; ++i){
					pc += '<a href="shop.php?nxb='+ data[i].nxb +'&page=1">'+ data[i].nxb +'</a>';
					mobile += '<a href="shop.php?nxb='+ data[i].nxb +'&page=1">'+ data[i].nxb +'</a></li>';
					if(i > 11) break;
				}
				if(data.length > 12){
					pc += '<a href="shop.php?type=1&page=1"><font color = "green">Xem thêm...</font></a>';
					mobile += '<li><a href="shop.php?type=1&page=1"><font color = "green">Xem thêm...</font></a></li>';
				}

				$("#pc_load_nxb").html(pc);
				$("#mobile_load_nxb").html(mobile);
			}
			else{
				Swal.fire({
					type : "error",
					title : "Lỗi nhà xuất bản null"
				})
			}
		},
		error : function(e){
			Swal.fire({
				type : "error", 
				title : "Lỗi load nhà xuất bản",
				html : e.responseText
			});
		}
	});
}

// Lấy tài khoản đang đăng nhập
function getCurrentUser(){
	$.ajax({
		url : "php/xulytaikhoan.php",
		type : "post",
		dataType : "json",
		timeout : 3000,
		data : {
			request : "getCurrentUser"
		},
		success: function(data, status, xhr){
			if(data != null){
				var name = data.hoten;
				var s = name.split(" ");
				var hoten = "";
				for(let  i = 0; i < s.length-1; ++i){
					hoten += s[i][0].toUpperCase() + ".";
				}
				hoten += s[s.length-1];
				$("#dki").html('<a href="user.php">'+ hoten +'</a>');
				$("#dn").html('<a onclick="dangxuat()">Đăng xuất</a>');
				s = `<li><a href="shop.php">sách</a></li>
						<li><a href="login.php">Đăng nhập</a></li>
						<li><a href="register.php">Đăng kí</a></li>
						<li><a href="cart.php">Giỏ hàng</a></li>
						<li><a href="user.php">Tài khoản</a></li>`;
				$("#trang_sua").html(s);
				$("#trang_sua_mobile").html(s);
			} 
			else{
				$("#dki").html('<a href="register.php">Đăng kí</a>');
				$("#dn").html('<a href="login.php">Đăng nhập</a>');
			}
		},
		error: function(e){
			$("#dki").html('<a href="register.php">Đăng kí</a>');
			$("#dn").html('<a href="login.php">Đăng nhập</a>');
		}
		// getCurrentUser();
	});

}

function dangxuat(){
	Swal.fire({
		type: "question",
		title : "Xác nhận",
		text : "Bạn có muốn đăng xuất?",
		showCancelButton : true,
		confirmButtonText : "Đồng ý",
		cancelButtonText : "Hủy"
	}).then((result) => {
		if(result.value){
			$.ajax({
				url : "php/xulytaikhoan.php",
				type : "post",
				dataType : "text",
				timeout : 3000,
				data :{
					request : "dangxuat"
				},
				success: function(data){
					if(data == "ok"){
						Swal.fire({
							type : "success",
							title : "Đăng xuất thành công"
						}).then((result) => {
							// $("#head_link_dndk").html('<span onclick="show_dn()">Đăng nhập</span>&nbsp;|&nbsp;<a href="index.php?dispatch=useradd">Đăng ký</a>');
							location.reload();
						});
					}
					else{
						Swal.fire({
							type : "error",
							title : "Chưa ai đăng nhập"
						})
					}
				},
				error: function(e){
					Swal.fire({
						type : "error",
						title : "Có lỗi khi đăng xuất"
					})
				}
			})
		}
	});
}

function load_icon_cart(){
	// alert("thiện");
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
			// alert(data + " " +mand);
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
		$("#so_luong_mua").html("0");
		$("#sua_gio_hang").html("");
		$("#iconcart_tongtien").html("");
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
			for(let i = 0; i < data.length; ++i){
				giamoi = parseFloat(data[i]['dongia'])-parseFloat(data[i]['dongia'])*parseFloat(data[i]['KM']['phantramkm'])/100;
				slmua += parseInt(data[i]['slmua']);
				s += return_icon_cart(data[i]['img'], data[i]['tensp'], data[i]['slmua'], giamoi, data[i]['masp']);
				total += parseFloat(giamoi)*parseFloat(data[i]['slmua']);
			}
			$("#so_luong_mua").html(slmua);
			$("#sua_gio_hang").html(s);
			$("#iconcart_tongtien").html(ham_xu_ly_tien_te(total) + "đ");
			// Swal.fire({
			// 	type : "success",
			// 	title : "Thêm giỏ hàng thành công"
			// });
		},
		error : function(e){
			Swal.fire({
				type : "error",
				title : "Lỗi load giỏ hàng",
				html : e.responseText
			});
		}
	});
}

function return_icon_cart(img, tensp, soluong, giamoi, masp){
	var s = '<div class="single-cart">'+
				'<div class="cart-img">'+
					'<a><img src="img/products/'+ img +'" alt="book" /></a>'+
				'</div>'+
				'<div class="cart-info">'+
					'<h5><a href = "product-details.php?masp='+ masp +'">'+ tensp +'</a></h5>'+
					'<p>'+ soluong +' x '+ ham_xu_ly_tien_te(giamoi) +'đ</p>'+
				'</div>'+
				'<div class="cart-icon">'+
				    '<a class="cursor" onclick="xoa_sp_donhang_for_chung('+masp+', '+soluong+')"><i class="fa fa-remove"></i></a>'+
				'</div>'+
			'</div>';
	return s;
}

function xoa_sp_donhang_for_chung(masp, soluong){
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

	load_icon_cart();
	var s = location.href;
	if(s.indexOf("cart.php") != -1){
		load_dssp_gio_hang();
	}
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