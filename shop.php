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
    <body class="shop">
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
											<ul>
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
		<!-- shop-main-area-start -->
		<div class="shop-main-area mb-70">
			<div class="container">
				<div class="row">
					<div class="col-lg-3 col-md-3 col-sm-4 col-xs-12">
						<div class="shop-left">
							<div class="section-title-5 mb-30">
								<h4>Danh mục sản phẩm</h4>
							</div>
							<div class="left-menu mb-30 scrollpane">
								<ul id="load_danh_muc_san_pham">
									<!-- Phần này tự load -->
									<!-- <li><a >Sách Bán Chạy</a></li>
									<li><a href="#">Sách Thiếu Nhi</a></li>
									<li><a href="#">Sách Ngoại Văn</a></li>
									<li><a href="#">Sách Kinh Tế</a></li>
									<li><a href="#">Sách Văn Học Trong Nước</a></li>
									<li><a href="#">Sách Văn Học Nước Ngoài</a></li>
									<li><a href="#">Sách Thường Thức - Đời Sống</a></li>
									<li><a href="#">Sách Tin Học - Ngoại Ngữ</a></li>
									<li><a href="#">Sách Giáo Khoa</a></li> -->
								</ul>
							</div>
							<div class="left-title mb-20">
								<h4>Giá</h4>
							</div>
							<div class="color-menu mb-30">
								<ul class="color" id="price">
									<li><input type="text" name="" id="price_from">đ-</li>
									<li><input type="text" name="" id="price_to">đ</li>
									<li><input type="button" name="" value="Tìm" id="btn_price"></li>
								</ul>
							</div>
							
							<div class="left-title mb-20">
								<h4>Tác giả</h4>
							</div>
							<div class="left-menu mb-30 scrollpane">
								<ul id="load_author">
									<!-- Phần này tự load -->
									<!-- <li><a href="#">Adidas<span>(4)</span></a></li>
									<li><a href="#">Chanel<span>(7)</span></a></li>
									<li><a href="#">DKNY <span>(3)</span></a></li>
									<li><a href="#">Dolce<span>(3)</span></a></li>
									<li><a href="#">Gabbana<span>(2)</span></a></li>
									<li><a onc>Nike<span>(3)</span></a></li>
									<li><a href="#">Other <span>(1)</span></a></li> -->
								</ul>
							</div>
							<div class="left-title mb-20">
								<h4>Nhà xuất bản</h4>
							</div>
							<div class="left-menu mb-30 scrollpane">
								<ul id="load_nxb">
									<!-- Phần này tự load -->
									<!-- <li><a href="#">$0.00-$9.99<span>(1)</span></a></li>
									<li><a href="#">$30.00-$39.99<span>(11)</span></a></li>
									<li><a href="#">$40.00-$49.99<span>(2)</span></a></li>
									<li><a href="#">$50.00-$59.99<span>(3)</span></a></li>
									<li><a href="#">$70.00-and above<span>(1)</span></a></li> -->
								</ul>
							</div>
							<!-- <div class="left-title mb-20">
								<h4>Random</h4>
							</div>
							<div class="random-area mb-30">
								<div class="product-active-2 owl-carousel">
									<div class="product-total-2">
										<div class="single-most-product bd mb-18">
											<div class="most-product-img">
												<a href="#"><img src="img/product/20.jpg" alt="book" /></a>
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
										</div>
									</div>
									<div class="product-total-2">
										<div class="single-most-product bd mb-18">
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
										</div>
									</div>	
								</div>
							</div>
							<div class="banner-area mb-30">
								<div class="banner-img-2">
									<a href="#"><img src="img/banner/31.jpg" alt="banner" /></a>
								</div>
							</div>
							<div class="left-title-2 mb-30">
								<h2>Compare Products</h2>
								<p>You have no items to compare.</p>
							</div>
							<div class="left-title-2">
								<h2>My Wish List</h2>
								<p>You have no items in your wish list.</p>
							</div> -->
						</div>
					</div>
					<div class="col-lg-9 col-md-9 col-sm-8 col-xs-12">
						<div class="category-image mb-30">
							<a href="#"><img src="img/banner/32.jpg" alt="banner" /></a>
						</div>
						<div class="section-title-5 mb-30">
							<h2 id="tieu_de">SÁCH BÁN CHẠY</h2>
						</div>
						<div class="toolbar mb-30">
							<div class="list-page">
								<p id="show_gia"></p>
							</div>
							
							<div class="toolbar-sorter">
								<span>Sắp xếp theo: </span>
								<select id="sorter" class="sorter-options" data-role="sorter" onchange="event_search()">
									<option selected="selected" value="0"> Chọn </option>
									<option value="sort=tensp-asc"> Tên sách: A - Z </option>
									<option value="sort=tensp-desc"> Tên sách: Z - A </option>
									<option value="sort=dongia-asc"> Giá: Thấp đến Cao </option>
									<option value="sort=dongia-desc"> Giá: Cao đến Thấp </option>
									<option value="sort=soluongdaban-desc"> Bán chạy nhất </option>
								</select>
								
							</div>
						</div> 
						<!-- tab-area-start -->
						<div class="tab-content">
							<div class="tab-pane active" id="th">
							    <div class="row" id="show_sp">
							        
							    </div>
							</div>
							<div class="tab-pane fade" id="list">
								<!-- single-shop-start -->
								<div class="single-shop mb-30">
									<div class="row">
										<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
											<div class="product-wrapper-2">
												<div class="product-img">
													<a href="#">
														<img src="img/product/3.jpg" alt="book" class="primary" />
													</a>
												</div>	
											</div>
										</div>
										<div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
											<div class="product-wrapper-content">
												<div class="product-details">
													<div class="product-rating">
														<ul>
															<li><a href="#"><i class="fa fa-star"></i></a></li>
															<li><a href="#"><i class="fa fa-star"></i></a></li>
															<li><a href="#"><i class="fa fa-star"></i></a></li>
															<li><a href="#"><i class="fa fa-star"></i></a></li>
															<li><a href="#"><i class="fa fa-star"></i></a></li>
														</ul>
													</div>
													<h4><a href="#">Crown Summit</a></h4>
													<div class="product-price">
														<ul>
															<li>$36.00</li>
															<li class="old-price">$38.00</li>
														</ul>
													</div>
													<p>The sporty Joust Duffle Bag can't be beat - not in the gym, not on the luggage carousel, not anywhere. Big enough to haul a basketball or soccer ball and some sneakers with plenty of room to spare,...											</p>
												</div>
												<div class="product-link">
													<div class="product-button">
														<a href="#" title="Add to cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
													</div>
													<div class="add-to-link">
                                                        <ul>
                                                            <li><a href="product-details.php" title="Details"><i class="fa fa-external-link"></i></a></li>
                                                        </ul>
                                                    </div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<!-- single-shop-end -->
								<!-- single-shop-start -->
								<div class="single-shop mb-30">
									<div class="row">
										<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
											<div class="product-wrapper-2">
												<div class="product-img">
													<a href="#">
														<img src="img/product/18.jpg" alt="book" class="primary" />
													</a>
												</div>	
											</div>
										</div>
										<div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
											<div class="product-wrapper-content">
												<div class="product-details">
													<div class="product-rating">
														<ul>
															<li><a href="#"><i class="fa fa-star"></i></a></li>
															<li><a href="#"><i class="fa fa-star"></i></a></li>
															<li><a href="#"><i class="fa fa-star"></i></a></li>
															<li><a href="#"><i class="fa fa-star"></i></a></li>
															<li><a href="#"><i class="fa fa-star"></i></a></li>
														</ul>
													</div>
													<h4><a href="#">Driven Backpack</a></h4>
													<div class="product-price">
														<ul>
															<li>$34.00</li>
															<li class="old-price">$36.00</li>
														</ul>
													</div>
													<p>The sporty Joust Duffle Bag can't be beat - not in the gym, not on the luggage carousel, not anywhere. Big enough to haul a basketball or soccer ball and some sneakers with plenty of room to spare,...											</p>
												</div>
												<div class="product-link">
													<div class="product-button">
														<a href="#" title="Add to cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
													</div>
													<div class="add-to-link">
                                                        <ul>
                                                            <li><a href="product-details.php" title="Details"><i class="fa fa-external-link"></i></a></li>
                                                        </ul>
                                                    </div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<!-- single-shop-end -->
								<!-- single-shop-start -->
								<div class="single-shop mb-30">
									<div class="row">
										<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
											<div class="product-wrapper-2">
												<div class="product-img">
													<a href="#">
														<img src="img/product/10.jpg" alt="book" class="primary" />
													</a>
												</div>	
											</div>
										</div>
										<div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
											<div class="product-wrapper-content">
												<div class="product-details">
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
													<p>The sporty Joust Duffle Bag can't be beat - not in the gym, not on the luggage carousel, not anywhere. Big enough to haul a basketball or soccer ball and some sneakers with plenty of room to spare,...											</p>
												</div>
												<div class="product-link">
													<div class="product-button">
														<a href="#" title="Add to cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
													</div>
													<div class="add-to-link">
                                                        <ul>
                                                            <li><a href="product-details.php" title="Details"><i class="fa fa-external-link"></i></a></li>
                                                        </ul>
                                                    </div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<!-- single-shop-end -->
								<!-- single-shop-start -->
								<div class="single-shop mb-30">
									<div class="row">
										<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
											<div class="product-wrapper-2">
												<div class="product-img">
													<a href="#">
														<img src="img/product/5.jpg" alt="book" class="primary" />
													</a>
												</div>	
											</div>
										</div>
										<div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
											<div class="product-wrapper-content">
												<div class="product-details">
													<div class="product-rating">
														<ul>
															<li><a href="#"><i class="fa fa-star"></i></a></li>
															<li><a href="#"><i class="fa fa-star"></i></a></li>
															<li><a href="#"><i class="fa fa-star"></i></a></li>
															<li><a href="#"><i class="fa fa-star"></i></a></li>
															<li><a href="#"><i class="fa fa-star"></i></a></li>
														</ul>
													</div>
													<h4><a href="#">Set of Sprite Yoga Straps</a></h4>
													<div class="product-price">
														<ul>
															<li> <span>Starting at</span>$34.00</li>
														</ul>
													</div>
													<p>The sporty Joust Duffle Bag can't be beat - not in the gym, not on the luggage carousel, not anywhere. Big enough to haul a basketball or soccer ball and some sneakers with plenty of room to spare,...											</p>
												</div>
												<div class="product-link">
													<div class="product-button">
														<a href="#" title="Add to cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
													</div>
													<div class="add-to-link">
                                                        <ul>
                                                            <li><a href="product-details.php" title="Details"><i class="fa fa-external-link"></i></a></li>
                                                        </ul>
                                                    </div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<!-- single-shop-end -->
								<!-- single-shop-start -->
								<div class="single-shop">
									<div class="row">
										<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
											<div class="product-wrapper-2">
												<div class="product-img">
													<a href="#">
														<img src="img/product/19.jpg" alt="book" class="primary" />
													</a>
												</div>	
											</div>
										</div>
										<div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
											<div class="product-wrapper-content">
												<div class="product-details">
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
															<li>$32.00</li>
														</ul>
													</div>
													<p>The sporty Joust Duffle Bag can't be beat - not in the gym, not on the luggage carousel, not anywhere. Big enough to haul a basketball or soccer ball and some sneakers with plenty of room to spare,...											</p>
												</div>
												<div class="product-link">
													<div class="product-button">
														<a href="#" title="Add to cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
													</div>
													<div class="add-to-link">
                                                        <ul>
                                                            <li><a href="product-details.php" title="Details"><i class="fa fa-external-link"></i></a></li>
                                                        </ul>
                                                    </div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<!-- single-shop-end -->
							</div>
						</div>
						<!-- tab-area-end -->
						<!-- pagination-area-start -->
						<div class="pagination-area mt-50">
							<div class="page-number">
								<ul id="phan_trang">
									<!-- <li><a href="#" class="angle"><i class="fa fa-angle-left"></i><i class="fa fa-angle-left"></i></a></li>
									<li><a href="#" class="active">1</a></li>
									<li><a href="#">2</a></li>
									<li><a href="#">3</a></li>
									<li><a href="#">4</a></li>
									<li><a href="#" class="angle"><i class="fa fa-angle-right"></i></a></li>
									<li><a href="#" class="angle"><i class="fa fa-angle-right"></i><i class="fa fa-angle-right"></i></a></li> -->
								</ul>
							</div>
						</div>
						<!-- pagination-area-end -->
					</div>
				</div>
			</div>
		</div>
		<!-- shop-main-area-end -->
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
		
		
		
		
		
		
		
		<!-- all js here -->
		<!-- jquery latest version -->
        <script src="js/vendor/jquery-1.12.0.min.js"></script>
       <!--  <script src="js/js/jquery-3.4.1.min.js"></script> -->
        <script src="js/js/sweetalert2@8.js"></script>
        <script src="js/js/chung.js"></script>
        <script src="js/js/shop.js"></script>
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

