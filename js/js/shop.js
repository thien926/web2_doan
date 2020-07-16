
load_author();
load_nxb();
load_danh_muc();
load_gia();
load_sort();
window.onload = function(){
	var url = getURL();
	// alert(url);
	if(url.length > 0){
		load_sp(url);
	}
	else{
		var url = lay_URL_truoc_dau_hoi();
		url += "?type=1&page=1";
		current_page = lay_value_type_url("page");
		if(current_page == "") current_page = 1;
		location.href = url;
		// url.push("type=1&page=1");

		// load_sp(url);
	}
	
}


function load_sp(url){
	$.ajax({
		url : "php/xulysanpham.php",
		type : "post",
		timeout : 3000,
		dataType : "json",
		data :{
			request : "phantich_URL",
			URL : url
		},
		success : function(data){
			if(data != null){
				s = "";
				var giamoi = 0;
				for(let i = 0; i < data.length-1; ++i){
					giamoi = parseFloat(data[i]['dongia'])-parseFloat(data[i]['dongia'])*parseFloat(data[i]['KM']['phantramkm'])/100;
					s += return_1_khung_sp(data[i]['img'], giamoi,data[i]['dongia'], parseFloat(data[i]['KM']['phantramkm']), data[i]['tensp']
						, data[i].tacgia, data[i].nxb, data[i].masp);
				}
				$("#show_sp").html(s);

				load_phantrang(data[data.length-1]);
				var search = lay_value_type_url("search");
				if(search != ""){
					var tieude = utf8_from_str(search);
					$("#tieu_de").html("Kết quả tìm kiếm: " + tieude);
				}
			}
			else{
				Swal.fire({
					type : "error", 
					title : "Lỗi load sản phẩm"
				});
			}

		},
		error : function(e){
			Swal.fire({
				type : "error",
				title : "Lỗi load sản phẩm",
				html : e.responseText
			});
		}
	});
}

function getURL(){
	var url = location.href;
	url = decodeURIComponent(url);
	dauHoi = url.split("?");
	if(dauHoi[1]){
		var dauVa = dauHoi[1].split("&");
		return dauVa;
	}
	return [];
}

function return_1_khung_sp(img, giamoi, giacu, phantramkm, tensp, tacgia, nxb, masp){
	s = "";
	s +=	'<div class="col-lg-3 col-md-4 col-sm-6 sanpham">'+
	            '<!-- single-product-start -->'+
                '<div class="product-wrapper mb-40">'+
                    '<div class="product-img">'+
                        '<img src="img/products/'+ img +'" class="primary" />'+
                        '<div class="product-flag">';
                        if(giamoi != giacu){
                        	s += '<ul>'+
	                                '<li><span class="discount-percentage">-'+ phantramkm +'%</span></li>'+
	                            '</ul>';
                        }
                            
    s +=                '</div>'+
                    '</div>'+
                    '<div class="product-details text-center">'+
                        '<h4><a href="product-details.php?masp='+ masp +'">'+ tensp +'</a></h4>'+
                        '<h5><a>'+ tacgia +'</a></h5>'+
                        '<h5><a>'+ nxb +'</a></h5>'+
                        '<div class="product-price">'+
                            '<ul>'+
                                '<li>'+ ham_xu_ly_tien_te(giamoi) +'đ</li>';
                                if(giamoi != giacu){
                                	s += '<li class="old-price">'+ ham_xu_ly_tien_te(giacu) +'đ</li>';
                                }
    s +=                    '</ul>'+
                        '</div>'+
                    '</div>'+
                    '<div class="product-link">'+
                        '<div class="product-button">'+
                            '<a class="cursor" title="Thêm vào giỏ" onclick="themvaogio('+ masp +')"><i class="fa fa-shopping-cart"></i>Thêm vào giỏ</a>'+
                        '</div>'+
                        '<div class="add-to-link ">'+
                            '<ul>'+
                                '<li><a href="product-details.php?masp='+ masp +'" title="Chi tiết sản phẩm"><i class="fa fa-external-link"></i></a></li>'+
                            '</ul>'+
                        '</div>'+
                    '</div>'+	
                '</div>'+
                '<!-- single-product-end -->'+
	        '</div>';
	return s;
}

function themvaogio(masp){
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
				// Swal.fire({
				// 	type : "success",
				// 	title : "Lấy được thông tin Tài khoản hiện tại"
				// });
			} 
			// else{

			// 	Swal.fire({
			// 		type : "error",
			// 		title : "Không lấy được thông tin Tài khoản hiện tại"
			// 	})
			// }
		},
		error: function(e){
			// Swal.fire({
			// 	type : "error",
			// 	title : "Không lấy được thông tin Tài khoản hiện tại",
			// 	html : e.responseText
			// })
		}
	});
	var slmua = 1;
	var mand = null;
	if(tk_current != null){
		mand = tk_current['mand'];
	}

	var t = true;
	$.ajax({
		url : "php/xulydonhang.php",
		type : "post",
		timeout : 3000,
		dataType : "text",
		data: {
			request : "load_sp_trong_gh",
			masp : masp,
			mand : mand
		},
		async: false,
		success : function(data){
			// alert(data);
			if(data == "ok"){
				Swal.fire({
					type : "error",
					title : "Sản phẩm đã có trong giỏ hàng"
				});
				t = false;
			}
		},
		error : function(e){
			Swal.fire({
				type :"error",
				title : "Lỗi load xem sản phẩm có trong giỏ hàng không",
				html : e.responseText
			});
		}
	});
	if(!t) return;
	// alert(t);

	$.ajax({
		url : "php/xulydonhang.php",
		type: "post",
		timeout : 3000,
		dataType : "text",
		data : {
			request : "them_sp_gh",
			masp : masp,
			slmua : slmua,
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
	
	if(dsdh == "") return;
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

function load_author(){
	$.ajax({
		url : "php/xulysanpham.php",
		type : "post",
		timeout : 3000,
		dataType : "json",
		data : {
			request : "load_author"
		},
		success : function(data){
			if(data != null){
				s = "";
				var tieude = lay_value_type_url("author");
				tieude = utf8_from_str(tieude);
				for(let i = 0; i < data.length; ++i){
					var tacgia = data[i].tacgia.split(",");
					for(let j = 0; j < tacgia.length; ++j){
						s += return_1_tp_tac_gia(tacgia[j].trim());
						if(tieude.trim() == tacgia[j].trim()){
							$("#tieu_de").html("Tác giả: " + tieude);
							$("#tieu_de").val("author="+tieude.trim());
						}
					}
				}
				$("#load_author").html(s);
			}
			else{
				Swal.fire({
					type : "error",
					title : "Lỗi load tác giả"
				});
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

function return_1_tp_tac_gia(tentacgia){
	return '<li><a href="shop.php?author='+ tentacgia.trim() +'&page=1">'+ tentacgia +'</a></li>';
}

// function onclick_tentacgia(tentacgia){
// 	$("#load_author").val("author=" + tentacgia);
// 	tim_kiem_chung();
// }

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
				s = "";
				var tieude = lay_value_type_url("nxb");
				tieude = utf8_from_str(tieude);
				for(let i = 0; i < data.length; ++i){
					s += return_1_tp_nxb(data[i].nxb);
					if(tieude.trim() == data[i].nxb.trim()){
						$("#tieu_de").html("Nhà xuất bản: " + tieude);
						$("#tieu_de").val("nxb="+tieude.trim());
					}
				}
				$("#load_nxb").html(s);
			}
			else{
				Swal.fire({
					type : "error",
					title : "Lỗi load nhà xuất bản"
				});
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

function return_1_tp_nxb(nxb){
	s = '<li><a href = "shop.php?nxb='+nxb+'&page=1">'+ nxb +'</a></li>';
	return s;
}

function load_danh_muc(){
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
				s = "";
				var tieude = lay_value_type_url("type");
				for(let i = 0; i < data.length; ++i){
					s += return_1_tp_danhmucsp(data[i].tenloai, data[i].maloai);
					if(tieude == data[i].maloai){
						$("#tieu_de").html("Loại sách: " + data[i].tenloai);
						$("#tieu_de").val("type="+data[i].maloai);
					}
				}
				$("#load_danh_muc_san_pham").html(s);
			}
			else{
				Swal.fire({
					type: "error",
					title: "Lỗi danh mục sản phẩm null"
				});
			}
		},
		error : function(e){
			Swal.fire({
				type: "error",
				title: "Lỗi load danh mục sản phẩm",
				html : e.responseText
			});
		}
	});
}

function return_1_tp_danhmucsp(tenloai, maloai){
	return '<li><a href="shop.php?type='+maloai+'&page=1">'+ tenloai +'</a></li>';
}

function load_gia(){
	var price = lay_value_type_url("price");
	if(price != ""){
		price = price.split("-");
		$("#price_from").val(price[0]);
		$("#price_to").val(price[1]);
	}
}

function load_sort(){
	var sort = lay_value_type_url("sort");
	if(sort != ""){
		$("#sorter").val("sort="+sort);	
	}
}

// function onclick_maloai(maloai){
// 	$("#load_danh_muc_san_pham").val("type="+maloai);
// 	tim_kiem_chung();
// }

 // Lấy giá trị của 1 trường trong url
function lay_value_type_url(type){
	var url = location.href;
	var dauHoi = url.split("?");
	var dauVa;
	if(dauHoi[1]){
		dauVa = dauHoi[1].split("&");
		for(let i = 0; i < dauVa.length; ++i){
			var dauBang = dauVa[i].split("=");
			if(type == dauBang[0]){
				return dauBang[1];
			}
		}
	}
	
	return "";
}

function lay_URL_truoc_dau_hoi(){
	var url = location.href;
	var dauHoi = url.split("?");
	if(dauHoi[0]){
		return dauHoi[0];
	}
	
	return "";
}

// Xữ lý chuỗi UTF-8
function utf8_from_str(s) {
	var a = decodeURIComponent(s);
	a = a.split("+");
	a = a.join(" ");
    return a;
}

function str_from_utf8(s){
	var a = s.split(" ");
	a = a.join("+");
	a = encodeURIComponent(a);
	return a;
}

// Xử lý giá
document.getElementById("btn_price").onclick = function(){
	event_search();
};

function event_search(){
	var t = true;
	var from = $("#price_from").val();
	var to = $("#price_to").val();
	var format = /\D/g;
	if(format.test(from) || format.test(to)){
		Swal.fire({
			type : "error",
			title : "Lỗi nhập giá"
		});
		return;
	}
	var url = [];
	url.push($("#tieu_de").val());
	if(from != "" && to != "" ){
		url.push("price="+from + "-" + to);
		$("#show_gia").html("Giá từ: " + ham_xu_ly_tien_te(from) + "đ - Đến: " + ham_xu_ly_tien_te(to) + "đ");
	}
	if($("#sorter").val() != "0"){
		url.push($("#sorter").val());
	}
	url.push("page=1");
	var s = location.href;
	s = s.split("?");
	url = url.join("&");
	// alert(s[0] + "?" + url);
	var search = lay_value_type_url("search");
	if(search != ""){
		location.href = s[0] + "?search=" + search + "&" + $("#sorter").val();
	}
	else location.href = s[0] + "?" + url;
}


// function tim_kiem_chung(){
// 	var type = $("#load_danh_muc_san_pham").val();
// 	var price = $("#price").val();
// 	var author = $("#load_author").val();
// 	var nxb = $("#load_nxb").val();
// 	// alert (type + " " + price + " " + author + " " + nxb);
// 	var url = location.href;
// 	url = url.split("?");
// 	url = url[0];
// 	url += "?";
// 	if(!(type == "" || type == null)){
// 		url += type + "&";
// 	}

// 	if(!(price == "" || price == null)){
// 		url += price + "?";
// 	}
	
// 	if(!(author == "" || author == null)){
// 		url += author + "?";
// 	}
	
// 	if(!(nxb == "" || nxb == null)){
// 		url += nxb + "?";
// 	}
// 	url = url.substring(0, url.lastIndexOf("&"));
// 	location.href = url;

// }

function load_phantrang(tong_page){
	if(tong_page == 1) return;
	var current_page = lay_value_type_url("page");
	if(current_page == "") current_page = 1;
	 
	var URL = lay_URL_truoc_dau_hoi();
	var s = "";
	var url = [];
	// lấy giá trị loại sản phẩm
	var type = lay_value_type_url("type");
	if(type != ""){
		url.push("type=" + type);
	}

	// Lấy giá trị tác giả
	type = lay_value_type_url("author");
	if(type != ""){
		url.push("author=" + type);
	}

	// Lấy giá trị nhà xuất bản
	type = lay_value_type_url("nxb");
	if(type != ""){
		url.push("nxb=" + type);
	}

	// Lấy giá trị giá
	type = lay_value_type_url("price");
	if(type != ""){
		url.push("price=" + type);
	}

	// Lấy giá trị sort
	type = lay_value_type_url("sort");
	if(type != ""){
		url.push("sort=" + type);
	}

	var search = lay_value_type_url("search");
	if(url.length <= 0 && search == "") return;
	url = url.join("&");

	
	if(search != ""){
		URL = URL + "?search=" + search;
		type = lay_value_type_url("sort");
		if(type != ""){
			URL += "&sort=" + type;
		}
	}
	else{
		URL = URL + "?" + url;
	}

	if(current_page > 1){
		s += '<li><a href="'+ URL +'&page=1" class="angle"><i class="fa fa-angle-left"></i><i class="fa fa-angle-left"></i></a></li>';
		s += '<li><a href="'+ URL +'&page='+ (current_page-1) +'" class="angle"><i class="fa fa-angle-left"></i></a></li>'
	}

	var page_start = current_page - 4;
	if(page_start <= 0) page_start = 1;
	var end_page = current_page + 4;
	if(end_page > tong_page) end_page = tong_page;
	var i;
	// var i = tong_page/2-4;
	// if(i < 1) i = 1;
	// var max_page = tong_page;
	// if(max_page - i > 8){
	// 	max_page = i+8;
	// }
	// alert(i);
	for(i = page_start; i <= end_page; ++i){
		if(i == 10) break;
		if(i == current_page){
			s += '<li><a href="'+ URL +'&page='+ i +'" class="active">'+ i +'</a></li>';
		}
		else{
			s += '<li><a href="'+ URL +'&page='+ i +'">'+ i +'</a></li>';
		}
	}





	if(current_page < end_page){
		s +='<li><a href="'+ URL +'&page='+ (current_page+1) +'" class="angle"><i class="fa fa-angle-right"></i></a></li>'+
			'<li><a href="'+ URL +'&page='+ end_page +'" class="angle"><i class="fa fa-angle-right"></i><i class="fa fa-angle-right"></i></a></li>'
	}

	$("#phan_trang").html(s);
}