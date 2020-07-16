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
    <body class="product-details">
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <!-- Add your site or application content here -->
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
								<form action="">
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
										<li><a>Loại sách<i class="fa fa-angle-down"></i></a>
											<div class="mega-menu mega-menu-3">
												<span id="pc_load_loai_sach">
													<!-- Phần này tự load -->
													<!-- <a href="shop.php">Loại sách 1</a>
													<a href="shop.php">Polo Short Sleeve</a>
													<a href="shop.php">Graphic T-Shirts</a>
													<a href="shop.php">Jackets & Coats</a>
													<a href="shop.php">Fashion Jackets</a>
													<a href="shop.php">Loại sách 1</a>
													<a href="shop.php">Loại sách 1</a>
													<a href="shop.php">Loại sách 1</a>
													<a href="shop.php">Loại sách 1</a>
													<a href="shop.php">Loại sách 1</a> -->
												</span>
												
											</div>
										</li>
										<li><a>TÁC GIẢ<i class="fa fa-angle-down"></i></a>
											<div class="mega-menu mega-menu-3">
												<span id="pc_load_tac_gia">
													<!-- Phần này tự load -->
													<!-- <a href="shop.php">Tops & Tees</a>
													<a href="shop.php">Sweaters </a>
													<a href="shop.php">Hoodies</a>
													<a href="shop.php">Jackets & Coats</a>
													<a href="shop.php">Jackets & Coats</a>
													<a href="shop.php">Jackets & Coats</a>
													<a href="shop.php">Jackets & Coats</a>
													<a href="shop.php">Jackets & Coats</a>
													<a href="shop.php">Jackets & Coats</a> -->
												</span>
											</div>
										</li>
										<li><a>Nhà xuất bản<i class="fa fa-angle-down"></i></a>
											<div class="mega-menu mega-menu-3">
												<span id="pc_load_nxb">
													<!-- Phần này tự load -->
													<!-- <a href="shop.php">Shirts</a>
													<a href="shop.php">Florals</a>
													<a href="shop.php">Crochet</a>
													<a href="shop.php">Stripes</a>
													<a href="shop.php">Stripes</a>
													<a href="shop.php">Stripes</a>
													<a href="shop.php">Stripes</a>
													<a href="shop.php">Stripes</a>
 -->
												</span>
											</div>
										</li>
										<li><a>trang<i class="fa fa-angle-down"></i></a>
											<div class="sub-menu sub-menu-2">
												<ul>
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
										<li><a>Loai sách</a>
											<ul id="mobile_load_loai_sach">
												<!-- Phần này tự load -->
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
										<li><a>Tác giả</a>
											<ul id="mobile_load_tac_gia">
												<!-- Phần này tự load -->
												<!-- <li><a href="shop.html">Crochet</a></li>
												<li><a href="shop.html">Sleeveless</a></li>
												<li><a href="shop.html">Stripes</a></li>
												<li><a href="shop.html">Sweaters</a></li>
												<li><a href="shop.html">hoodies</a></li> -->
											</ul>
										</li>
										<li><a >Nhà xuất bản</a>
											<ul id="mobile_load_nxb">
												<!-- Phần này tự load -->
												<!-- <li><a href="shop.php">sách</a></li>
												<li><a href="login.php">đăng nhập</a></li>
												<li><a href="register.php">đăng kí</a></li>
												<li><a href="cart.php">giỏ hàng</a></li> -->
											</ul>
										</li>
										<li><a>Trang</a>
											<ul>
												<li><a href="shop.php>type=1&page=1">sách</a></li>
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
		<!-- breadcrumbs-area-start -->
		<div class="breadcrumbs-area mb-70">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="breadcrumbs-menu">
							<ul>
								<li><a href="index.php">Trang chủ</a></li>
								<li><a href="login.php" class="active">Đăng nhập</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- breadcrumbs-area-end -->
		<!-- product-main-area-start -->
		<div class="product-main-area mb-70">
			<div class="container">
				<div class="row">
					<div class="col-lg-9 col-md-9 col-sm-8 col-xs-12">
						<!-- product-main-area-start -->
						<div class="product-main-area">
							<div class="row" id="load_detail_sp">
								<div class="col-lg-5 col-md-5 col-sm-6 col-xs-12">
									<div class="flexslider">
										<ul class="slides">
											<li data-thumb="img/thum-2/1.jpg">
											  <img src="img/flex/1.jpg" alt="woman" />
											</li>
										</ul>
									</div>
								</div>
								<div class="col-lg-7 col-md-7 col-sm-6 col-xs-12">
									<div class="product-info-main">
										<div class="page-title">
											<h1>Savvy Shoulder Tote</h1>
											<h4>rgrgre</h4>
											<h6>fgr</h6>
										</div>
										
										<div class="product-info-price">
											<div class="price-final">
												<span>$34.00</span>
												<span class="old-price">$40.00</span>
											</div>
										</div>
										<div class="product-add-form">
											<form action="#">
												<div class="quality-button">
													<input class="qty" type="button" value="-">
													<input class="qty" type="number" value="1" onkeyup="kt_soluong()" id="soluong">
													<input class="qty" type="button" value="+">
												</div>
												<a>Thêm vào giỏ</a>
											</form>
										</div>
										<div class="product-social-links">
											<div class="product-addto-links-text">
												<p>dejhfrefj</p>
											</div>
										</div>
									</div>
								</div>
							</div>	
						</div>
						<!-- product-main-area-end -->
						<!-- product-info-area-start -->
						
						<!-- product-info-area-end -->
						<!-- new-book-area-start -->
						<div class="new-book-area mt-60">
							<div class="section-title text-center mb-30">
								<h3>Sản phẩm giảm giá</h3>
							</div>
							<div class="tab-active-2 owl-carousel" id="load_sp_giam_gia">

							</div>
						</div>
						<!-- new-book-area-start -->
					</div>
					<div class="col-lg-3 col-md-3 col-sm-4 col-xs-12">
						<div class="shop-left">
							<div class="left-title mb-20">
								<h4>Sản phẩm khác</h4>
							</div>
							<div class="random-area mb-30">
								<div class="product-active-2 owl-carousel" id="load_sp_khac">
									<div class="product-total-2" id="load_sp_khac_1">
										<!-- <div class="single-most-product bd mb-18">
											<div class="most-product-img">
												<a href=""><img src="img/product/20.jpg" alt="book" /></a>
											</div>
											<div class="most-product-content">
												
												<h4><a href="#">Endeavor Daytrip</a></h4>
												<div class="product-price">
													<ul>
														<li>$30.00</li>
														<li class="old-price">$33.00</li>
													</ul>
												</div>
											</div>
										</div>
										<div class="single-most-product bd mb-18">
											<div class="most-product-img">
												<a href="#"><img src="img/product/21.jpg" alt="book" /></a>
											</div>
											<div class="most-product-content">
												<div class="product-rating">
													<ul>
														<li><a href="#"><i class="fa fa-star"></i></a></li>
														<li><a href="#"><i class="fa fa-star"></i></a></li>
														<li><a href="#"><i class="fa fa-star"></i></a></li>
														<li><a href="#"><i class="fa fa-star"></i></a></li>
														<li><a href="#"><i class="fa fa-star"></i></a></li>
													</ul>
												</div>
												<h4><a href="#">Savvy Shoulder Tote</a></h4>
												<div class="product-price">
													<ul>
														<li>$30.00</li>
														<li class="old-price">$35.00</li>
													</ul>
												</div>
											</div>
										</div>
										<div class="single-most-product">
											<div class="most-product-img">
												<a href="#"><img src="img/product/22.jpg" alt="book" /></a>
											</div>
											<div class="most-product-content">
												<div class="product-rating">
													<ul>
														<li><a href="#"><i class="fa fa-star"></i></a></li>
														<li><a href="#"><i class="fa fa-star"></i></a></li>
														<li><a href="#"><i class="fa fa-star"></i></a></li>
														<li><a href="#"><i class="fa fa-star"></i></a></li>
														<li><a href="#"><i class="fa fa-star"></i></a></li>
													</ul>
												</div>
												<h4><a href="#">Compete Track Tote</a></h4>
												<div class="product-price">
													<ul>
														<li>$35.00</li>
													</ul>
												</div>
											</div>
										</div> -->
									</div>
									<div class="product-total-2" id="load_sp_khac_2">
										<!-- <div class="single-most-product bd mb-18">
											<div class="most-product-img">
												<a href="#"><img src="img/product/23.jpg" alt="book" /></a>
											</div>
											<div class="most-product-content">
												<div class="product-rating">
													<ul>
														<li><a href="#"><i class="fa fa-star"></i></a></li>
														<li><a href="#"><i class="fa fa-star"></i></a></li>
														<li><a href="#"><i class="fa fa-star"></i></a></li>
														<li><a href="#"><i class="fa fa-star"></i></a></li>
														<li><a href="#"><i class="fa fa-star"></i></a></li>
													</ul>
												</div>
												<h4><a href="#">Voyage Yoga Bag</a></h4>
												<div class="product-price">
													<ul>
														<li>$30.00</li>
														<li class="old-price">$33.00</li>
													</ul>
												</div>
											</div>
										</div>
										<div class="single-most-product bd mb-18">
											<div class="most-product-img">
												<a href="#"><img src="img/product/24.jpg" alt="book" /></a>
											</div>
											<div class="most-product-content">
												<div class="product-rating">
													<ul>
														<li><a href="#"><i class="fa fa-star"></i></a></li>
														<li><a href="#"><i class="fa fa-star"></i></a></li>
														<li><a href="#"><i class="fa fa-star"></i></a></li>
														<li><a href="#"><i class="fa fa-star"></i></a></li>
														<li><a href="#"><i class="fa fa-star"></i></a></li>
													</ul>
												</div>
												<h4><a href="#">Impulse Duffle</a></h4>
												<div class="product-price">
													<ul>
														<li>$70.00</li>
														<li class="old-price">$74.00</li>
													</ul>
												</div>
											</div>
										</div>
										<div class="single-most-product">
											<div class="most-product-img">
												<a href="#"><img src="img/product/22.jpg" alt="book" /></a>
											</div>
											<div class="most-product-content">
												<div class="product-rating">
													<ul>
														<li><a href="#"><i class="fa fa-star"></i></a></li>
														<li><a href="#"><i class="fa fa-star"></i></a></li>
														<li><a href="#"><i class="fa fa-star"></i></a></li>
														<li><a href="#"><i class="fa fa-star"></i></a></li>
														<li><a href="#"><i class="fa fa-star"></i></a></li>
													</ul>
												</div>
												<h4><a href="#">Fusion Backpack</a></h4>
												<div class="product-price">
													<ul>
														<li>$59.00</li>
													</ul>
												</div>
											</div>
										</div> -->
									</div>	
								</div>
							</div>
							<div class="banner-area mb-30">
								<div class="banner-img-2">
									<a><img src="img/banner/33.jpg" alt="banner" /></a>
								</div>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- product-main-area-end -->
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
        <script src="js/js/sweetalert2@8.js"></script>
        <script src="js/js/chung.js"></script>
        <script src="js/js/product-details.js"></script>
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

