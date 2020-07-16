var soluong_sp = 1;
window.onload = function(){
	load_sp_chinh();
	load_sp_giam_gia();
	load_sp_khac();
	
}

function load_sp_chinh(){
	var masp = lay_value_type_url("masp");
	$.ajax({
		url : "php/xulysanpham.php",
		type : "post",
		timeout : 3000,
		dataType : "json",
		data : {
			request : "load_detail_sp_for_detail",
			masp : masp
		},
		success : function(data){
			if(data != null){
				$("#load_detail_sp").html(return_1_khung_ttsp(data));
				$("#soluong").attr("max", data.soluong);
			}
			else{
				Swal.fire({
					type: "error",
					title : "Lỗi load thông tin sản phẩm"
				});
			}
		},
		error : function(e){
			Swal.fire({
				type : "error",
				title : "Lỗi load thông tin sản phẩm",
				html : e.responseText
			});
		}
	});
}

function return_1_khung_ttsp(data){
	var giamoi = parseFloat(data.dongia)-parseFloat(data.dongia)*parseFloat(data.makm['phantramkm'])/100;
	var s = '<div class="col-lg-5 col-md-5 col-sm-6 col-xs-12">'+
				'<div class="flexslider">'+
					'<img src="img/products/'+ data.img +'" alt="woman" />'+
				'</div>'+
			'</div>'+
			'<div class="col-lg-7 col-md-7 col-sm-6 col-xs-12">'+
				'<div class="product-info-main">'+
					'<div class="page-title">'+
						'<h1>'+ data.tensp +'</h1>'+
						'<h4>'+ data.tacgia +'</h4>'+
						'<h6>'+ data.nxb +'</h6>'+
					'</div>'+
					'<div class="product-info-price">'+
						'<div class="price-final">'+
							'<span>'+ ham_xu_ly_tien_te(giamoi) +'đ   </span>';
							if(giamoi != data.dongia){
								s += '<span class="old-price">'+ data.dongia +'đ</span>';
							}
							
	s +=				'</div>'+
					'</div>'+
					'<div class="product-add-form">'+
						'<form action="#">'+
							'<div class="quality-button">'+
								'<input class="qty" type="button" value="-" onclick="tru_cong(this)">'+
								'<input class="qty" type="text" value="'+ soluong_sp +'" onkeyup="kt_soluong()" id="soluong">'+
								'<input class="qty" type="button" value="+" onclick="tru_cong(this)">'+
							'</div>'+
							'<a onclick = "themvaogio_detail('+ data.masp +')">Thêm vào giỏ</a>'+
						'</form>'+
					'</div>'+
					'<div class="product-social-links">'+
						'<div class="product-addto-links-text">'+
							'<p>'+ data.mota +'</p>'+
						'</div>'+
					'</div>'+
				'</div>'+
			'</div>';
	return s;
}

function load_sp_khac(){
	var masp = lay_value_type_url("masp");
	$.ajax({
		url : "php/xulysanpham.php",
		type : "post",
		timeout : 3000,
		dataType : "json",
		data : {
			request : "load_sp_khac",
			masp : masp
		},
		success : function(data){
			if(data != null){
				var i = 0;
				var giamoi = 0;
				var s = '<div class="product-total-2">';
				for(; i < data.length; ++i){
					giamoi = parseFloat(data[i]['dongia'])-parseFloat(data[i]['dongia'])*parseFloat(data[i]['KM']['phantramkm'])/100;
					s += return_1_khung_sp_khac(data[i]['img'], data[i]['masp'], data[i]['tensp'], data[i]['dongia'], giamoi);
				}
				s += '</div>';
				$("#load_sp_khac").html(s);
			}
			else{
				Swal.fire({
					type: "error",
					title : "Lỗi load thông tin sản phẩm"
				});
			}
		},
		error : function(e){
			Swal.fire({
				type : "error",
				title : "Lỗi load thông tin sản phẩm",
				html : e.responseText
			});
		}
	});
}

function return_1_khung_sp_khac(img, masp, tensp, giacu, giamoi){
	s = '<div class="single-most-product bd mb-18">'+
			'<div class="most-product-img">'+
				'<a href="product-details.php?masp='+ masp +'"><img src="img/products/'+ img +'" alt="book" /></a>'+
			'</div>'+
			'<div class="most-product-content">'+
				'<h4><a href="product-details.php?masp='+ masp +'">'+ tensp +'</a></h4>'+
				'<div class="product-price">'+
					'<ul>'+
						'<li>'+ ham_xu_ly_tien_te(giamoi) +'đ </li>'+
						'<li class="old-price">'+ ham_xu_ly_tien_te(giacu) +'đ</li>'+
					'</ul>'+
				'</div>'+
			'</div>'+
		'</div>';
	return s;
}

function load_sp_giam_gia(){
	var masp = lay_value_type_url("masp");
	$.ajax({
		url : "php/xulysanpham.php",
		type : "post",
		timeout : 3000,
		dataType : "json",
		data : {
			request : "load_sp_giamgia",
			masp : masp
		},
		success : function(data){
			if(data != null){
				var giamoi = 0;
				var j = 0;
				var s = "";
				for(let i = 0; i < data.length; ++i){
					if(parseInt(data[i]['KM']['phantramkm']) == 0) continue;
					++j;
					giamoi = parseFloat(data[i]['dongia'])-parseFloat(data[i]['dongia'])*parseFloat(data[i]['KM']['phantramkm'])/100;
					s += return_1_sp_giam_gia(data[i]['img'], data[i]['KM']['phantramkm'], data[i]['tensp'], data[i]['tacgia'], data[i]['nxb'], giamoi, data[i]['dongia'], data[i]['masp']);
					// alert(data[i]['tensp']);
					if(j == 4) break;
				}
				$("#load_sp_giam_gia").html(s);
			}
			else{
				Swal.fire({
					type: "error",
					title : "Lỗi load thông tin sản phẩm giảm giá"
				});
			}
		},
		error : function(e){
			Swal.fire({
				type : "error",
				title : "Lỗi load thông tin sản phẩm giảm giá",
				html : e.responseText
			});
		}
	});
}

function return_1_sp_giam_gia(img, phantramkm, tensp, tacgia, nxb, giamoi, giacu, masp, id){
	var s = '<div class="product-wrapper-cc">'+
				'<div class="product-img">'+
					'<a href="product-details.php?masp='+masp+'">'+
						'<img src="img/products/'+ img +'" alt="book" class="primary" />'+
					'</a>'+
					'<div class="quick-view">'+
                        '<a class="action-view" href="#" data-target="#productModal" data-toggle="modal" title="Quick View">'+
                            '<i class="fa fa-search-plus"></i>'+
                       '</a>'+
                    '</div>'+
                    '<div class="product-flag">'+
                        '<ul>'+
                            '<li><span class="discount-percentage">-'+ phantramkm +'%</span></li>'+
                        '</ul>'+
                    '</div>'+
				'</div>'+
				'<div class="product-details text-center">'+
					'<h4><a href="product-details.php?masp='+masp+'">'+ tensp +'</a></h4>'+
					'<h5><a>'+ tacgia +'</a></h5>'+
					'<h6><a>'+ nxb +'</a></h6>'+
					'<div class="product-price">'+
						'<ul>'+
							'<li>'+ ham_xu_ly_tien_te(giamoi) +'đ</li>'+
							'<li class="old-price">'+ ham_xu_ly_tien_te(giacu) +'</li>'+
						'</ul>'+
					'</div>'+
				'</div>'+
					
			'</div>';
	return s;
}

function kt_soluong(){
	var k = $("#soluong").val();
	format = /\D/g;
	if(format.test(k) || k == "" || k == "0"){
		$("#soluong").val("1");
	}
	else if(parseInt(k) > parseInt(document.getElementById("soluong").max)){
		$("#soluong").val(document.getElementById("soluong").max);
	}
	else{
		$("#soluong").val(parseInt(k));
	}
}

function tru_cong(aa){
	if(aa.value == "+"){
		$("#soluong").val(parseInt($("#soluong").val())+1);
	}
	else{
		if(parseInt($("#soluong").val()) > 1){
			$("#soluong").val(parseInt($("#soluong").val())-1);
		}
	}
	kt_soluong();
}

function themvaogio_detail(masp){
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
	var slmua = parseInt($("#soluong").val());
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


	if(!t){
		$.ajax({
			url : "php/xulydonhang.php",
			type: "post",
			timeout : 3000,
			dataType : "text",
			data : {
				request : "thay_doi_sluong_sp",
				masp : masp,
				soluong : slmua,
				mand : mand
			},
			async: false,
			success : function(data){
				dsdh = data;
				if(masp != null){
					Swal.fire({
						type :"success",
						title : "Thay đổi số lượng sản phẩm thành công"
					});
				}
			},
			error : function(e){
				Swal.fire({
					type :"error",
					title : "Lỗi thêm sản phẩm",
					html : e.responseText
				});
			}
		});
	}
	else{
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
	}
	
	soluong_sp = parseInt($("#soluong").val());

	load_sp_chinh();
	load_icon_cart();
}

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

function lay_URL_truoc_dau_hoi(){
	var url = location.href;
	var dauHoi = url.split("?");
	if(dauHoi[0]){
		return dauHoi[0];
	}
	
	return url;
}