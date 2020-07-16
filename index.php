<?php   
	ob_start();
?>
<!doctype html>
<html class="no-js" lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Koparion</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- Favicon -->
		<link rel="shortcut icon" type="image/x-icon" href="favicon.png">
		
		<!-- all css here -->
		<!-- bootstrap v3.3.6 css -->
        <link rel="stylesheet" href="css/bootstrap.min.css">
		<!-- animate css -->
        <link rel="stylesheet" href="css/animate.css">
		<!-- meanmenu css -->
        <link rel="stylesheet" href="css/meanmenu.min.css">
		<!-- owl.carousel css -->
        <link rel="stylesheet" href="css/owl.carousel.css">
		<!-- font-awesome css -->
        <link rel="stylesheet" href="css/font-awesome.min.css">
		<!-- flexslider.css-->
        <link rel="stylesheet" href="css/flexslider.css">
		<!-- chosen.min.css-->
        <link rel="stylesheet" href="css/chosen.min.css">
		<!-- style css -->
		<link rel="stylesheet" href="style.css">
		<!-- responsive css -->
        <link rel="stylesheet" href="css/responsive.css">
		<!-- modernizr css -->
        <script src="js/vendor/modernizr-2.8.3.min.js"></script>
    </head>
    <body>
		<!-- header-area-start -->
        <header>
			<!-- header-top-area-start -->
			<div class="header-top-area">
				<div class="container">
					<div class="row">
						<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
							
						</div>
						<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
							<div class="account-area text-right">
								<ul>
									<li id="dki"><a href="register.php">Đăng kí</a></li>
									<li id="dn"><a href="login.php">Đăng nhập</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- header-top-area-end -->
			<!-- header-mid-area-start -->
			<div class="header-mid-area ptb-40">
				<div class="container">
					<div class="row">
						<div class="col-lg-3 col-md-3 col-sm-5 col-xs-12">
							<div class="header-search">
								<form action="#">
									<input type="text" placeholder="Tìm kiếm tựa sách, tác giả" id="input_search" />
									<a onclick="search_chung()"><i class="fa fa-search"></i></a>
								</form>
							</div>
						</div>
						<div class="col-lg-6 col-md-6 col-sm-4 col-xs-12">
							<div class="logo-area text-center logo-xs-mrg">
								<a href="index.php"><img src="img/logo/logo.png" alt="logo" /></a>
							</div>
						</div>
						<div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
							<div class="my-cart">
								<ul>
									<li><a href="cart.php"><i class="fa fa-shopping-cart"></i>Giỏ hàng</a>
										<span id="so_luong_mua">0</span>
										<div class="mini-cart-sub scrollpane">
											<div class="cart-product" id="sua_gio_hang">
												
											</div>
											<div class="cart-totals">
												<h5>Tổng tiền <span id="iconcart_tongtien"></span></h5>
											</div>
											<div class="cart-bottom">
												<a class="view-cart" href="cart.php">Xem chi tiết</a>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- header-mid-area-end -->
			<!-- main-menu-area-start -->
			<div class="main-menu-area hidden-sm hidden-xs sticky-header-1" id="header-sticky">
				<div class="container">
					<div class="row row-1">
						<div class="col-lg-12">
							<div class="menu-area">
								<nav>
									<ul>
										<li class="active"><a href="index.php">Trang chủ</a>
										</li>
										<li><a href="shop.php">Loại sách<i class="fa fa-angle-down"></i></a>
											<div class="mega-menu mega-menu-3">
												<span id="pc_load_loai_sach">
													<a href="shop.html">Loại sách 1</a>
													<a href="shop.html">Polo Short Sleeve</a>
													<a href="shop.html">Graphic T-Shirts</a>
													<a href="shop.html">Jackets & Coats</a>
													<a href="shop.html">Fashion Jackets</a>
													<a href="shop.html">Loại sách 1</a>
													<a href="shop.html">Loại sách 1</a>
													<a href="shop.html">Loại sách 1</a>
													<a href="shop.html">Loại sách 1</a>
													<a href="shop.html">Loại sách 1</a>
												</span>
												
											</div>
										</li>
										<li><a href="shop.php">TÁC GIẢ<i class="fa fa-angle-down"></i></a>
											<div class="mega-menu mega-menu-3">
												<span id="pc_load_tac_gia">
													<a href="shop.html">Tops & Tees</a>
													<a href="shop.html">Sweaters </a>
													<a href="shop.html">Hoodies</a>
													<a href="shop.html">Jackets & Coats</a>
													<a href="shop.html">Jackets & Coats</a>
													<a href="shop.html">Jackets & Coats</a>
													<a href="shop.html">Jackets & Coats</a>
													<a href="shop.html">Jackets & Coats</a>
													<a href="shop.html">Jackets & Coats</a>
												</span>
											</div>
										</li>
										<li><a href="shop.php">Nhà xuất bản<i class="fa fa-angle-down"></i></a>
											<div class="mega-menu mega-menu-3">
												<span id="pc_load_nxb">
													<a href="shop.html">Shirts</a>
													<a href="shop.html">Florals</a>
													<a href="shop.html">Crochet</a>
													<a href="shop.html">Stripes</a>
													<a href="shop.html">Stripes</a>
													<a href="shop.html">Stripes</a>
													<a href="shop.html">Stripes</a>
													<a href="shop.html">Stripes</a>

												</span>
											</div>
										</li>
										<li><a>trang<i class="fa fa-angle-down"></i></a>
											<div class="sub-menu sub-menu-2">
												<ul id="trang_sua">
													<li><a href="shop.php">sách</a></li>
													<li><a href="login.php">Đăng nhập</a></li>
													<li><a href="register.php">Đăng kí</a></li>
													<li><a href="cart.php">Giỏ hàng</a></li>
												</ul>
											</div>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- main-menu-area-end -->
			<!-- mobile-menu-area-start -->
			<div class="mobile-menu-area hidden-md hidden-lg">
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<div class="mobile-menu">
								<nav id="mobile-menu-active">
									<ul id="nav">
										<li><a href="index.php">Trang chủ</a>
											
										</li>
										<li><a href="product-details.html" >Loai sách</a>
											<ul id="mobile_load_loai_sach">
												<!-- <li><a href="shop.php">Sách Bán Chạy</a></li>
												<li><a href="shop.php">Sách Thiếu Nhi</a></li>
												<li><a href="shop.php">Sách Ngoại Văn</a></li>
												<li><a href="shop.php">Sách Kinh Tế</a></li>
												<li><a href="shop.php">Sách Văn Học Trong Nước</a></li>
												<li><a href="shop.php">Sách Văn Học Nước Ngoài</a></li>
												<li><a href="shop.php">Sách Thường Thức - Đời Sống</a></li>
												<li><a href="shop.php">Sách Thiếu Nhi</a></li>
												<li><a href="shop.php">Sách Tin Học - Ngoại Ngữ</a></li>
												<li><a href="shop.php">Sách Giáo Khoa</a></li> -->
											</ul>
										</li>
										<li><a href="">Tác giả</a>
											<ul id="mobile_load_tac_gia">
												<li><a href="shop.html">Crochet</a></li>
												<li><a href="shop.html">Sleeveless</a></li>
												<li><a href="shop.html">Stripes</a></li>
												<li><a href="shop.html">Sweaters</a></li>
												<li><a href="shop.html">hoodies</a></li>
											</ul>
										</li>
										<li><a href="product-details.php">Nhà xuất bản</a>
											<ul id="mobile_load_nxb">
												<li><a href="shop.php">sách</a></li>
												<li><a href="login.php">đăng nhập</a></li>
												<li><a href="register.php">đăng kí</a></li>
												<li><a href="cart.php">giỏ hàng</a></li>
											</ul>
										</li>
										<li><a href="product-details.html">Trang</a>
											<ul id="trang_sua_mobile">
												<li><a href="shop.php">sách</a></li>
												<li><a href="login.php">đăng nhập</a></li>
												<li><a href="register.php">đăng kí</a></li>
												<li><a href="cart.php">giỏ hàng</a></li>
											</ul>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- mobile-menu-area-end -->
		</header>
		<!-- header-area-end -->
		<!-- banner-area-start -->
		
		<!-- banner-area-end -->
		<!-- slider-area-start -->
		<div class="slider-area">
			<div class="slider-active owl-carousel">
				<div class="single-slider pt-125 pb-130 bg-img" style="background-image:url(img/slider/1.jpg);">
				    <div class="container">
                        <div class="row">
                            <div class="col-md-5">
                                <div class="slider-content slider-animated-1 text-center">
                                    <h1>Giảm giá khủng</h1>
                                    <h2>koparion</h2>
                                    <!-- <h3>Now starting at £99.00</h3> -->
                                    <a href="shop.php">Mua ngay</a>
                                </div>
                            </div>
                        </div>
				    </div>
				</div>
				<div class="single-slider slider-h1-2 pt-215 pb-100 bg-img" style="background-image:url(img/slider/2.jpg);">
				    <div class="container">
				        <div class="slider-content slider-content-2 slider-animated-1">
                            <h1>Nơi lưu trữ tri thức</h1>
                            <h2>Nhiều cuốn sách hay và đặc sắc</h2>
                            <h3>Giá rẻ cho mọi người</h3>
                        </div>
				    </div>
				</div>
			</div>
		</div>
		<!-- slider-area-end -->
		<!-- product-area-start -->
		<div id="sua">
			
			<div class="product-area pt-95 xs-mb">
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<div class="section-title text-center mb-50">
								<h2>Sản phẩm bán chạy</h2>
							</div>
						</div>
					</div>
					<!-- tab-area-start -->
					<div class="tab-content">
						<div class="tab-pane active" id="Audiobooks">
	                        <div class="tab-active owl-carousel" id="index_load_sp_ban_chay">
	                            
	                        </div>
						</div>
						
					</div>
					<div style="text-align: center; margin-bottom: 10px;"><a href="shop.php?type=1&page=1">Xem thêm</a></div>
					<!-- tab-area-end -->
				</div>
			</div>
			<!-- product-area-end -->
			

		</div>
		
		<!-- footer-area-start -->
		<footer style="margin-top: 50px;">
			<!-- footer-top-start -->
			<div class="footer-top">
				<div class="container">
					<a href="index.php"><img src="img/logo/logo.png" alt="logo" /></a>
				</div>
			</div>
			<!-- footer-top-start -->
			<!-- footer-mid-start -->
			<div class="footer-mid ptb-50">
				<div class="container">
					<div class="row">
				        <div class="col-lg-8 col-md-8 col-sm-12">
				            <div class="row">
				                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <div class="single-footer br-2 xs-mb">
                                        <div class="footer-title mb-20">
                                            <h3>Dịch vụ</h3>
                                        </div>
                                        <div class="footer-mid-menu">
                                            <ul>
                                                <li>Chính sách bảo mật </li>
                                                <li>Điều khoản sử dụng </li>
                                                <li>Giới thiệu Koparion </li>
                                                <li>Hệ thống trung tâm </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <div class="single-footer br-2 xs-mb">
                                        <div class="footer-title mb-20">
                                            <h3>Hổ trợ</h3>
                                        </div>
                                        <div class="footer-mid-menu">
                                            <ul>
                                                <li> Chính sách đổi - trả - hoàn tiền</li>
                                                <li> Chính sách khách sỉ </li>
                                                <li> Phương thức vận chuyển </li>
                                                <li> Phương thức thanh toán </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                             </div>
				        </div>
				        <div class="col-lg-4 col-md-4 col-sm-12">
                            <div class="single-footer mrg-sm">
                                <div class="footer-title mb-20">
                                    <h3>THÔNG TIN KOPARION</h3>
                                </div>
                                <div class="footer-contact">
                                    <p class="adress">
                                        <span>Địa chỉ</span>
                                        273 An Dương Vương phường 3 quận 5 TP Hồ Chí Minh
                                    </p>
                                    <p><span>SDT:</span> (+1)866-540-3229</p>
                                    <p><span>Email:</span>  koparionshop@gmail.com</p>
                                </div>
                            </div>
				        </div>
					</div>
				</div>
			</div>
			<!-- footer-mid-end -->
			<!-- footer-bottom-start -->
			<div class="footer-bottom">
				<div class="container">
					<div class="row bt-2">
						<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
							<div class="copy-right-area">
								<p>Giấy chứng nhận Đăng ký Kinh doanh số **0304132047** do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp ngày 28/11/2012.</p>
							</div>
						</div>
						<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
							<div class="payment-img text-right">
								<a href="#"><img src="img/1.png" alt="payment" /></a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- footer-bottom-end -->
		</footer>
		<!-- footer-area-end -->
		<!-- Modal -->
        <div class="modal fade" id="productModal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">x</span></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-5 col-sm-5 col-xs-12">
                                <div class="modal-tab">
                                    <div class="product-details-large tab-content">
                                        <div class="tab-pane active" id="image-1">
                                            <img src="img/product/quickview-l4.jpg" alt="" />
                                        </div>
                                        <div class="tab-pane" id="image-2">
                                            <img src="img/product/quickview-l2.jpg" alt="" />
                                        </div>
                                        <div class="tab-pane" id="image-3">
                                            <img src="img/product/quickview-l3.jpg" alt="" />
                                        </div>
                                        <div class="tab-pane" id="image-4">
                                            <img src="img/product/quickview-l5.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div class="product-details-small quickview-active owl-carousel">
                                        <a class="active" href="#image-1"><img src="img/product/quickview-s4.jpg" alt="" /></a>
                                        <a href="#image-2"><img src="img/product/quickview-s2.jpg" alt="" /></a>
                                        <a href="#image-3"><img src="img/product/quickview-s3.jpg" alt="" /></a>
                                        <a href="#image-4"><img src="img/product/quickview-s5.jpg" alt="" /></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-7 col-sm-7 col-xs-12">
                                <div class="modal-pro-content">
                                    <h3>Chaz Kangeroo Hoodie3</h3>
                                    <div class="price">
                                        <span>$70.00</span>
                                    </div>
                                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet.</p>	
                                    <div class="quick-view-select">
                                        <div class="select-option-part">
                                            <label>Size*</label>
                                            <select class="select">
                                                <option value="">S</option>
                                                <option value="">M</option>
                                                <option value="">L</option>
                                            </select>
                                        </div>
                                        <div class="quickview-color-wrap">
                                            <label>Color*</label>
                                            <div class="quickview-color">
                                                <ul>
                                                    <li class="blue">b</li>
                                                    <li class="red">r</li>
                                                    <li class="pink">p</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <form action="#">
                                        <input type="number" value="1" />
                                        <button>Add to cart</button>
                                    </form>
                                    <span><i class="fa fa-check"></i> In stock</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal end -->
		
		
		<!-- all js here -->
		<!-- jquery latest version -->
        <script src="js/vendor/jquery-1.12.0.min.js"></script>
      <!--   <script src="js/js/jquery-3.4.1.min.js"></script> -->
        <script src="js/js/sweetalert2@8.js"></script>
        <script src="js/js/chung.js"></script>
        <script src="js/js/index.js"></script>
		<!-- bootstrap js -->
        <script src="js/bootstrap.min.js"></script>
		<!-- owl.carousel js -->
        <script src="js/owl.carousel.min.js"></script>
		<!-- meanmenu js -->
        <script src="js/jquery.meanmenu.js"></script>
		<!-- wow js -->
        <script src="js/wow.min.js"></script>
		<!-- jquery.parallax-1.1.3.js -->
        <script src="js/jquery.parallax-1.1.3.js"></script>
		<!-- jquery.countdown.min.js -->
        <script src="js/jquery.countdown.min.js"></script>
		<!-- jquery.flexslider.js -->
        <script src="js/jquery.flexslider.js"></script>
		<!-- chosen.jquery.min.js -->
        <script src="js/chosen.jquery.min.js"></script>
		<!-- jquery.counterup.min.js -->
        <script src="js/jquery.counterup.min.js"></script>
		<!-- waypoints.min.js -->
        <script src="js/waypoints.min.js"></script>
		<!-- plugins js -->
        <script src="js/plugins.js"></script>
		<!-- main js -->
        <script src="js/main.js"></script>
    </body>
</html>

