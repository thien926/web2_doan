
load_san_pham();
 //load_sp_ban_chay();

function load_san_pham(){
	var lsp = null;
	var arr = [];
	var dssp = null;
	$.ajax({
		url : "php/xulyloaisanpham.php",
		type : "post",
		timeout : 3000,
		dataType: "json",
		data :{
			request : "getAllloaisanpham"
		},
		async:false,
		success : function(data){
			if(data != null){
				lsp = data;
				var s = "";
				for(let i = 0; i < data.length; ++i){
					dssp = load_sp_by_lsp(data[i].maloai);
					arr.push(dssp);
					if(dssp == "" || dssp == null){
						continue;
					}
					console.log(dssp);
					s += return_1_khung_lsp(data[i], i);
				}
				$("#sua").html(s);


			}
		},
		error : function(e){
			Swal.fire({
				type : "error",
				title : "Lỗi load loại sản phẩm index",
				html : e.responseText
			});
		}
	});
	for(let i = 0; i < lsp.length; ++i){
		s = "";
		if(arr[i].length > 0){
			for(let j = 0; j < arr[i].length; ++j){
				s += return_1_khung_sp_index(arr[i][j]);
			}
			$("#type_index" + i).html(s);
		}
	}
}


function load_sp_by_lsp(type){
	var s = null;
	$.ajax({
		url : "php/xulysanpham.php",
		type : "post",
		timeout : 3000,
		dataType: "json",
		data :{
			request : "load_sanpham_theo_lsp",
			type : type
		},
		async:false,
		success : function(data){
			if(data != null){
				s = data;
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
	return s;
}

function load_sp_ban_chay(){
	var s = null;
	$.ajax({
		url : "php/xulysanpham.php",
		type : "post",
		timeout : 3000,
		dataType: "json",
		data :{
			request : "load_sanpham_theo_lsp",
			type : "1"
		},
		success : function(data){
			if(data != null){
				var s = "";
				for(let i = 0; i < data.length; ++i){
					s += return_1_khung_sp_index(data[i]);
				}
				$("#index_load_sp_ban_chay").html(s);
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

function return_1_khung_lsp(lsp, i){
	var s = `<div class="product-area pt-95 xs-mb">
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<div class="section-title text-center mb-50">
								<h2>`+ lsp.tenloai +`</h2>
							</div>
						</div>
					</div>
					<!-- tab-area-start -->
					<div class="tab-content">
						<div class="tab-pane active" id="Audiobooks">
	                        <div class="" id = "type_index`+ i +`">
	                        </div>
						</div>
						
					</div>
					<div style="text-align: center; margin-top: 30px; width: 100%; float: left;"><a href="shop.php?type=`+ lsp.maloai +`&page=1">Xem thêm</a></div>
					<!-- tab-area-end -->
				</div>
			</div>`;
	return s;
}

function return_1_khung_sp_index(sanpham){
	var giamoi = parseFloat(sanpham['dongia'])-parseFloat(sanpham['dongia'])*parseFloat(sanpham['KM']['phantramkm'])/100;
 	var s = "";
	s +=	'<div class="col-lg-3 col-md-4 col-sm-6 sanpham">'+
	            '<!-- single-product-start -->'+
                '<div class="product-wrapper mb-40">'+
                    '<div class="product-img">'+
                        '<img src="img/products/'+ sanpham.img +'" class="primary" />'+
                        '<div class="product-flag">';
                        if(giamoi != sanpham.dongia){
                        	s += '<ul>'+
	                                '<li><span class="discount-percentage">-'+ sanpham['KM']['phantramkm'] +'%</span></li>'+
	                            '</ul>';
                        }
                            
    s +=                '</div>'+
                    '</div>'+
                    '<div class="product-details text-center">'+
                        '<h4><a href="product-details.php?masp='+ sanpham.masp +'">'+ sanpham.tensp +'</a></h4>'+
                        '<h5><a>'+ sanpham.tacgia +'</a></h5>'+
                        '<h5><a>'+ sanpham.nxb +'</a></h5>'+
                        '<div class="product-price">'+
                            '<ul>'+
                                '<li>'+ ham_xu_ly_tien_te(giamoi) +'đ</li>';
                                if(giamoi != sanpham.dongia){
                                	s += '<li class="old-price">'+ ham_xu_ly_tien_te(sanpham.dongia) +'đ</li>';
                                }
    s +=                    '</ul>'+
                        '</div>'+
                    '</div>'+
                    '<div class="product-link">'+
                        '<div class="product-button">'+
                            '<a class="cursor" title="Thêm vào giỏ" onclick="themvaogio('+ sanpham.masp +')"><i class="fa fa-shopping-cart"></i>Thêm vào giỏ</a>'+
                        '</div>'+
                        '<div class="add-to-link ">'+
                            '<ul>'+
                                '<li><a href="product-details.php?masp='+ sanpham.masp +'" title="Chi tiết sản phẩm"><i class="fa fa-external-link"></i></a></li>'+
                            '</ul>'+
                        '</div>'+
                    '</div>'+	
                '</div>'+
                '<!-- single-product-end -->'+
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