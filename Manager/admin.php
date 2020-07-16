<!DOCTYPE html>
<html lang="vi">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>Admin - Koparion</title>
    <link rel="shortcut icon" type="image/x-icon" href="../favicon.png">

    <!-- Load font awesome icons -->
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" crossorigin="anonymous"> -->
    <link rel="stylesheet" href="font-awesome.min.css">

    <!-- Chart JS -->
    <script src="js/Chart.min.js"></script>

    <!-- Sweet Alert -->
    <script src="../js/js/sweetalert2@8.js"></script>

    <!-- Jquery -->
    <script src="js/Jquery.min.js"></script>

    <!-- Our files -->
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/progress.css">

    <!-- <script src="data/products.js"></script>
    <script src="js/classes.js"></script> -->
    <!-- <script src="js/dungchung.js"></script> -->
    <script src="js/admin.js"></script>
</head>

<body>
    <header>
        <h2>Koparion - Admin</h2>
    </header>

    <!-- Menu -->
    <aside class="sidebar">
        <ul class="nav">
            <li class="nav-title">Giao diện</li>
            <!-- <li class="nav-item"><a class="nav-link active"><i class="fa fa-home"></i> Home</a></li> -->
            <li class="nav-item" onclick="refreshTableSanPham()" ><a class="nav-link"><i class="fa fa-th-large"></i> Sản Phẩm</a></li>
            <li class="nav-item" onclick="refreshTableLoaiSanPham()"><a class="nav-link"><i class="fa fa-pencil-square"></i> Loại Sản Phẩm</a></li>
            <li class="nav-item" onclick="refreshTableDonHang()"><a class="nav-link"><i class="fa fa-file-text-o"></i> Đơn Hàng</a></li>
            <li class="nav-item" onclick="refreshTableKhachHang()"><a class="nav-link"><i class="fa fa-address-book-o"></i> Khách Hàng</a></li>
            <li class="nav-item"><a class="nav-link"><i class="fa fa-bar-chart-o"></i> Thống Kê</a></li>
            <hr>
            <li class="nav-item"><a class="nav-link"><i class="fa fa-id-card"></i> Thông tin cá nhân</a></li>
            <hr>
            <li class="nav-item">
                <a class="nav-link" id="btnDangXuat">
                    <i class="fa fa-arrow-left"></i>
                    Đăng xuất
                </a>
            </li>
        </ul>
    </aside>

    <!-- Khung hiển thị chính -->
    <div class="main">
        <div class="home">

        </div>

        <!-- Sản Phẩm -->
        <div class="sanpham">
            <?php 

                            if(isset($_FILES['hinhanh'])){
                                $tenanh = $_FILES['hinhanh']['name'];
                                // echo $tenanh;
                            }
                            else{
                            };
                            if(isset($_POST['submit'])){
                                if(isset($_FILES['hinhanh'])){
                                    if ($_FILES['hinhanh']['error'] > 0)
                                    {
                                        
                                    }
                                    else{
                                        // Upload file
                                        move_uploaded_file($_FILES['hinhanh']['tmp_name'], "../img/products/".$_FILES['hinhanh']['name']);
                                    }
                                }
                            }
                        ?>
            <table class="table-header">
                <tr>
                    <!-- Theo độ rộng của table content -->
                    <th title="Sắp xếp" style="width: 5%" onclick="sortProductsTable('masp')">Mã <i class="fa fa-sort"></i></th>
                    <th title="Sắp xếp" style="width: 40%" onclick="sortProductsTable('ten')">Tên <i class="fa fa-sort"></i></th>
                    <th title="Sắp xếp" style="width: 10%" onclick="sortProductsTable('soluong')">Số lượng <i class="fa fa-sort"></i></th>
                    <th title="Sắp xếp" style="width: 15%" onclick="sortProductsTable('gia')">Giá <i class="fa fa-sort"></i></th>
                    <th title="Sắp xếp" style="width: 15%" onclick="sortProductsTable('khuyenmai')">Khuyến mãi <i class="fa fa-sort"></i></th>
                    <th title="Sắp xếp" style="width: 10%" onclick="sortProductsTable('trangthai')">Trạng thái <i class="fa fa-sort"></i></th>
                    <th style="width: 10%">Hành động</th>
                </tr>
            </table>

            <div class="table-content">
            </div>

            <div class="table-footer">
                <select name="kieuTimSanPham">
                    <option value="ma">Tìm theo mã</option>
                    <option value="ten">Tìm theo tên</option>
                </select>
                <input type="text" placeholder="Tìm kiếm..." onkeyup="timKiemSanPham(this)">
                <button onclick="document.getElementById('khungThemSanPham').style.transform = 'scale(1)'; autoMaSanPham()">
                    <i class="fa fa-plus-square"></i>
                    Thêm sản phẩm
                </button>
                <button onclick="refreshTableSanPham()">
                    <i class="fa fa-refresh"></i>
                    Làm mới
                </button>
                
            </div>

            <div id="khungThemSanPham" class="overlay">
                <span id="closekhungThemSanPham" class="close" onclick="this.parentElement.style.transform = 'scale(0)'; $('#anhDaiDienSanPhamThem').attr('src',''); $('#inputimg').val('');">&times;</span>
                <form method="post" action="" enctype="multipart/form-data" onsubmit="return themSanPham();">
                    <table class="overlayTable table-outline table-content table-header">
                        <tr>
                            <th colspan="2">Thêm Sản Phẩm</th>
                        </tr>
                        <tr>
                            <td>Mã sản phẩm:</td>
                            <td><input disabled="disabled" type="text" id="maspThem" name="maspThem"></td>
                        </tr>
                        <tr>
                            <td>Tên sản phẩm:</td>
                            <td><input type="text"></td>
                        </tr>
                        <tr>
                            <td>Loại sản phẩm:</td>
                            <td>
                                <select name="chonCompany" onchange="autoMaSanPham(this.value)">
                                    <script>
                                        ajaxLoaiSanPham();
                                    </script>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Tác giả:</td>
                            <td>
                                <input type="text" name="">
                            </td>
                        </tr>
                        <tr>
                            <td>Nhà xuất bản:</td>
                            <td>
                                <input type="text" name="">
                            </td>
                        </tr>

                        <tr>
                            <td>Hình:</td>
                            <td>
                                <img class="hinhDaiDien" id="anhDaiDienSanPhamThem" src="">
                                <input type="file" id="inputimg" name="hinhanh" onchange="capNhatAnhSanPham(this.files, 'anhDaiDienSanPhamThem', '<?php if(isset($tenanh)) echo $tenanh; ?>')">
                                <input style="display: none;" type="text" id="hinhanh" value="">
                            </td>
                        </tr>
                        <tr>
                            <td>Số lượng:</td>
                            <td><input type="text" value="100"></td>
                        </tr>
                        <tr>
                            <td>Giá tiền:</td>
                            <td><input type="text"></td>
                        </tr>
                        <tr>
                            <td>Khuyến mãi:</td>
                            <td>
                                <select name="chonKhuyenMai" onchange="showKhuyenMai('khungThemSanPham')">
                                    <script type="text/javascript">
                                        ajaxKhuyenMai();
                                    </script>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Giá trị khuyến mãi:</td>
                            <td><input id="giatrikm" type="text" disabled></td>
                        </tr>
                        <tr>
                            <td>Phần trăm khuyến mãi:</td>
                            <td><input id="phantramkm" type="text" disabled></td>
                        </tr>
                        <tr>
                            <td>Mô tả:</td>
                            <td><input type="text"></td>
                        </tr>
                        <tr>
                            <td>Trạng thái</td>
                            <td>
                                <select>
                                    <option value="1">Hiện</option>
                                    <option value="0">Ẩn</option>
                                </select>
                            </td>
                        </tr>
                        <tr>

                            <td colspan="2" class="table-footer"><button name="submit">THÊM</button> </td>
                        </tr>
                    </table>
                </form>
                <!-- <div style="display: none;" id="hinhanh"></div> -->
            </div>
            <div id="khungSuaSanPham" class="overlay">
                <span id="closekhungSuaSanPham" class="close" onclick="this.parentElement.style.transform = 'scale(0)'; $('#anhDaiDienSanPhamSua').attr('src',''); $('#inputimg1').val('');" >&times;</span>
                <form method="post" action="admin.php" enctype="multipart/form-data" onsubmit="" id="formsua">
                    <table class="overlayTable table-outline table-content table-header">
                        <tr>
                            <th colspan="2" id="tensp2">Sửa sản phẩm</th>
                        </tr>
                        <tr>
                            <td>Mã sản phẩm:</td>
                            <td><input disabled="disabled" type="text" id="maspSua" name="maspSua" value=""></td>
                        </tr>
                        <tr>
                            <td>Tên sẩn phẩm:</td>
                            <td><input type="text" value="" id="tensp1"></td>
                        </tr>
                        <tr>
                            <td>Loại sản phẩm:</td>
                            <td>
                                <select name="chonCompany" onchange="autoMaSanPham(this.value)" id="chonCompany">
                                
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Tác giả:</td>
                            <td id="tacgia">
                                
                            </td>
                        </tr>
                        <tr>
                            <td>Nhà xuất bản:</td>
                            <td id="nxb">`
                                
                            </td>
                        </tr>
                        
                        <tr>
                            <td>Hình:</td>
                            <td>
                                <img class="hinhDaiDien" id="anhDaiDienSanPhamSua" src="">
                                <input id="inputimg1" type="file" name="hinhanh" onchange="capNhatAnhSanPham(this.files, 'anhDaiDienSanPhamSua', '<?php if(isset($tenanh)) echo $tenanh; ?>')">
                                <input style="display: none;" type="text" id="hinhanh1" value="">
                                
                            </td>
                        </tr>
                                    
                        <tr>
                            <td>Số lượng:</td>
                            <td><input type="text" value="" id="soluong"></td>
                        </tr>
                        <tr>
                            <td>Giá tiền:</td>
                            <td><input type="text" value="" id="giatien"></td>
                        </tr>
                        <tr>
                            <td>Khuyến mãi:</td>
                            <td>
                                <select name="chonKhuyenMai" onchange="showKhuyenMai('khungSuaSanPham')" id="chonKhuyenMai">
                                        
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Giá trị khuyến mãi:</td>
                            <td><input id="giatrikm1" type="text" value="" disabled></td>
                        </tr>
                        <tr>
                            <td>Phần trăm khuyến mãi:</td>
                            <td><input id="ptkm" type="text" value="" disabled></td>
                        </tr>
                        <tr>
                            <td>Mô tả:</td>
                            <td><input type="text" value="" id="mota"></td>
                        </tr>
                        <tr>
                            <td>Trạng thái</td>
                            <td>
                                <select id="ttsua">
                                    <option value="1">Hiện</option>
                                    <option value="0">Ẩn</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2"  class="table-footer"> <button name="submit">SỬA</button> </td>
                        </tr>
                        
                    </table>
                </form>
            </div>
            
        </div> <!-- // sanpham -->

        <div class="loaisanpham">
            <table class="table-header">
                <tr>
                    <!-- Theo độ rộng của table content -->
                    <th title="Sắp xếp" style="width: 10%" onclick="sortLoaiSanPhamTable('maloai')">Mã loại <i class="fa fa-sort"></i></th>
                    <th title="Sắp xếp" style="width: 20%" onclick="sortLoaiSanPhamTable('tenloai')">Tên loại <i class="fa fa-sort"></i></th>
                    <th title="Sắp xếp" style="width: 60%" onclick="sortLoaiSanPhamTable('mota')">Mô tả <i class="fa fa-sort"></i></th>
                    <th style="width: 10%">Hành động</th>
                </tr>
            </table>

            <div class="table-content">
            </div>

            <div class="table-footer">
                <select name="kieuTimLoaiSanPham">
                    <option value="ma">Tìm theo mã loại</option>
                    <option value="ten">Tìm theo tên loại</option>
                </select>
                <input type="text" placeholder="Tìm kiếm..." onkeyup="timKiemLoaiSanPham(this)">
                <button onclick="openThemLoaiSanPham()"><i class="fa fa-plus-square"></i> Thêm loại sản phẩm</button>
            </div>
            <div id="khungLoaiSanPham" class="overlay">
                <span class="close" onclick="this.parentElement.style.transform = 'scale(0)'; " id="closekhungLoaiSanPham">&times;</span>
                <form method="post" action="" enctype="multipart/form-data" id="form_khungLoaiSanPham">
                    <table class="overlayTable table-outline table-content table-header">
                        <tr>
                            <th colspan="2" id="titlekhungLoaiSanPham">Sửa Loại Sản Phẩm</th>
                        </tr>
                        <tr>
                            <td>Mã loại:</td>
                            <td><input disabled type="text" id="maloaiSua" name="maloaiSua"></td>
                        </tr>
                        <tr>
                            <td>Tên loại:</td>
                            <td><input type="text" id="tenloaiSua" name="tenloaiSua"></td>
                        </tr>
                        <tr>
                            <td>Mô tả:</td>
                            <td><input type="text" id="motaSua" name="motaSua"></td>
                        </tr>
                        
                        <tr>
                            <td colspan="2" class="table-footer"> <button name="submit" id="buttonkhungLoaiSanPham">SỬA</button> </td>
                        </tr>

                    </table>
                </form>
            </div>

        </div>

        <!-- Đơn Hàng -->
        <div class="donhang">
            <table class="table-header">
                <tr>
                    <!-- Theo độ rộng của table content -->
                    <th title="Sắp xếp" style="width: 7.5%" onclick="sortDonHangTable('madon')">Mã đơn <i class="fa fa-sort"></i></th>
                    <th title="Sắp xếp" style="width: 7.5%" onclick="sortDonHangTable('khach')">Mã khách <i class="fa fa-sort"></i></th>
                    <th title="Sắp xếp" style="width: 10%" onclick="sortDonHangTable('sdt')">Số điện thoại <i class="fa fa-sort"></i></th>
                    <th title="Sắp xếp" style="width: 15%" onclick="sortDonHangTable('diachi')">Địa chỉ <i class="fa fa-sort"></i></th>
                    <th title="Sắp xếp" style="width: 15%" onclick="sortDonHangTable('pptt')">Phương thức thanh toán <i class="fa fa-sort"></i></th>
                    <th title="Sắp xếp" style="width: 10%" onclick="sortDonHangTable('tongtien')">Tổng tiền <i class="fa fa-sort"></i></th>
                    <th title="Sắp xếp" style="width: 10%" onclick="sortDonHangTable('ngaydathang')">Ngày đặt hàng <i class="fa fa-sort"></i></th>
                    <th title="Sắp xếp" style="width: 10%" onclick="sortDonHangTable('ngaynhanhang')">Ngày nhận hàng <i class="fa fa-sort"></i></th>
                    <th title="Sắp xếp" style="width: 10%" onclick="sortDonHangTable('trangthai')">Trạng thái <i class="fa fa-sort"></i></th>
                    <th style="width: 10%">Hành động</th>
                </tr>
            </table>

            <div class="table-content">
            </div>

            <div class="table-footer">
                <div class="timTheoNgay">
                    Từ ngày: <input type="date" id="fromDate">
                    Đến ngày: <input type="date" id="toDate">

                    <button onclick="locDonHangTheoKhoangNgay()"><i class="fa fa-search"></i> Tìm theo ngày nhận hàng</button>
                </div>

                <select name="kieuTimDonHang">
                    <option value="ma">Tìm theo mã đơn</option>
                    <option value="khachhang">Tìm theo mã khách hàng</option>
                </select>
                <input type="text" placeholder="Tìm kiếm..." onkeyup="timKiemDonHang(this)">
            </div>
            <div id="khungTTDonhang" class="overlay">
                <span class="close" onclick="this.parentElement.style.transform = 'scale(0)'; " id="closekhungTTDonhang">&times;</span>
                <form method="post" action="" enctype="multipart/form-data" onsubmit="return onsubmit_tt_dh();">
                    <table class="overlayTable table-outline table-content table-header">
                        <tr>
                            <th colspan="2">Sửa Trạng Thái Đơn Hàng</th>
                            <td><input type="text" name="" style="display: none;" id="trangthai_kodoi" value=""></td>
                        </tr>
                        <tr>
                            <td>Đang xử lý:</td>
                            <td><input type="radio" name="trangthai" value="Đang xử lý" id="tt1"></td>
                        </tr>
                        <tr>
                            <td>Đang giao hàng:</td>
                            <td><input type="radio" name="trangthai" value="Đang giao hàng" id="tt2"></td>
                        </tr>
                        <tr>
                            <td>Đã giao hàng:</td>
                            <td><input type="radio" name="trangthai" value="Đã giao hàng" id="tt3"></td>
                        </tr>
                        <tr>
                            <td>Đã hủy đơn hàng:</td>
                            <td><input type="radio" name="trangthai" value="Đã hủy đơn hàng" id="tt4"></td>
                        </tr>
                        <tr>
                            <td colspan="2" class="table-footer"> <button name="submit" id="btn_sua_tt_dh">SỬA</button> </td>
                        </tr>

                    </table>
                </form>
            </div>
            <div id="khungXemchitietDonhang" class="overlay">
                <span class="close" onclick="this.parentElement.style.transform = 'scale(0)'; ">&times;</span>
                <table class="table-header">
                    <tr>
                        <th colspan="5" id="suactdh">Chi Tiết Đơn Hàng</th>
                    </tr>
                    <tr>
                        <!-- Theo độ rộng của table content -->
                        <th title="Sắp xếp" style="width: 20%" onclick="sortChiTietDonHangTable('stt')">Stt <i class="fa fa-sort"></i></th>
                        <th title="Sắp xếp" style="width: 20%" onclick="sortChiTietDonHangTable('masp')">Mã sản phẩm <i class="fa fa-sort"></i></th>
                        <th title="Sắp xếp" style="width: 20%" onclick="sortChiTietDonHangTable('tensp')">Tên sản phẩm <i class="fa fa-sort"></i></th>
                        <th title="Sắp xếp" style="width: 20%" onclick="sortChiTietDonHangTable('sluong')">Số lượng <i class="fa fa-sort"></i></th>
                        <th title="Sắp xếp" style="width: 20%" onclick="sortChiTietDonHangTable('dongia')">Đơn giá <i class="fa fa-sort"></i></th>
                    </tr>
                </table>
                <div class="table-content">
                </div>
            </div>

        </div> <!-- // don hang -->


        <!-- Khách hàng -->
        <div class="khachhang">
            <table class="table-header">
                <tr>
                    <!-- Theo độ rộng của table content -->
                    <th style="width: 4%" title="Sắp xếp"  onclick="sortKhachHangTable('mand')">Mã khách hàng <i class="fa fa-sort"></i></th>
                    <th style="width: 10%;" title="Sắp xếp"  onclick="sortKhachHangTable('taikhoan')">Tài khoản <i class="fa fa-sort"></i></th>
                    <th style="width: 15%" title="Sắp xếp"  onclick="sortKhachHangTable('hoten')">Họ tên <i class="fa fa-sort"></i></th>
                    <th style="width: 12%" title="Sắp xếp"  onclick="sortKhachHangTable('sdt')">Số điện thoại <i class="fa fa-sort"></i></th>
                    <th style="width: 20%" title="Sắp xếp"  onclick="sortKhachHangTable('email')">Thư điện tử <i class="fa fa-sort"></i></th>
                    <th style="width: 20%" title="Sắp xếp"  onclick="sortKhachHangTable('diachi')">Địa chỉ <i class="fa fa-sort"></i></th>
                    <th style="width: 6%" title="Sắp xếp"  onclick="sortKhachHangTable('sex')">Giới tính <i class="fa fa-sort"></i></th>
                    <th style="width: 11%" title="Sắp xếp"  onclick="sortKhachHangTable('date')">Ngày sinh <i class="fa fa-sort"></i></th>
                    <th style="width: 5%" title="Sắp xếp"  onclick="sortKhachHangTable('tt')">Trạng thái<i class="fa fa-sort"></i></th>
                    <th style="width: 10%">Hành động</th>
                </tr>
            </table>

            <div class="table-content">
            </div>

            <div class="table-footer">
                <select name="kieuTimKhachHang">
                    <option value="ten">Tìm theo họ tên</option>
                    <option value="email">Tìm theo thư điện tử</option>
                    <option value="taikhoan">Tìm theo tài khoản</option>
                </select>
                <input type="text" placeholder="Tìm kiếm..." onkeyup="timKiemNguoiDung(this)">
                <button onclick="openThemNguoiDung()"><i class="fa fa-plus-square"></i> Thêm người dùng</button>
            </div>
            <div id="khungNguoiDung" class="overlay">
                <span class="close" onclick="this.parentElement.style.transform = 'scale(0)'; " id="closekhungNguoiDung">&times;</span>
                <form method="post" action="" enctype="multipart/form-data" onsubmit="return suaNguoidung();">
                    <table class="overlayTable table-outline table-content table-header">
                        <tr>
                            <th colspan="2" id="titlekhungNguoiDung">Sửa Khách Hàng</th>
                        </tr>
                        <tr>
                            <td>Mã khách hàng:</td>
                            <td><input disabled="disabled" type="text" id="mandSua" name="mandSua"></td>
                        </tr>
                        <tr>
                            <td>Tài khoản:</td>
                            <td><input disabled="disabled" type="text" id="taikhoanSua" name="taikhoanSua"></td>
                        </tr>
                        <tr>
                            <td>Mật khẩu:</td>
                            <td><input type="password" id="passSua"></td>
                            <td><input type="password" id="passSuakodoi" style="display: none;" disabled></td>
                        </tr>
                        <tr>
                            <td>Họ tên:</td>
                            <td><input type="text" id="hotenSua"></td>
                        </tr>
                        <tr>
                            <td>Số điện thoại:</td>
                            <td>
                                <input type="text" id="sdtSua">
                            </td>
                        </tr>
                        <tr>
                            <td>Thư điện tử:</td>
                            <td>
                                <input type="text" id="mailSua">
                            </td>
                        </tr>
                        <tr>
                            <td>Địa chỉ:</td>
                            <td>
                                <input type="text" id="diachiSua">
                            </td>
                        </tr>
                        <tr>
                            <td>Giới tính:</td>
                            <td>
                                <select id="sexSua">
                                    <option value="Nam">Nam</option>
                                    <option value="Nữ">Nữ</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Ngày sinh:</td>
                            <td>
                                <select id="ngaySua"></select>
                                <select id="thangSua"></select>
                                <select id="namSua"></select>
                            </td>
                        </tr>
                        <tr>
                            <td>Trạng thái</td>
                            <td>
                                <select id="trangthaiKHSua">
                                    <option value="1">Hiện</option>
                                    <option value="0">Ẩn</option>
                                </select>
                            </td>
                        </tr>
                        
                        <tr>
                            <td colspan="2" class="table-footer"> <button name="submit" id="buttonkhungNguoiDung">SỬA</button> </td>
                        </tr>
                    </table>
                </form>
                <!-- <div style="display: none;" id="hinhanh"></div> -->
            </div>
        </div> <!-- // khach hang -->

        <!-- Thống kê -->
        <div class="thongke">
            <table class="table-header">
                <tr id="header_thong_ke">
                    <!-- <th style="width: 4%" title="Sắp xếp"  onclick="sortKhachHangTable('mand')">Mã khách hàng <i class="fa fa-sort"></i></th>
                    <th style="width: 10%;" title="Sắp xếp"  onclick="sortKhachHangTable('taikhoan')">Tài khoản <i class="fa fa-sort"></i></th>
                    <th style="width: 15%" title="Sắp xếp"  onclick="sortKhachHangTable('hoten')">Họ tên <i class="fa fa-sort"></i></th>
                    <th style="width: 12%" title="Sắp xếp"  onclick="sortKhachHangTable('sdt')">Số điện thoại <i class="fa fa-sort"></i></th>
                    <th style="width: 20%" title="Sắp xếp"  onclick="sortKhachHangTable('email')">Thư điện tử <i class="fa fa-sort"></i></th>
                    <th style="width: 20%" title="Sắp xếp"  onclick="sortKhachHangTable('diachi')">Địa chỉ <i class="fa fa-sort"></i></th>
                    <th style="width: 6%" title="Sắp xếp"  onclick="sortKhachHangTable('sex')">Giới tính <i class="fa fa-sort"></i></th>
                    <th style="width: 11%" title="Sắp xếp"  onclick="sortKhachHangTable('date')">Ngày sinh <i class="fa fa-sort"></i></th>
                    <th style="width: 5%" title="Sắp xếp"  onclick="sortKhachHangTable('tt')">Trạng thái<i class="fa fa-sort"></i></th>
                    <th style="width: 10%">Hành động</th> -->
                </tr>
            </table>

            <div class="table-content" id="thongke_sua_table">
            </div>

            <div class="table-footer">
                <select id="thongke_thang">
                    <option value="0">Tất cả</option>
                    <option value="email">Tìm theo thư điện tử</option>
                    <option value="taikhoan">Tìm theo tài khoản</option>
                </select>
                <select id="thongke_nam">
                    <option value="0">Tất cả</option>
                    <option value="email">Tìm theo thư điện tử</option>
                    <option value="taikhoan">Tìm theo tài khoản</option>
                </select>
                <select id="thongke_selection">
                    <option value="0">Sản phẩm bán chạy</option>
                    <option value="1">Loại sản phẩm bán chạy nhất</option>
                </select>

                <input type="button" value="Lọc" onclick="load_thong_ke()">
                <label style="margin-left: 20px; color: white;" id="label_thongke_doanhthu">Tổng doanh thu</label>
                <input type="text" name="" disabled id="thongke_doanhthu">
            </div>
            
            <div class="canvasContainer">
                <canvas id="myChart1"></canvas>
            </div>

            <div class="canvasContainer">
                <canvas id="myChart2"></canvas>
            </div>

            <div class="canvasContainer">
                <canvas id="myChart3"></canvas>
            </div>

            <div class="canvasContainer">
                <canvas id="myChart4"></canvas>
            </div>

        </div>

        <div class="user">
            <table class="table-header">
                <tr>
                    <!-- Theo độ rộng của table content -->
                    <th style="width: 4%">Mã tài khoản </th>
                    <th style="width: 10%;">Tài khoản </th>
                    <th style="width: 15%">Họ tên </th>
                    <th style="width: 12%">Số điện thoại </th>
                    <th style="width: 20%">Thư điện tử </th>
                    <th style="width: 20%">Địa chỉ </th>
                    <th style="width: 6%">Giới tính </th>
                    <th style="width: 11%">Ngày sinh </th>
                    <th style="width: 10%">Hành động</th>
                </tr>
            </table>

            <div class="table-content">
            </div>

            <div id="khungUSER" class="overlay">
                <span class="close" onclick="this.parentElement.style.transform = 'scale(0)'; " id="closekhungUSER">&times;</span>
                <form method="post" action="" enctype="multipart/form-data" onsubmit="return suaUser();">
                    <table class="overlayTable table-outline table-content table-header">
                        <tr>
                            <th colspan="2" id="titlekhungNguoiDung">Sửa Tài Khoản</th>
                        </tr>
                        <tr>
                            <td>Mã tài khoản:</td>
                            <td><input disabled="disabled" type="text" id="mandSuaUser" name="mandSuaUser"></td>
                        </tr>
                        <tr>
                            <td>Tài khoản:</td>
                            <td><input disabled="disabled" type="text" id="taikhoanSuaUser" name="taikhoanSuaUser"></td>
                        </tr>
                        <tr>
                            <td>Mật khẩu:</td>
                            <td><input type="password" id="passSuaUser"></td>
                            <td><input type="password" id="passSuakodoiUser" style="display: none;" disabled></td>
                        </tr>
                        <tr>
                            <td>Họ tên:</td>
                            <td><input type="text" id="hotenSuaUser"></td>
                        </tr>
                        <tr>
                            <td>Số điện thoại:</td>
                            <td>
                                <input type="text" id="sdtSuaUser">
                            </td>
                        </tr>
                        <tr>
                            <td>Thư điện tử:</td>
                            <td>
                                <input type="text" id="mailSuaUser">
                            </td>
                        </tr>
                        <tr>
                            <td>Địa chỉ:</td>
                            <td>
                                <input type="text" id="diachiSuaUser">
                            </td>
                        </tr>
                        <tr>
                            <td>Giới tính:</td>
                            <td>
                                <select id="sexSuaUser">
                                    <option value="Nam">Nam</option>
                                    <option value="Nữ">Nữ</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Ngày sinh:</td>
                            <td>
                                <select id="ngaySuaUser">
                                    <option value="0">Ngày</option>
                                    <option value="01">1</option>
                                    <option value="02">2</option>
                                    <option value="03">3</option>
                                    <option value="04">4</option>
                                    <option value="05">5</option>
                                    <option value="06">6</option>
                                    <option value="07">7</option>
                                    <option value="08">8</option>
                                    <option value="09">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                </select>
                                <select id="thangSuaUser">
                                    <option value="0">Tháng</option>
                                    <option value="01">1</option>
                                    <option value="02">2</option>
                                    <option value="03">3</option>
                                    <option value="04">4</option>
                                    <option value="05">5</option>
                                    <option value="06">6</option>
                                    <option value="07">7</option>
                                    <option value="08">8</option>
                                    <option value="09">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                                <select id="namSuaUser"></select>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" class="table-footer"> <button name="submit" id="buttonkhungUSER">SỬA</button> </td>
                        </tr>
                    </table>
                </form>
                <!-- <div style="display: none;" id="hinhanh"></div> -->
            </div>
        </div> <!-- // khach hang -->
    </div> <!-- // main -->


    <footer>

    </footer>
</body>

</html>