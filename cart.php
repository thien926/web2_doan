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
    <body class="cart">
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
								<li><a href="cart.php" class="active">Giỏ hàng</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- breadcrumbs-area-end -->
		<!-- entry-header-area-start -->
		<div class="entry-header-area">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="entry-header-title">
							<h2 id="tieu_de_cart">Giỏ hàng</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- entry-header-area-end -->
		<!-- cart-main-area-start -->
		<div class="cart-main-area mb-70">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<form action="#">
							<div class="table-content table-responsive">
								<table>
									<thead>
										<tr>
											<th class="product-thumbnail">Ảnh</th>
											<th class="product-name">Tên sách</th>
											<th class="product-price">Giá bìa</th>
											<th class="product-price">Khuyến mãi</th>
											<th class="product-subtotal">Giá bán</th>
											<th class="product-quantity">Số lượng</th>
											<th class="product-remove" id="truong_can_sua">Xóa</th>
										</tr>
									</thead>
									<tbody id="sua_cart">
										<!-- <tr>
											<td class="product-thumbnail"><a href="#"><img src="img/cart/1.jpg" alt="man" /></a></td>
											<td class="product-name"><a href="#">Vestibulum suscipit</a></td>
											<td class="product-price"><span class="amount">£165.00</span></td>
											<td class="product-quantity"><input type="number" value="1"></td>
											<td class="product-subtotal">£165.00</td>
											<td class="product-remove"><a href="#"><i class="fa fa-times"></i></a></td>
										</tr>
										<tr>
											<td class="product-thumbnail"><a href="#"><img src="img/cart/2.jpg" alt="man" /></a></td>
											<td class="product-name"><a href="#">Vestibulum dictum magna</a></td>
											<td class="product-price"><span class="amount">£50.00</span></td>
											<td class="product-quantity"><input type="number" value="1"></td>
											<td class="product-subtotal">£50.00</td>
											<td class="product-remove"><a href="#"><i class="fa fa-times"></i></a></td>
										</tr> -->
									</tbody>
								</table>
							</div>
						</form>
					</div>
				</div>
				<div class="row">
                    <div class="col-lg-8 col-md-8 col-sm-6 col-xs-12">
                        
                        <div class="coupon" id="pptt_sua">
                            <h3>Phương thức thanh toán</h3>
                            <select class="left_cart_select" id="pptt">
                        		<option value="Thanh toán khi nhận hàng">Thanh toán khi nhận hàng</option>
                        		<option value="Thanh toán qua thẻ ngân hàng" disabled >Thanh toán qua thẻ ngân hàng(Đang xấy dựng)</option>
                        	</select>
                            <form>
                            	<h3>Địa chỉ thanh toán</h3>
                            	<select class="left_cart_select" onchange="onchange_dc(this)" id="thay_doi_dia_chi">
                            		<option value="dcmacdinh">Chọn địa chỉ mặc định của tài khoản để nhận hàng</option>
                            		<option value="diachi">Chọn địa chỉ nhận hàng khác</option>
                            	</select>
                                <input type="text" placeholder="Địa chỉ nhận hàng" id="dc_tt_khac">
                                
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div class="cart_totals" id="khung_thanh_toan">
                            <h2>Tổng thanh toán</h2>
                            <table>
                                <tbody>
                                    <tr class="shipping">
                                        <th>Tổng sản phẩm</th>
                                        <td>
                                            <strong>
                                                <span class="amount" id="total_sp">Không tính toán được</span>
                                            </strong>
                                        </td>
                                    </tr>
                                    <tr class="shipping">
                                        <th>Tổng giá bìa</th>
                                        <td>
                                            <strong>
                                                <span class="amount" id="total_gia_bia">Không tính toán được</span>
                                            </strong>
                                        </td>
                                    </tr>
                                    <tr class="order-total">
                                        <th>Tổng thành tiền</th>
                                        <td>
                                            <strong>
                                                <span class="amount" id="total_thanh_tien">Không tính toán được</span>
                                            </strong>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="wc-proceed-to-checkout">
                                <a class="cursor">Đặt hàng</a>
                            </div>
                        </div>
                    </div>
                </div>
			</div>
		</div>
		<!-- cart-main-area-end -->
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
        <script src="js/js/sweetalert2@8.js"></script>
        <script src="js/js/chung.js"></script>
        <script src="js/js/cart.js"></script>
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

