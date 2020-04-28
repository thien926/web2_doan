<?php

function echo_head(){
	echo '
	<div id="head">
		<div id="head_book">
			<img src="img/icon/book.png">
			<p>Hơn 80.000 tựa sách</p>
		</div>
		<div id="head_car">
			<img src="img/icon/car2.png">
			<p>&nbsp;Miễn phí giao hàng</p>
		</div>
		<div id="head_like">
			<img src="img/icon/like.png">
			<p>&nbsp;Thích 7,4K</p>
		</div>
		<div id="head_share">Chia sẻ</div>
	</div>

	<div id="head_link">
		<div id="head_link_link">clever<span>book</span>.com</div>
		<div id="head_link_search">
			<img src="img/icon/search.png">
			<form action="" name="" method="">
				<input type="text" name="txt_input_search" id="input_search" placeholder="Tìm kiếm tên sách, tác giả"/>
				<input type="submit" name="search_submit" value="Tìm kiếm"/>
			</form>
		</div>
		<div id="head_link_img">
			<img src="img/icon/cart.png">
			<div id="num_sp">99</div>
		</div>
		<div id="head_link_dndk">
			<span>Đăng nhập</span>&nbsp;|&nbsp;<a href="index.php?dispatch=useradd">Đăng kí</a>
		</div>
	</div>

	<div id="head_danh_muc">
		<div id="danh_muc">
			<img src="img/icon/category.png" id="icon_danhmuc">
			<div id="list_danhmuc">Danh mục sản phẩm</div>
			<ul class="submenu" id="submenu">
				<li><a href="">Sách Bán Chạy</a></li>
				<li><a href="">Sách Mới Phát Hành</a></li>
				<li><a href="">Sách Ngoại Văn</a></li>
				<li><a href="">Sách Kinh Tế</a></li>
				<li><a href="">Sách Văn Học Trong Nước</a></li>
				<li><a href="">Sách Văn Học Nước Ngoài</a></li>
				<li><a href="">Sách Thường Thức - Đời Sống</a></li>
				<li><a href="">Sách Thiếu Nhi</a></li>
				<li><a href="">Sách Tin Học - Ngoại Ngữ</a></li>
				<li><a href="">Sách Giáo Khoa</a></li>
				<li><a href="">Sách bán chạy</a></li>
			</ul>
		</div>
		<div id="hot_line">
			<img src="img/icon/phone.png">
			<div>Hotline: 0364117408</div>
		</div>
		<div id="ho_tro">
			<img src="img/icon/question.png">
			<div>Hỗ trợ trực tuyến</div>
		</div>
	</div>
	<!--     END HEAD    -->

	';
}

function echo_form_dki(){
	date_default_timezone_set("Asia/Ho_Chi_Minh");
	$time = getdate();
	$s = '

	<div id="main_dki_tk">
		<div id="tk_trangchu">
			<span><a href="index.php">Trang chủ</a>&nbsp;></span>
			<span>Tạo tài khoản mới</span>
		</div>
		<div id="no_tk">
			Chưa có tài khoản? Đăng kí ngay
		</div>
		<div id="div_dki">
			<div>ĐĂNG KÝ TÀI KHOẢN</div>
			<form action="index.php" name="form_dki" method="">
				<div>
					<label>Họ tên<span>*</span></label>
					<input type="text" name="name" placeholder="Họ và tên" />
				</div>
				<span id="note_name"></span>
				<div>
					<label>Tên tài khoản<span>*</span></label>
					<input type="text" name="user" placeholder="Tên tài khoản" />
				</div>
				<span id="note_user"></span>
				<div>
					<label>Mật khẩu<span>*</span></label>
					<input type="password" name="pass" placeholder="Mật khẩu" />
				</div>
				<span id="note_pass"></span>
				<div>
					<label>Nhập lại mật khẩu<span>*</span></label>
					<input type="password" name="replay_pass" placeholder="Nhập lại mật khẩu" />
				</div>
				<span id="note_replay_pass"></span>
				<div>
					<label>Số điện thoại<span>*</span></label>
					<input type="text" name="phone" placeholder="Số điện thoại" />
				</div>
				<span id="note_phone"></span>
				<div>
					<label>Thư điện tử<span>*</span></label>
					<input type="text" name="mail" placeholder="Thư điện tử" />
				</div>
				<span id="note_mail"></span>

				<div>
					<label>Địa chỉ<span>*</span></label>
					<input type="text" name="address" placeholder="Địa chỉ" />
				</div>
				<span id="note_address"></span>
				
				<div>
					<label>Giới tính<span>*</span></label>
					<div id="input_sex">
						<input type="radio" name="sex" value="nam"><span>Nam</span>
						<input type="radio" name="sex" value="nu"><span>Nữ</span>
					</div>
				</div>
				<span id="note_sex"></span>
				<div>
					<label>Ngày sinh<span>*</span></label>
					<select id="div_dki_date" name="date">
						<option value="0" selected>Ngày</option>';

	for($i = 1; $i <= 31; ++$i){
		$s .= '<option value="'. $i .'">'. $i .'</option>';
	}




						
					$s.= '</select>
					<select id="div_dki_month" name="month">
						<option value="0" selected>Tháng</option>';

	for ($i=1; $i <= 12; ++$i) { 
		$s .= '<option value="'. $i .'">'. $i .'</option>';
	}

						
					$s .= '</select>
					<select id="div_dki_year" name="year">
						<option value="0" selected>Năm</option>';
	$date_end = $time['year'] - 100;
	for ($i=$time['year']; $i >= $date_end; --$i) { 
		$s .= '<option value="'. $i .'">'. $i .'</option>';
	}

						
					$s .= '</select>
				</div>
				<span id="note_date"></span>
				
				<input type="submit" name="dang_ki" value="ĐĂNG KÝ">
			</form>
		</div>
	</div>

	';

	echo $s;
    // echo "Thứ: ".$time['weekday']."<hr>";
    // echo "Ngày: ".$time['mday']."<hr>";
    // echo "Tháng: ".$time['mon']."<hr>";
    // echo "Năm: ".$time['year']."<hr>";
    // echo "Giờ: ".$time['hours']."<hr>";
    // echo "Phút: ".$time['minutes']."<hr>";
    // echo "Giây: ".$time['seconds']."<hr>";
}


?>
