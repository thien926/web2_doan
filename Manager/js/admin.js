var TONGTIEN = 0;
var value_sort = true;

window.onload = function() {

    document.getElementById("btnDangXuat").onclick = function() {
        checkDangXuatadmin();
    }

    if(getadmin()){
        addEventChangeTab();
        addThongKe();
        openTab('Sản Phẩm');
        addUser();
        refreshTableSanPham();
        var sidebar = document.getElementsByClassName('sidebar')[0];
        var list_a = sidebar.getElementsByTagName('a');
        list_a[0].classList.add('active');
    }
    else{
        document.body.innerHTML = `<h1 style="color:red; with:100%; text-align:center; margin: 50px;"> Truy cập bị từ chối.. </h1>`;
    }

}

function checkDangXuatadmin(){
    Swal.fire({
        type: 'question',
        title: 'Xác nhận',
        text: 'Bạn có chắc muốn đăng xuất?',
        showCancelButton: true,
        confirmButtonText: 'Đồng ý',
        cancelButtonText: 'Hủy'

    }).then((result) => {
        if (result.value) {
            $.ajax({
                type: "POST",
                url: "php/xulyadmin.php",
                dataType: "text",
                timeout: 1500,
                data: {
                    request: 'dangXuat'
                },
                success: function(data) {
                    if(data == 'ok') {
                        Swal.fire({
                            type: "success",
                            title: "Đăng xuất thành công"
                        }).then((result) => {
                            window.location.href = "index.php";
                        });

                    } else {
                        Swal.fire({
                            type: "error",
                            title: "Chưa có ai đăng nhập"
                        })
                    }
                },
                error: function(e) {
                    Swal.fire({
                        type: "error",
                        title: "Có lỗi khi đăng xuất admin",
                        // html: e.responseText
                    })
                    console.log(e.responseText)
                }
            })
        }
    });
}

function getadmin(){
    var t = true;
    $.ajax({
        url : "php/xulyadmin.php",
        type : "post",
        timeout : 3000,
        dataType : "text",
        data: {
            request : "getadmin"
        },
        async:false,
        success : function(data){
            if(data == "ok"){
                t = true;
            }
            else{
                t = false;
            }
        },
        error  :function(e){
            t = false;
        }
    });
    return t;
}

function refreshTableSanPham() {
    $.ajax({
        type: "POST",
        url: "php/xulyadmin.php",
        dataType: "json",
        // timeout: 1500, // sau 1.5 giây mà không phản hồi thì dừng => hiện lỗi
        data: {
            request: "getallsp",
        },
        success: function(data, status, xhr) {
            list_products = data; // biến toàn cục lưu trữ mảng sản phẩm hiện có
            addTableProducts(data);
        },
        error: function(e) {
            Swal.fire({
                type: "error",
                title: "Lỗi lấy dữ liệu sản phẩm (admin.js > refreshTableSanPham)",
                html: e.responseText
            });
            console.log(e.responseText)
        }
    });
}

function addChart(id, chartOption) {
    var ctx = document.getElementById(id).getContext('2d');
    var chart = new Chart(ctx, chartOption);
}

function addThongKe() {
    // var dataChart = {
    //     type: 'bar',
    //     data: {
    //         labels: ["Apple", "Samsung", "Xiaomi", "Vivo", "Oppo", "Mobiistar"],
    //         datasets: [{
    //             label: 'Số lượng bán ra',
    //             data: [12, 19, 10, 5, 20, 5],
    //             backgroundColor: [
    //                 'rgba(255, 99, 132, 0.2)',
    //                 'rgba(54, 162, 235, 0.2)',
    //                 'rgba(255, 206, 86, 0.2)',
    //                 'rgba(75, 192, 192, 0.2)',
    //                 'rgba(153, 102, 255, 0.2)',
    //                 'rgba(255, 159, 64, 0.2)'
    //             ],
    //             borderColor: [
    //                 'rgba(255,99,132,1)',
    //                 'rgba(54, 162, 235, 1)',
    //                 'rgba(255, 206, 86, 1)',
    //                 'rgba(75, 192, 192, 1)',
    //                 'rgba(153, 102, 255, 1)',
    //                 'rgba(255, 159, 64, 1)'
    //             ],
    //             borderWidth: 2
    //         }]
    //     },
    //     options: {
    //         title: {
    //             fontColor: '#fff',
    //             fontSize: 25,
    //             display: true,
    //             text: 'Sản phẩm bán ra'
    //         }
    //     }
    // };

    // // Thêm thống kê
    // var barChart = copyObject(dataChart);
    // barChart.type = 'bar';
    // addChart('myChart1', barChart);

    // var doughnutChart = copyObject(dataChart);
    // doughnutChart.type = 'doughnut';
    // addChart('myChart2', doughnutChart);

    // var pieChart = copyObject(dataChart);
    // pieChart.type = 'pie';
    // addChart('myChart3', pieChart);

    // var lineChart = copyObject(dataChart);
    // lineChart.type = 'line';
    // addChart('myChart4', lineChart);
}

function addUser(){
    $.ajax({
        url : "php/xulyadmin.php",
        type : "post",
        dataType: "json",
        data : {
            request : "get_infor_admin"
        },
        success : function(data){
            var tc = document.getElementsByClassName('user')[0].getElementsByClassName('table-content')[0];
            var s = `<table class="table-outline hideImg">`;
            s += `<tr>
                <td style="width: 7%">` + data.mand + `</td>
                <td style="width: 11%">` + data.taikhoan + `</td>
                <td style="width: 19%">` + data.hoten + `</td>
                <td style="width: 11%">` + data.sdt + `</td>
                <td style="width: 0%">` + data.thudientu + `</td>
                <td style="width: 27%">` + data.diachi + `</td>
                <td style="width: 7%">` + data.gioitinh + `</td>
                <td style="width: 11%">` + data.ngaysinh + `</td>         
                <td style="width: 10%">
                    <div class="tooltip">
                        <i class="fa fa-wrench" onclick="openSuaUser()"></i>
                        <span class="tooltiptext">Sửa</span>
                    </div>
                    
                </td>
            </tr>`;
            s += `</table>`;
            tc.innerHTML = s;

        },
        error : function(e){
            Swal.fire({
                type : "error",
                title : "Lỗi lấy thông tin tài khoản",
                html : e.responseText
            });
        }
    });
}

function openSuaUser(){
    $.ajax({
        url : "php/xulyadmin.php",
        type : "post",
        dataType: "json",
        data : {
            request : "get_infor_admin"
        },
        success : function(data){
            $("#mandSuaUser").val(data.mand);
            $("#taikhoanSuaUser").val(data.taikhoan);
            $("#passSuaUser").val(data.matkhau);
            $("#passSuakodoiUser").val(data.matkhau);
            $("#hotenSuaUser").val(data.hoten);
            $("#sdtSuaUser").val(data.sdt);
            $("#mailSuaUser").val(data.thudientu);
            $("#diachiSuaUser").val(data.diachi);
            $("#sexSuaUser").val(data.gioitinh);
            var ngaysinh = data.ngaysinh.split("-");
            var namsinh = parseInt(ngaysinh[0]);
            var d = new Date();
            d = d.getFullYear();
            var s = '<option value="0" selected>Năm</option>';
            for(let i = d; i >= namsinh-120; --i){
                if(i == namsinh){
                    s += '<option value="'+ i +'" selected>'+ i +'</option>';
                }
                else{
                    s += '<option value="'+ i +'">'+ i +'</option>';
                }
            }
            $("#namSuaUser").html(s);
            $("#ngaySuaUser").val(ngaysinh[2]);
            $("#thangSuaUser").val(ngaysinh[1]);
            var khung = document.getElementById('khungUSER');
    
            khung.style.transform = 'scale(1)';

        },
        error : function(e){
            Swal.fire({
                type : "error",
                title : "Lỗi lấy thông tin tài khoản",
                html : e.responseText
            });
        }
    });
}

function layThongTinUserTuTable(){
    var namsinh = $("#namSuaUser").val();
    var thangsinh = $("#thangSuaUser").val();
    var ngaysinh = $("#ngaySuaUser").val();
    ngaysinh = namsinh + "-" + thangsinh + "-" + ngaysinh;
    return {
        "mand": $("#mandSuaUser").val().trim(),
        "taikhoan": $("#taikhoanSuaUser").val().trim(),
        "matkhau": $("#passSuaUser").val().trim(),
        "matkhaucu": $("#passSuakodoiUser").val().trim(),
        "hoten": $("#hotenSuaUser").val().trim(),
        "sdt": $("#sdtSuaUser").val().trim(),
        "thudientu": $("#mailSuaUser").val().trim(),
        "diachi": $("#diachiSuaUser").val().trim(),
        "gioitinh": $("#sexSuaUser").val().trim(),
        "ngaysinh": ngaysinh,
        "maquyen": 0,
        "trangthai": 1
    };
}

function suaUser(){
    var user = layThongTinUserTuTable();
    var format = "";

    if(user.matkhau == "" || user.hoten == "" || user.sdt == "" || user.thudientu == ""
        || user.diachi == "" || user.taikhoan == ""){
        alert("Các trường dữ liệu còn thiếu và không được có khoảng trắng giữa 2 đầu chuỗi). Thao tác thất bại!");
        return false; 
    }

    if(user.taikhoan.length < 5){
        alert("Tài khoản phải bằng hoặc hơn 5 kí tự");
        return false;
    }
    else{
        format = /\W/ig;
        if(format.test(user.taikhoan)){
            alert("Tài khoản bao gồm các kí tự chữ, số và dấu gạch dưới!");
            return false;
        }
    }

    if(user.matkhau.length < 5){
        alert("Mật khẩu phải bằng hoặc hơn 5 kí tự!");
        return false;
    }
    else{
        format = /\W/ig;
        if(format.test(user.matkhau)){
            alert("Mật khẩu bao gồm các kí tự chữ, số và dấu gạch dưới!");
            return false;
        }
    }

    if(user.ngaysinh == "0-0-0"){
        alert("Ngày sinh chưa được chọn!");
        return false;
    }
    else{
        var d = new Date(user.ngaysinh);
        var ngaysinh = user.ngaysinh.split("-");
        if(parseInt(ngaysinh[0]) != d.getFullYear() || parseInt(ngaysinh[1]) != d.getMonth()+1 || parseInt(ngaysinh[2]) != d.getDate()){
            alert("Ngày sinh chọn không đúng. Hãy kiểm tra lại!");
            return false;
        }
    }

    format = /\D/g;;
    if(format.test(user.sdt)){
        alert("Số điện thoại phải là chữ số!");
        return false;
    }
    else if(user.sdt.length < 10 || user.sdt.length > 11){
        alert("Số điện thoại không phù hợp!");
        return false;
    }

    if(user.thudientu < 5){
        alert("Thư điện tử phải lớn hơn hoặc bằng 5 kí tự!");
        return false;
    }
    else{
        format = /[A-Z0-9._%+-]{6,30}@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
        if(!format.test(user.thudientu)){
            alert("Thư điện tử không hợp lệ!");
            return false;
        }
    }
    var t = true;
    $.ajax({
        url  :"php/xulyadmin.php",
        type : "post",
        dataType : "json",
        data : {
            request : "sua_kh",
            data_update : user 
        },
        async:false,
        success : function(data){
            Swal.fire({
                type : "success",
                title : "Sửa thàng công"
            }).then((result) =>{
                if(result.value){
                    $("#closekhungUSER").trigger('click');
                    addUser();
                }
            });
        },
        error : function(e){
            Swal.fire({
                type : "error",
                title : "Lỗi khi sửa thông tin khách hàng > admin.js - 1321",
                html : e.responseText
            });
            alert(e.responseText);
        }
    }); 
    return false;
}   

function ajaxLoaiSanPham() {
    $.ajax({
        type: "POST",
        url: "php/xulyadmin.php",
        dataType: "json",
        // timeout: 1500, // sau 1.5 giây mà không phản hồi thì dừng => hiện lỗi
        data: {
            request: "getall_lsp"
        },
        success: function(data, status, xhr) {
            showLoaiSanPham(data);
        },
        error: function(e) {

        }
    });
}

function showLoaiSanPham(data) {
    var s="";
    for (var i = 0; i < data.length; i++) {
        var p = data[i];
        if(p.maloai == 1) continue;
        s +=`<option value="` + p.maloai + `">` + p.tenloai + `</option>`;
    }
    document.getElementsByName("chonCompany")[0].innerHTML = s;
}

function ajaxKhuyenMai() {
    $.ajax({
        type: "POST",
        url: "php/xulyadmin.php",
        dataType: "json",
        // timeout: 1500, // sau 1.5 giây mà không phản hồi thì dừng => hiện lỗi
        data: {
            request: "getall_makm"
        },
        success: function(data, status, xhr) {
            var s = "";
            var gtkm = "";
            var ptkm = "";
            for(var km of data){
                s += '<option value="'+km.makm+'">'+ km.tenkm +'</option>';
                if(gtkm == ""){
                    gtkm = km.giatrikm;
                }
                if(ptkm == ""){
                    ptkm = km.phantramkm;
                }
            }
            document.getElementsByName("chonKhuyenMai")[0].innerHTML = s;
            $("#giatrikm").val(gtkm);
            $("#phantramkm").val(ptkm);
        },
        error: function(e) {

        }
    });
}

function showKhuyenMai(id) {
    var khung = document.getElementById(id);
    var tr = khung.getElementsByTagName('tr');
    var km = tr[9].getElementsByTagName('td')[1].getElementsByTagName('select')[0].value;
    var list = "";
    $.ajax({
        type: "POST",
        url: "php/xulyadmin.php",
        dataType: "json",
        // timeout: 1500, // sau 1.5 giây mà không phản hồi thì dừng => hiện lỗi
        data: {
            request: "getall_makm"
        },
        async:false,
        success: function(data, status, xhr) {
            list = data;
        },
        error: function(e) {

        }
    });
    if(list == "") return;

    for(var c of list){
        if(c.makm == km){
            
            tr[10].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value = c.giatrikm;
            tr[11].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value = c.phantramkm;
            break;
        }
    }

}

// ======================= Các Tab =========================
function addEventChangeTab() {
    var sidebar = document.getElementsByClassName('sidebar')[0];
    var list_a = sidebar.getElementsByTagName('a');
    for (var a of list_a) {
        if (!a.onclick) {
            a.addEventListener('click', function() {
                turnOff_Active();
                this.classList.add('active');
                var tab = this.childNodes[1].data.trim()
                openTab(tab);
            })
        }
    }
}

function turnOff_Active() {
    var sidebar = document.getElementsByClassName('sidebar')[0];
    var list_a = sidebar.getElementsByTagName('a');
    for (var a of list_a) {
        a.classList.remove('active');
    }
}

function openTab(nameTab) {
    // ẩn hết
    var main = document.getElementsByClassName('main')[0].children;
    for (var e of main) {
        e.style.display = 'none';
    }

    // mở tab
    switch (nameTab) {
        case 'Home':
            document.getElementsByClassName('home')[0].style.display = 'block';
            break;
        case 'Sản Phẩm':
            document.getElementsByClassName('sanpham')[0].style.display = 'block';
            break;
        case 'Loại Sản Phẩm':
            document.getElementsByClassName('loaisanpham')[0].style.display = 'block';
            break;
        case 'Đơn Hàng':
            document.getElementsByClassName('donhang')[0].style.display = 'block';
            break;
        case 'Khách Hàng':
            document.getElementsByClassName('khachhang')[0].style.display = 'block';
            break;
        case 'Thống Kê':
            load_thang_thong_ke();
            load_nam_thong_ke();
            document.getElementsByClassName('thongke')[0].style.display = 'block';
            break;
        case 'Thông tin cá nhân':
            document.getElementsByClassName('user')[0].style.display = 'block';
            break;
    }
}

function load_thang_thong_ke(){
    var s = '<option value="0">Tất cả các tháng</option>';
    for(let i = 1; i < 13; ++i){
        s += '<option value="'+ i +'">Tháng '+ i +'</option>';
    }
    $("#thongke_thang").html(s);
}

function load_nam_thong_ke(){
    $.ajax({
        url : "php/xulyadmin.php",
        type : "post",
        dataType : "json",
        data: {
            request: "load_nam_for_thong_ke"
        },
        success : function(data){
            var s = '<option value="0">Năm</option>';
            for(let i = 0; i < data.length; ++i){
                if(parseInt(data[i]['nam']) == 0) continue;
                s += '<option value="'+ data[i]['nam'] +'">Năm '+ data[i]['nam'] +'</option>';
            }
            $("#thongke_nam").html(s);
        },
        error : function(e){
            Swal.fire({
                type : "error",
                title : "Lỗi load năm trong hóa đơn",
                html : e.responseText
            });
        }
    });
}

// ========================== Sản Phẩm ========================
// Vẽ bảng danh sách sản phẩm
function addTableProducts(list_products) {
    var tc = document.getElementsByClassName('sanpham')[0].getElementsByClassName('table-content')[0];
    var s = `<table class="table-outline hideImg">`;

    for (var i = 0; i < list_products.length; i++) {
        var p = list_products[i];
        s += `<tr>
            <td style="width: 5%">` + p.masp + `</td>
            <td style="width: 40%">
                <a title="Xem chi tiết" target="_blank" href="../product-details.php?masp=` + p.masp + `">` + p.tensp + `</a>
                <img src="../img/products/` + p.img + `"></img>
            </td>
            <td style="width: 10%">` + p.soluong + `</td>
            <td style="width: 15%">` + ham_xu_ly_tien_te(p.dongia) + `</td>
            <td style="width: 15%">` + /*promoToStringValue(*/ (p.KM.tenkm) /*)*/ + `</td>
            <td style="width: 10%">` + (p.trangthai==1?"Hiện":"Ẩn") + `</td>
            <td style="width: 10%">
                <div class="tooltip">
                    <i class="fa fa-wrench" onclick="addKhungSuaSanPham('` + p.masp + `')"></i>
                    <span class="tooltiptext">Sửa</span>
                </div>
                <div class="tooltip">
                    <i class="fa fa-trash" onclick="xoaSanPham('` + p.trangthai + `', '` + p.masp + `', '` + p.tensp + `')"></i>
                    <span class="tooltiptext">Xóa</span>
                </div>
            </td>
        </tr>`;
    }

    s += `</table>`;

    tc.innerHTML = s;
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

// Tìm kiếm
function timKiemSanPham(inp) {
    var kieuTim = document.getElementsByName('kieuTimSanPham')[0].value;
    var text = inp.value;

    // Lọc
    var vitriKieuTim = {
        'ma': 0,
        'ten': 1
    }; // mảng lưu vị trí cột

    var listTr_table = document.getElementsByClassName('sanpham')[0].getElementsByClassName('table-content')[0].getElementsByTagName('tr');
    for (var tr of listTr_table) {
        var td = tr.getElementsByTagName('td')[vitriKieuTim[kieuTim]].innerHTML.toLowerCase();

        if (td.indexOf(text.toLowerCase()) < 0) {
            tr.style.display = 'none';
        } else {
            tr.style.display = '';
        }
    }
}

// Thêm
function layThongTinSanPhamTuTable(id) {
    var khung = document.getElementById(id);
    var tr = khung.getElementsByTagName('tr');

    var masp = tr[1].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value;
    var tensp = tr[2].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value;
    var lsp = tr[3].getElementsByTagName('td')[1].getElementsByTagName('select')[0].value;
    var tacgia = tr[4].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value;
    var nxb = tr[5].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value;
    var img =  document.getElementById("hinhanh").value;
    if(img == ""){
        img = document.getElementById("hinhanh1").value;
    }
    var soluong = tr[7].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value;
    var price = tr[8].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value;
    var km = tr[9].getElementsByTagName('td')[1].getElementsByTagName('select')[0].value;
    var mota = tr[12].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value;
    var tt = tr[13].getElementsByTagName('td')[1].getElementsByTagName('select')[0].value;
    

    return {
        "masp": masp,
        "tensp": tensp,
        "lsp": lsp,
        "tacgia": tacgia,
        "nxb": nxb,
        "img": img,
        "soluong": soluong,
        "price": price,
        "makm": km,
        "trangthai": tt,
        "mota" : mota,
        "soluongdaban" : 0
    };
}

function themSanPham() {
    var newSp = layThongTinSanPhamTuTable('khungThemSanPham');

    //kt tên sp
    // var pattCheckTenSP = /([a-z A-Z0-9&():.'_-]{2,})$/;
    // if (pattCheckTenSP.test(newSp.tensp) == false)
    // {
    //     alert ("Tên sản phẩm không hợp lệ");
    //     return false;
    // }
    if(newSp.tensp.trim() == ""){
        alert ("Tên sản phẩm không hợp lệ");
         return false;
    }

    if(newSp.lsp == 1){
        alert("Sách bán chạy không là 1 loại sản phẩm cụ thể. Hãy chọn loại sản phẩm khác");
        return false;
    }

    if(newSp.tacgia.trim() == ""){
        alert ("Tác giả không hợp lệ");
        return false;
    }

    if(newSp.nxb.trim() == ""){
        alert ("Nhà xuất bản không hợp lệ");
        return false;
    }

    var arranh = newSp.img.split(".");
    
    if(arranh[arranh.length-1].lastIndexOf("jpg") == -1 && arranh[arranh.length-1].lastIndexOf("png") == -1){
        alert("File ảnh phải là file đuôi .jpg hoặc .png");
        return false;
    }   

    //kt hình
    /*var pattCheckHinh= /^([0-9]{1,})[.](png|jpeg|jpg)$/;
    if (pattCheckHinh.test(newSp.img) == false)
    {
        alert ("Ảnh không hợp lệ");
        return false;
    }*/

    //kt giá tiền
    var pattCheckGia = /^([0-9]){1,}(000)$/;
    if (pattCheckGia.test(newSp.price) == false)
    {
        alert ("Giá tiền sản phẩm không hợp lệ");
        return false;
    }

    

    //kt số lượng
    var pattCheckSL = /[0-9]{1,}$/;
    if (pattCheckSL.test(newSp.soluong) == false)
    {
        alert ("Số lượng sản phẩm không hợp lệ");
        return false;
    }

    $.ajax({
        type: "POST",
        url: "php/xulyadmin.php",
        dataType: "json",
        // timeout: 1500, // sau 1.5 giây mà không phản hồi thì dừng => hiện lỗi
        data: {
            request: "add_sp",
            dataAdd: newSp
        },
        success: function(data, status, xhr) {
            alert("Thêm sản phẩm thành công!");
            resetForm();
            $("#closekhungThemSanPham").trigger('click');
            refreshTableSanPham();
        },
        error: function(e) {
            Swal.fire({
                type: "error",
                title: "Lỗi thêm sản phẩm",
                html: e.responseText
            });
        }
    });

    return true;

    // alert('Thêm sản phẩm "' + newSp.tensp + '" thành công.');
    // refreshTableSanPham();

}
function resetForm() {
    var khung = document.getElementById('khungThemSanPham');
    var tr = khung.getElementsByTagName('tr');

    tr[2].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value = "";
    tr[4].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value = "";
    tr[5].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value = "";
    tr[6].getElementsByTagName('td')[1].getElementsByTagName('img')[0].src = "";
    tr[7].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value = "";
    tr[8].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value = "0";

    tr[10].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value ="";
    tr[11].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value ="";
}

function autoMaSanPham(company) {
    // hàm tự tạo mã cho sản phẩm mới
    // var autoMaSP = list_products[list_products.length-1].masp;
    // document.getElementById('maspThem').value = parseInt(autoMaSP)+1;
    $.ajax({
        url : "php/xulyadmin.php",
        type : "post",
        dataType : "json",
        data : {
            request : "max_sp"
        },
        success : function(data){
            document.getElementById('maspThem').value = parseInt(data.maxsp)+1;
        },
        error : function(e){

        }
    });
}

// Xóa
function xoaSanPham(trangthai, masp, tensp) {
    if (trangthai == 1)
    {
        // alert ("Sản phẩm còn đang bán");
        Swal.fire({
            type: 'warning',
            title: 'Bạn có muốn ẨN ' + tensp + ' không!',
            showCancelButton: true
        }).then((result) => {
            if(result.value) {
                $.ajax({
                    type: "POST",
                    url: "php/xulyadmin.php",
                    dataType: "json",
                    // timeout: 1500, // sau 1.5 giây mà không phản hồi thì dừng => hiện lỗi
                    data: {
                        request: "hide_sp",
                        id: masp,
                        trangthai: 0
                    },
                    success: function(data, status, xhr) {
                        Swal.fire({
                            type: 'success',
                            title: 'Ẩn thành công'
                        })
                        refreshTableSanPham();
                    },
                    error: function(e) {
                        Swal.fire({
                            type: "error",
                            title: "Lỗi xóa",
                            html: e.responseText
                        });
                    }
                });
            }
        });
    }
    else
    {   
        Swal.fire({
            type: 'warning',
            title: 'Bạn có muốn XÓA ' + tensp + ' không!',
            showCancelButton: true
        }).then((result) => {
            if(result.value) {
                $.ajax({
                    type: "POST",
                    url: "php/xulyadmin.php",
                    dataType: "text",
                    // timeout: 1500, // sau 1.5 giây mà không phản hồi thì dừng => hiện lỗi
                    data: {
                        request: "delete_sp",
                        masp : masp
                    },
                    success: function(data, status, xhr) {
                        Swal.fire({
                            type: 'success',
                            title: 'XÓA thành công'
                        })
                        refreshTableSanPham();
                    },
                    error: function(e) {
                        Swal.fire({
                            type: "error",
                            title: "Lỗi xóa",
                            html: e.responseText
                        });
                    }
                });
            }
        });
        
    }
}

// Sửa
function suaSanPham(masp) {
    var spsua = layThongTinSanPhamTuTable('khungSuaSanPham');
    // alert(Sp.img + " " + Sp.tensp + " ");
    console.log(spsua);

    if(spsua.tensp.trim() == ""){
        alert ("Tên sản phẩm không hợp lệ");
         return false;
    }

    if(spsua.lsp == 1){
        alert("Sách bán chạy không là 1 loại sản phẩm cụ thể. Hãy chọn loại sản phẩm khác");
        return false;
    }

    if(spsua.tacgia.trim() == ""){
        alert ("Tác giả không hợp lệ");
        return false;
    }

    if(spsua.nxb.trim() == ""){
        alert ("Nhà xuất bản không hợp lệ");
        return false;
    }

    //kt giá tiền
    var pattCheckGia = /^([0-9]){1,}(000)$/;
    if (pattCheckGia.test(spsua.price) == false)
    {
        alert ("Giá tiền sản phẩm không hợp lệ");
        return false;
    }

    var arranh = spsua.img.split(".");
    
    if(arranh[arranh.length-1].lastIndexOf("jpg") == -1 && arranh[arranh.length-1].lastIndexOf("png") == -1){
        alert("File ảnh phải là file đuôi .jpg hoặc .png");
        return false;
    } 

    //kt số lượng
    var pattCheckSL = /[0-9]{1,}$/;
    if (pattCheckSL.test(spsua.soluong) == false)
    {
        alert ("Số lượng sản phẩm không hợp lệ");
        return false;
    }

    $.ajax({
        type: "POST",
        url: "php/xulyadmin.php",
        dataType: "json",
        // timeout: 1500, // sau 1.5 giây mà không phản hồi thì dừng => hiện lỗi
        data: {
            request: "update_sp",
            data_update: spsua
        },
        success: function(data, status, xhr) {
            alert("Sửa sản phẩm thành công!");
            resetForm();
            $("#closekhungSuaSanPham").trigger('click');
            refreshTableSanPham();
        },
        error: function(e) {
            Swal.fire({
                type: "error",
                title: "Lỗi sửa sản phẩm",
                html: e.responseText
            });
        }
    });

    return true;
}

function addKhungSuaSanPham(masp) {

    var author;
    var nxb;
    var lsp;
    var km;
    var gtkm = 0;
    var ptkm = 0;
    $.ajax({
        url : "php/xulyadmin.php",
        type : "post",
        timeout : 3000,
        dataType: "json",
        data : {
            request : "load_author"
        },
        async:false,
        success : function(data){
            author = data;
        },
        error: function(e){
            Swal.fire({
                type : "error",
                title : "Lỗi load tác giả"
            });
        }
    });

    $.ajax({
        url : "php/xulyadmin.php",
        type : "post",
        timeout : 3000,
        dataType: "json",
        data : {
            request : "load_nxb"
        },
        async:false,
        success : function(data){
            nxb = data;
        },
        error: function(e){
            Swal.fire({
                type : "error",
                title : "Lỗi load nhà xuất bản"
            });
        }
    });

    $.ajax({
        url : "php/xulyadmin.php",
        type : "post",
        timeout : 3000,
        dataType: "json",
        data : {
            request : "getall_lsp"
        },
        async:false,
        success : function(data){
            lsp = data;
        },
        error: function(e){
            Swal.fire({
                type : "error",
                title : "Lỗi load loại sản phẩm",
                html : e.responseText
            });
        }
    });

    $.ajax({
        url : "php/xulyadmin.php",
        type : "post",
        timeout : 3000,
        dataType: "json",
        data : {
            request : "getall_makm"
        },
        async:false,
        success : function(data){
            km = data;
        },
        error: function(e){
            Swal.fire({
                type : "error",
                title : "Lỗi load khuyến mãi",
                html : e.responseText
            });
        }
    });

    var sp;
    for (var p of list_products) {
        if (p.masp == masp) {
            sp = p;
            break;
        }
    }

    $("#formsua").attr("onsubmit", "return suaSanPham('"+ sp.masp +"')");
    $("#tensp1").val(sp.tensp);
    $("#tensp2").html(sp.tensp);
    $("#maspSua").val(sp.masp);
    
    var s = "";
    for (var c of lsp) {
        if(c.maloai == 1) continue;
        if (c.maloai == sp.maloai)
            s += (`<option value="` + c.maloai + `" selected="selected">` + c.tenloai + `</option>`);
        else s += (`<option value="` + c.maloai + `">` + c.tenloai + `</option>`);
    }
    $("#chonCompany").html(s);
    s="";
    for (var c of author) {
        if (c.tacgia == sp.tacgia){
            s += `<input type="text" value="`+ c.tacgia +`"/>`;
            break;
        }
    }
    $("#tacgia").html(s);
    s="";
    for (var c of nxb) {
        if (c.nxb == sp.nxb){
            s += `<input type="text" value="`+ c.nxb +`"/>`;
            break;
        }
    }
    $("#nxb").html(s);
    $("#soluong").val(sp.soluong);
    $("#giatien").val(sp.dongia);
    s="";
    for (var c of km) {
        if (c.makm == sp.makm)
        {
            s += (`<option value="` + c.makm + `" selected="selected">` + c.tenkm + `</option>`);
            gtkm = c.giatrikm;
            ptkm = c.phantramkm;
        }
        else s += (`<option value="` + c.makm + `">` + c.tenkm + `</option>`);
    }
    $("#chonKhuyenMai").html(s);
    $("#giatrikm1").val(gtkm);
    $("#ptkm").val(ptkm);
    $("#mota").val(sp.mota);
    $("#ttsua").val(sp.trangthai);
    // document.getElementById("inputimg1").value = sp.img;
    document.getElementById("hinhanh1").value = sp.img;

    var khung = document.getElementById('khungSuaSanPham');
    
    khung.style.transform = 'scale(1)';
}

// Cập nhật ảnh sản phẩm
function capNhatAnhSanPham(files, id, anh) {
    if (files.length) url = window.URL.createObjectURL(files[0]);
    document.getElementById(id).src = url;
    document.getElementById('hinhanh').value = $("#inputimg").val().split('\\').pop();
    document.getElementById('hinhanh1').value = $("#inputimg1").val().split('\\').pop();
}

// Sắp Xếp sản phẩm
function sortProductsTable(loai) {
    value_sort = !value_sort;
    var sort = "";
    if(value_sort){
        sort = "ASC";
    }
    else{
        sort = "DESC";
    }
    load_san_pham_khi_sort(sort, loai);
}

function load_san_pham_khi_sort(sort, loai){
    $.ajax({
        type: "POST",
        url: "php/xulyadmin.php",
        dataType: "json",
        // timeout: 1500, // sau 1.5 giây mà không phản hồi thì dừng => hiện lỗi
        data: {
            request: "getallsp_sort",
            sort : sort,
            loai : loai
        },
        success: function(data, status, xhr) {
            list_products = data; // biến toàn cục lưu trữ mảng sản phẩm hiện có
            addTableProducts_sort(data);
        },
        error: function(e) {
            Swal.fire({
                type: "error",
                title: "Lỗi lấy dữ liệu sản phẩm (admin.js > refreshTableSanPham)",
                html: e.responseText
            });
            console.log(e.responseText)
        }
    });
}

function addTableProducts_sort(list_products) {
    var tc = document.getElementsByClassName('sanpham')[0].getElementsByClassName('table-content')[0];
    var s = `<table class="table-outline hideImg">`;

    for (var i = 0; i < list_products.length; i++) {
        var p = list_products[i];
        s += `<tr>
            <td style="width: 5%">` + p.masp + `</td>
            <td style="width: 40%">
                <a title="Xem chi tiết" target="_blank" href="../product-details.php?masp=` + p.masp + `">` + p.tensp + `</a>
                <img src="../img/products/` + p.img + `"></img>
            </td>
            <td style="width: 10%">` + p.soluong + `</td>
            <td style="width: 15%">` + ham_xu_ly_tien_te(p.dongia) + `</td>
            <td style="width: 15%">` + /*promoToStringValue(*/ (p.tenkm) /*)*/ + `</td>
            <td style="width: 10%">` + (p.trangthai==1?"Hiện":"Ẩn") + `</td>
            <td style="width: 10%">
                <div class="tooltip">
                    <i class="fa fa-wrench" onclick="addKhungSuaSanPham('` + p.masp + `')"></i>
                    <span class="tooltiptext">Sửa</span>
                </div>
                <div class="tooltip">
                    <i class="fa fa-trash" onclick="xoaSanPham('` + p.trangthai + `', '` + p.masp + `', '` + p.tensp + `')"></i>
                    <span class="tooltiptext">Xóa</span>
                </div>
            </td>
        </tr>`;
    }

    s += `</table>`;

    tc.innerHTML = s;
}

// Lấy giá trị của loại(cột) dữ liệu nào đó trong bảng
function getValueOfTypeInTable_SanPham(tr, loai) {
    var td = tr.getElementsByTagName('td');
    switch (loai) {
        case 'stt':
            return Number(td[0].innerHTML);
        case 'masp':
            return Number(td[1].innerHTML);
        case 'ten':
            return td[2].innerHTML.toLowerCase();
        case 'gia':
            return xoa_dau_cham(td[3].innerHTML);
        case 'khuyenmai':
            return td[4].innerHTML.toLowerCase();
    }
    return false;
}

// ========================= Loai San Pham =====================

function refreshTableLoaiSanPham(){
    $.ajax({
        type: "POST",
        url: "php/xulyadmin.php",
        dataType: "json",
        // timeout: 1500, // sau 1.5 giây mà không phản hồi thì dừng => hiện lỗi
        data: {
            request: "getall_lsp",
        },
        success: function(data, status, xhr) {
            addTableLoaiSanPham(data);
            console.log(data);
        },
        error: function(e) {
            Swal.fire({
                type: "error",
                title: "Lỗi lấy dữ liệu khách Hàng (admin.js > refreshTableKhachHang)",
                html: e.responseText
            });
        }
    });
}

function addTableLoaiSanPham(data){
    var tc = document.getElementsByClassName('loaisanpham')[0].getElementsByClassName('table-content')[0];
    var s = `<table class="table-outline hideImg">`;
    for (var i = 0; i < data.length; i++) {
        var d = data[i];
        s += `<tr>
            <td style="width: 10%">` + d.maloai + `</td>
            <td style="width: 20%">` + d.tenloai + `</td>
            <td style="width: 60%">` + d.mota + `</td>
            <td style="width: 10%">`;
            if(d.maloai != 1){
                s += `<div class="tooltip">
                    <i class="fa fa-wrench" onclick="addKhungSuaLoaiSanPham('` + d.maloai + `')"></i>
                    <span class="tooltiptext">Sửa</span>
                </div>
                <div class="tooltip">
                    <i class="fa fa-trash" onclick="xoaLoaiSanPham('` + d.maloai + `')"></i>
                    <span class="tooltiptext">Xóa</span>
                </div>`;
            }
                
            s+=`</td>
        </tr>`;
        // TONGTIEN += stringToNum(d.tongtien);
    }

    s += `</table>`;
    tc.innerHTML = s;
}

function addKhungSuaLoaiSanPham(maloai){
    $.ajax({
        url : "php/xulyadmin.php",
        type : "post",
        dataType : "json",
        data :{
            request : "getrow_lsp",
            maloai : maloai
        },
        success : function(data){
            if(data != null){
                $("#maloaiSua").val(data.maloai);
                $("#tenloaiSua").val(data.tenloai);
                $("#motaSua").val(data.mota);
                $("#form_khungLoaiSanPham").attr("onsubmit", "return suaLoaiSanPham('"+ data.maloai +"')");
                var khung = document.getElementById('khungLoaiSanPham');
    
                khung.style.transform = 'scale(1)';
            }
        },
        error : function(e){
            Swal.fire({
                type : "error",
                title : "Lỗi load khung sửa loại sản phẩm",
                html : e.responseText
            });
        }
    }); 
}

function layThongTinLoaiSanPhamTuTable(id){
    var khung = document.getElementById(id);
    var tr = khung.getElementsByTagName('tr');

    var maloai = tr[1].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value;
    var tenloai = tr[2].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value;
    var mota = tr[3].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value;

    return {
        "maloai" : maloai.trim(),
        "tenloai" : tenloai.trim(),
        "mota" : mota.trim()
    };
}

function resetForm_SuaLSP(){
    var khung = document.getElementById('khungLoaiSanPham');
    var tr = khung.getElementsByTagName('tr');
    tr[1].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value = "";
    tr[2].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value = "";
    tr[3].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value = "";
}

function suaLoaiSanPham(maloai){
    var lspsua = layThongTinLoaiSanPhamTuTable('khungLoaiSanPham');
    if(lspsua.tenloai == ""){
        alert ("Tên loại sản phẩm không hợp lệ");
         return false;
    }

    if(lspsua.mota == ""){
        alert("Mô tả không hợp lệ");
        return false;
    }

    $.ajax({
        type: "POST",
        url: "php/xulyadmin.php",
        dataType: "json",
        // timeout: 1500, // sau 1.5 giây mà không phản hồi thì dừng => hiện lỗi
        data: {
            request: "update_lsp",
            data_update: lspsua
        },
        success: function(data, status, xhr) {
            Swal.fire({
                type: 'success',
                title: 'Sửa loại sản phẩm thành công'
            });
            resetForm_SuaLSP();
            $("#closekhungLoaiSanPham").trigger('click');
            refreshTableLoaiSanPham();
        },
        error: function(e) {
            Swal.fire({
                type: "error",
                title: "Lỗi sửa sản phẩm",
                html: e.responseText
            });
        }
    });

    return false;
}

function themLoaiSanPham(){
    var lspsua = layThongTinLoaiSanPhamTuTable('khungLoaiSanPham');
    if(lspsua.tenloai == ""){
        alert ("Tên loại sản phẩm không hợp lệ");
         return false;
    }

    if(lspsua.mota == ""){
        alert("Mô tả không hợp lệ");
        return false;
    }

    $.ajax({
        type: "POST",
        url: "php/xulyadmin.php",
        dataType: "text",
        // timeout: 1500, // sau 1.5 giây mà không phản hồi thì dừng => hiện lỗi
        data: {
            request: "them_lsp",
            data_update: lspsua
        },
        success: function(data, status, xhr) {
            if(data == "ok"){
                Swal.fire({
                    type: 'success',
                    title: 'Thêm loại sản phẩm thành công'
                });
                resetForm_SuaLSP();
                $("#closekhungLoaiSanPham").trigger('click');
                refreshTableLoaiSanPham();
            }
        },
        error: function(e) {
            Swal.fire({
                type: "error",
                title: "Lỗi sửa sản phẩm",
                html: e.responseText
            });
        }
    });

    return false;
}

function xoaLoaiSanPham(maloai){
    Swal.fire({
        type: 'warning',
        title: 'Bạn có muốn XÓA loại sản phẩm có mã loại là ' + maloai + ' không!',
        showCancelButton: true
    }).then((result) => {
        if(result.value) {
            $.ajax({
                type: "POST",
                url: "php/xulyadmin.php",
                dataType: "text",
                // timeout: 1500, // sau 1.5 giây mà không phản hồi thì dừng => hiện lỗi
                data: {
                    request: "delete_lsp",
                    maloai : maloai
                },
                success: function(data, status, xhr) {
                    Swal.fire({
                        type: 'success',
                        title: 'XÓA thành công'
                    })
                    refreshTableLoaiSanPham();
                },
                error: function(e) {
                    Swal.fire({
                        type: "error",
                        title: "Lỗi xóa",
                        html: e.responseText
                    });
                }
            });
        }
    });
}

function openThemLoaiSanPham(){
    $.ajax({
        url : "php/xulyadmin.php",
        type : "post",
        dataType : "json",
        data : {
            request : "max_lsp"
        },
        async:false,
        success : function(data){
            $("#maloaiSua").val(parseInt(data.maxlsp) + 1);
            $("#titlekhungLoaiSanPham").html("Thêm Loại Sản Phẩm");
            $("#buttonkhungLoaiSanPham").html("THÊM");
            $("#form_khungLoaiSanPham").attr("onsubmit", "return themLoaiSanPham()");
            var khung = document.getElementById('khungLoaiSanPham');
            khung.style.transform = 'scale(1)';
        },
        error : function(e){
            Swal.fire({
                type : "error",
                title : "Lỗi lấy thông tin max loại sản phẩm",
                html : e.responseText
            }); 
        }
    });
}

function sortLoaiSanPhamTable(loai){
    value_sort = !value_sort;
    var sort = "";
    if(value_sort){
        sort = "ASC";
    }
    else{
        sort = "DESC";
    }
    load_loai_san_pham_khi_sort(sort, loai);
}

function load_loai_san_pham_khi_sort(sort, loai){
    $.ajax({
        type: "POST",
        url: "php/xulyadmin.php",
        dataType: "json",
        // timeout: 1500, // sau 1.5 giây mà không phản hồi thì dừng => hiện lỗi
        data: {
            request: "getall_lsp_sort",
            sort : sort,
            loai : loai
        },
        success: function(data, status, xhr) {
            addTableLoaiSanPham(data);
        },
        error: function(e) {
            Swal.fire({
                type: "error",
                title: "Lỗi lấy dữ liệu sản phẩm (admin.js > refreshTableSanPham)",
                html: e.responseText
            });
            console.log(e.responseText)
        }
    });
}

function timKiemLoaiSanPham(inp){
    var kieuTim = document.getElementsByName('kieuTimLoaiSanPham')[0].value;
    // alert(kieuTim); 
    var text = inp.value.trim();

    // Lọc
    var vitriKieuTim = {
        'ma': 0,
        'ten': 1
    };

    var listTr_table = document.getElementsByClassName('loaisanpham')[0].getElementsByClassName('table-content')[0].getElementsByTagName('tr');
    for (var tr of listTr_table) {
        var td = tr.getElementsByTagName('td')[vitriKieuTim[kieuTim]].innerHTML.toLowerCase();

        if (td.indexOf(text.toLowerCase()) < 0) {
            tr.style.display = 'none';
        } else {
            tr.style.display = '';
        }
    }
}

// ========================= Đơn Hàng ===========================
// Vẽ bảng

function refreshTableDonHang() {
    $.ajax({
        type: "POST",
        url: "php/xulyadmin.php",
        dataType: "json",
        // timeout: 1500, // sau 1.5 giây mà không phản hồi thì dừng => hiện lỗi
        data: {
            request: "getall_donhang",
        },
        success: function(data, status, xhr) {
            addTableDonHang(data);
            console.log(data);
        },
        error: function(e) {
            Swal.fire({
                type: "error",
                title: "Lỗi lấy dữ liệu khách Hàng (admin.js > refreshTableKhachHang)",
                html: e.responseText
            });
        }
    });
}
function addTableDonHang(data) {
    var tc = document.getElementsByClassName('donhang')[0].getElementsByClassName('table-content')[0];
    var s = `<table class="table-outline hideImg">`;

    TONGTIEN = 0;
    var ngaynhan = "";
    for (var i = 0; i < data.length; i++) {
        var d = data[i];
        if(d.ngaynhanhang == "0000-00-00 00:00:00") ngaynhan = "Chưa nhận hàng";
        else ngaynhan = d.ngaynhanhang;
        s += `<tr>
            <td style="width: 7.5%">` + d.mahd + `</td>
            <td style="width: 7.5%">` + d.mand + `</td>
            <td style="width: 10%">` + d.sdt + `</td>
            <td style="width: 15%">` + d.diachi + `</td>
            <td style="width: 15%">` + d.phuongthuctt + `</td>
            <td style="width: 10%">` + ham_xu_ly_tien_te(d.tongtien) + `</td>
            <td style="width: 10%">` + d.ngaydathang + `</td>
            <td style="width: 10%">` + ngaynhan + `</td>
            <td style="width: 10%">` + d.trangthai + `</td>
            <td style="width: 5%">
                <div class="tooltip">
                    <i class="fa fa-street-view" onclick="xemchitiet_dh('` + d.mahd + `')"></i>
                    <span class="tooltiptext">Xem chi tiết</span>
                </div>
                <div class="tooltip">`
                 if(d.trangthai != "Đã hủy đơn hàng"){
                    s+=`<i class="fa fa-check" onclick="thaydoitrangthaidonhang('` + d.mahd + `', '`+d.trangthai+`')"></i>
                    <span class="tooltiptext">Trạng thái</span>`;
                 }
                 else{
                    s+=`<i class="fa fa-trash" onclick="xoadonhang('` + d.mahd + `')"></i>
                    <span class="tooltiptext">Xóa</span>`;
                 }   
                s+=`</div>
            </td>
        </tr>`;
        // TONGTIEN += stringToNum(d.tongtien);
    }

    s += `</table>`;
    tc.innerHTML = s;
}

function getListDonHang() {
    var u = getListUser();
    var result = [];
    for (var i = 0; i < u.length; i++) {
        for (var j = 0; j < u[i].donhang.length; j++) {
            // Tổng tiền
            var tongtien = 0;
            for (var s of u[i].donhang[j].sp) {
                var timsp = timKiemTheoMa(list_products, s.ma);
                if (timsp.MaKM.name == 'giareonline') tongtien += stringToNum(timsp.MaKM.value);
                else tongtien += stringToNum(timsp.DonGia);
            }

            // Ngày giờ
            var x = new Date(u[i].donhang[j].ngaymua).toLocaleString();

            // Các sản phẩm
            var sps = '';
            for (var s of u[i].donhang[j].sp) {
                sps += `<p style="text-align: right">` + (timKiemTheoMa(list_products, s.ma).name + ' [' + s.soluong + ']') + `</p>`;
            }

            // Lưu vào result
            result.push({
                "ma": u[i].donhang[j].ngaymua.toString(),
                "khach": u[i].username,
                "sp": sps,
                "tongtien": numToString(tongtien),
                "ngaygio": x,
                "tinhTrang": u[i].donhang[j].tinhTrang
            });
        }
    }
    return result;
}

function thaydoitrangthaidonhang(maDonHang, tt) {
    var khung = document.getElementById('khungTTDonhang');
    $("#tt1").attr("disabled", false);
        $("#tt2").attr("disabled", false);
        $("#tt3").attr("disabled", false);
        $("#tt4").attr("checked", false);
    if($("#tt1").val() == tt){
        $("#tt1").attr("checked", true);
    }
    else if($("#tt2").val() == tt){
        $("#tt2").attr("checked", true);
    }
    else if($("#tt3").val() == tt){
        $("#tt3").attr("checked", true);
    }
    else if($("#tt4").val() == tt){
        $("#tt1").attr("disabled", true);
        $("#tt2").attr("disabled", true);
        $("#tt3").attr("disabled", true);
        $("#tt4").attr("checked", true);
    }
    $("#btn_sua_tt_dh").val(maDonHang);
    $("#trangthai_kodoi").val(tt);
    khung.style.transform = 'scale(1)';
}

function onsubmit_tt_dh(){
    var madh = $("#btn_sua_tt_dh").val();
    var trangthai = "";
    var ngaynhan = "";
    if($("#tt1").prop("checked") == true){
        trangthai = $("#tt1").val();
    }
    else if($("#tt2").prop("checked") == true){
        trangthai = $("#tt2").val();
    }
    else if($("#tt3").prop("checked") == true){
        var d = new Date();
        ngaynhan = d.getFullYear() + "-" + (d.getMonth()+1) + "-";
        if(d.getDate() < 10){
            ngaynhan += "0" + d.getDate() + " ";
        }
        else{
            ngaynhan += d.getDate() + " ";
        }
        ngaynhan += d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
        trangthai = $("#tt3").val();
    }
    else if($("#tt4").prop("checked") == true){
        trangthai = $("#tt4").val();
    }

    if(trangthai == ""){
        alert("Trạng thái đơn hàng chưa được xử lý. Hãy sửa lại!");
        return false;
    }

    if($("#trangthai_kodoi").val() == trangthai){
        trangthai = "";
    }
    
    $.ajax({
        url : "php/xulyadmin.php",
        type : "post",
        dataType : "text",
        data : {
            request : "update_tt_dh",
            trangthai : trangthai,
            ngaynhan :  ngaynhan,
            madh : madh
        },
        success : function(data){
            // alert(data);
            if(data == "ok"){
                Swal.fire({
                    type : "success",
                    title : "Thay đổi trạng thái đơn hàng thành công!"
                }).then((result)=>{
                    if (result.value) {
                        $("#closekhungTTDonhang").trigger('click');
                    }
                });
                refreshTableDonHang();
            }
        },
        error : function(e){
            // alert(e);
            Swal.fire({
                type : "error",
                title : "Thay đổi trạng thái đơn hàng thất bại!",
                html : e.responseText
            });
        }
    });
    return false;
}

function xemchitiet_dh(mahd){
    // alert(mahd);
    $.ajax({
        url : "php/xulyadmin.php",
        type : "post",
        dataType : "json",
        data : {
            request : "select_chitietdonhang",
            mahd : mahd
        },
        success : function(data){
            $("#suactdh").html("Chi Tiết Đơn Hàng " + mahd);
            add_xem_chi_tiet_don_hang(data);
        },
        error : function(e){
            Swal.fire({
                type : "error",
                title : "Lỗi xem chi tiết đơn hàng > admin.js - 1035",
                html : e.responseText
            }); 
        }
    });
}

function add_xem_chi_tiet_don_hang(data){
    var tc = document.getElementById('khungXemchitietDonhang').getElementsByClassName('table-content')[0];
    var s = `<table class="table-outline hideImg">`;

    for (var i = 0; i < data.length; i++){
        s+= `<tr>
        <td style="width: 20%">` + (i + 1) + `</td>
        <td style="width: 20%">` + data[i]['masp'] + `</td>
        <td style="width: 20%">` + data[i]['sanpham']['tensp'] + `</td>
        <td style="width: 20%">` + data[i]['soluong'] + `</td>
        <td style="width: 20%">` + ham_xu_ly_tien_te(data[i]['dongia']) + `</td>
        </tr>`;
    }

    s += `</table>`;
    tc.innerHTML = s;
    document.getElementById('khungXemchitietDonhang').style.transform = 'scale(1)';
}

// Sắp xếp
function sortChiTietDonHangTable(loai) {
    var list = document.getElementById('khungXemchitietDonhang').getElementsByClassName("table-content")[0];
    var tr = list.getElementsByTagName('tr');

    quickSort(tr, 0, tr.length - 1, loai, getValueOfTypeInTable_ChiTietDonHang);
    decrease = !decrease;
}

// Lấy giá trị của loại(cột) dữ liệu nào đó trong bảng
function getValueOfTypeInTable_ChiTietDonHang(tr, loai) {
    var td = tr.getElementsByTagName('td');
    switch (loai) {
        case 'stt':
            return Number(td[0].innerHTML);
        case 'masp':
            return Number(td[1].innerHTML); // chuyển về dạng ngày để so sánh ngày
        case 'tensp':
            return td[2].innerHTML.toLowerCase(); // lấy tên khách
        case 'sluong':
            return Number(td[3].innerHTML); // lấy số lượng hàng trong đơn này, length ở đây là số lượng <p>
        case 'dongia':
            return parseFloat(td[4].innerHTML); // lấy số lượng hàng trong đơn này, length ở đây là số lượng <p>
    }
    return false;
}

function xoadonhang(madh){
    Swal.fire({
        type: 'warning',
        title: 'Bạn có muốn XÓA đơn hàng ' + madh + ' không!',
        showCancelButton: true
    }).then((result) => {
        if(result.value) {
            $.ajax({
                url : "php/xulyadmin.php",
                type : "post",
                dataType : "text",
                data :{
                    request : "xoa_don_hang",
                    madh : madh
                },
                success : function(data){
                    if(data == "ok"){
                        Swal.fire({
                            type : "success",
                            title : "Xóa đơn hàng thành công."
                        });
                        refreshTableDonHang();
                    }
                    else{
                        Swal.fire({
                            type : "success",
                            title : "Xóa đơn hàng thất bại."
                        });
                    }
                },
                error : function(e){
                    Swal.fire({
                        type : "error",
                        title : "Lỗi khi xóa đơn hàng.",
                        html : e.responseText
                    });
                }
            });
        }
    }); 

    
}

function locDonHangTheoKhoangNgay() {
    var from = document.getElementById('fromDate').valueAsDate;
    var to = document.getElementById('toDate').valueAsDate;
    var listTr_table = document.getElementsByClassName('donhang')[0].getElementsByClassName('table-content')[0].getElementsByTagName('tr');
    for (var tr of listTr_table) {
        var td = tr.getElementsByTagName('td')[7].innerHTML;
        var d = new Date(td);
        // if (d >= from && d <= to) {
        //     tr.style.display = '';
        // } else {
        //     tr.style.display = 'none';
        // }
        if(compareDate(from.getFullYear(), (from.getMonth()+1), from.getDate(), d.getFullYear(), (d.getMonth()+1), d.getDate())
            && compareDate(d.getFullYear(), (d.getMonth()+1), d.getDate(), to.getFullYear(), (to.getMonth()+1), to.getDate())){
            tr.style.display = '';
        }
        else{
            tr.style.display = 'none';
        }
    }
}

function compareDate(year1, month1, date1, year2, month2, date2){
    if(parseInt(year1) < parseInt(year2)){
        return true;
    }
    else if(parseInt(year1) > parseInt(year2)){
        return false;
    }
    else{
        if(parseInt(month1) < parseInt(month2)){
            return true;
        }
        else if(parseInt(month1) > parseInt(month2)){
            return false;
        }
        else{
            if(parseInt(date1) <= parseInt(date2)){
                return true;
            }
            else{
                return false;
            }
        }
    }
}

function timKiemDonHang(inp) {
    var kieuTim = document.getElementsByName('kieuTimDonHang')[0].value;
    var text = inp.value.trim();

    // Lọc
    var vitriKieuTim = {
        'ma': 0,
        'khachhang': 1,
        'trangThai': 8
    };

    var listTr_table = document.getElementsByClassName('donhang')[0].getElementsByClassName('table-content')[0].getElementsByTagName('tr');
    for (var tr of listTr_table) {
        var td = tr.getElementsByTagName('td')[vitriKieuTim[kieuTim]].innerHTML.toLowerCase();

        if (td.indexOf(text.toLowerCase()) < 0) {
            tr.style.display = 'none';
        } else {
            tr.style.display = '';
        }
    }
}

// Sắp xếp
function sortDonHangTable(loai) {
    value_sort = !value_sort;
    var sort = "";
    if(value_sort){
        sort = "ASC";
    }
    else{
        sort = "DESC";
    }
    
    $.ajax({
        type: "POST",
        url: "php/xulyadmin.php",
        dataType: "json",
        // timeout: 1500, // sau 1.5 giây mà không phản hồi thì dừng => hiện lỗi
        data: {
            request: "getall_donhang_sort",
            sort : sort,
            loai : loai
        },
        success: function(data, status, xhr) {
            addTableDonHang(data);
            console.log(data);
        },
        error: function(e) {
            Swal.fire({
                type: "error",
                title: "Lỗi lấy dữ liệu khách Hàng (admin.js > refreshTableKhachHang)",
                html: e.responseText
            });
        }
    });
}

// ====================== Khách Hàng =============================
// Vẽ bảng
function refreshTableKhachHang() {
    $.ajax({
        type: "POST",
        url: "php/xulyadmin.php",
        dataType: "json",
        // timeout: 1500, // sau 1.5 giây mà không phản hồi thì dừng => hiện lỗi
        data: {
            request: "getall_kh",
        },
        success: function(data, status, xhr) {
            addTableKhachHang(data);
            //console.log(data);
        },
        error: function(e) {
            Swal.fire({
                type: "error",
                title: "Lỗi lấy dữ liệu khách Hàng (admin.js > refreshTableKhachHang)",
                html: e.responseText
            });
        }
    });
}

function thayDoiTrangThaiND(inp, mand) {
    var trangthai = (inp.checked?1:0);  
    $.ajax({
        type: "POST",
        url: "php/xulykhachhang.php",
        dataType: "json",
        // timeout: 1500, // sau 1.5 giây mà không phản hồi thì dừng => hiện lỗi
        data: {
            request: "changeTT",
            key: mand,
            trangThai: trangthai
        },
        success: function(data, status, xhr) {
            //list_products = data; // biến toàn cục lưu trữ mảng sản phẩm hiện có
            // refreshTableKhachHang();
            //console.log(data);
        },
        error: function(e) {
            // Swal.fire({
            //     type: "error",
            //     title: "Lỗi lấy dữ liệu khách Hàng (admin.js > refreshTableKhachHang)",
            //     html: e.responseText
            // });
            console.log(e.responseText);
        }
    });
}


function addTableKhachHang(data) {
    var tc = document.getElementsByClassName('khachhang')[0].getElementsByClassName('table-content')[0];
    var s = `<table class="table-outline hideImg">`;


    for (var i = 0; i < data.length; i++) {
        var u = data[i];
        console.log(u.TrangThai)

        s += `<tr>
            <td style="width: 7%">` + u.mand + `</td>
            <td style="width: 11%">` + u.taikhoan + `</td>
            <td style="width: 19%">` + u.hoten + `</td>
            <td style="width: 11%">` + u.sdt + `</td>
            <td style="width: 0%">` + u.thudientu + `</td>
            <td style="width: 23%">` + u.diachi + `</td>
            <td style="width: 7%">` + u.gioitinh + `</td>
            <td style="width: 11%">` + u.ngaysinh + `</td>
            <td style="width: 5%">` + ((u.trangthai == 1) ? 'Trạng thái mở' : 'Trạng thái khóa') + `</td>            
            <td style="width: 10%">
                <div class="tooltip">
                    <i class="fa fa-remove" onclick="xoaNguoiDung('` + u.trangthai + `', '`+ u.mand +`')"></i>
                    <span class="tooltiptext">Xóa</span>
                </div>
                <div class="tooltip">
                    <i class="fa fa-wrench" onclick="openSuaNguoiDung('` + u.mand + `')"></i>
                    <span class="tooltiptext">Sửa</span>
                </div>
                
            </td>
        </tr>`;
    }

    s += `</table>`;
    tc.innerHTML = s;
}

function openSuaNguoiDung(mand){
    // alert(mand);
    var ngdung = "";
    $.ajax({
        url : "php/xulyadmin.php",
        type : "post",
        dataType : "json",
        data : {
            request : "get_nd",
            mand : mand
        },
        async:false,
        success : function(data){
            ngdung = data;
        },
        error : function(e){
            Swal.fire({
                type : "error",
                title : "Lỗi lấy thông tin khách hàng > admin.js - 1157",
                html : e.responseText
            }); 
        }
    });
    if(ngdung == "") return;
    var ngaysinh = ngdung.ngaysinh;
    ngaysinh = ngaysinh.split("-");


    // Load ngay thang nam
    var s = '<option value="0">Ngày</option>';
    var val = "";
    for(let i = 1; i < 32; ++i){
        if(i < 10){
            val = "0" + i;
        }
        else{
            val = i;
        }

        if(i == parseInt(ngaysinh[2])){
            s += '<option value="'+ val +'" selected>'+ i +'</option>';
        }
        else{
            s += '<option value="'+ val +'">'+ i +'</option>';
        }
    }
    $("#ngaySua").html(s);
    s = '<option value="0">Tháng</option>';
    for(let i = 1; i < 13; ++i){
        if(i < 10){
            val = "0" + i;
        }
        else{
            val = i;
        }

        if(i == parseInt(ngaysinh[1])){
            s += '<option value="'+ val +'" selected>'+ i +'</option>';
        }
        else{
            s += '<option value="'+ val +'">'+ i +'</option>';
        }
    }
    $("#thangSua").html(s);
    s = '<option value="0">Năm</option>';
    var namsinh = parseInt(ngaysinh[0]);
    var d = new Date();
    d = d.getFullYear();
    for(let i = d; i >= namsinh-120; --i){
        if(i == namsinh){
            s += '<option value="'+ i +'" selected>'+ i +'</option>';
        }
        else{
            s += '<option value="'+ i +'">'+ i +'</option>';
        }
    }
    $("#namSua").html(s);
    

    // document.getElementById("mandSua").value = ngdung.mand;
    $("#mandSua").val(ngdung.mand);
    $("#taikhoanSua").val(ngdung.taikhoan);
    $("#passSua").val(ngdung.matkhau);
    $("#passSuakodoi").val(ngdung.matkhau);
    $("#hotenSua").val(ngdung.hoten);
    $("#sdtSua").val(ngdung.sdt);
    $("#mailSua").val(ngdung.thudientu);
    $("#diachiSua").val(ngdung.diachi);
    $("#sexSua").val(ngdung.gioitinh);
    $("#trangthaiKHSua").val(ngdung.trangthai);

    var khung = document.getElementById("khungNguoiDung");
    khung.style.transform = 'scale(1)';
}

function layThongTinKhachHangTuTable(){
    var namsinh = $("#namSua").val();
    var thangsinh = $("#thangSua").val();
    var ngaysinh = $("#ngaySua").val();
    ngaysinh = namsinh + "-" + thangsinh + "-" + ngaysinh;
    return {
        "mand": $("#mandSua").val().trim(),
        "taikhoan": $("#taikhoanSua").val().trim(),
        "matkhau": $("#passSua").val().trim(),
        "matkhaucu": $("#passSuakodoi").val().trim(),
        "hoten": $("#hotenSua").val().trim(),
        "sdt": $("#sdtSua").val().trim(),
        "thudientu": $("#mailSua").val().trim(),
        "diachi": $("#diachiSua").val().trim(),
        "gioitinh": $("#sexSua").val().trim(),
        "ngaysinh": ngaysinh,
        "maquyen": 1,
        "trangthai": $("#trangthaiKHSua").val()
    };
}

function suaNguoidung(){
    var format = "";
    var kh = layThongTinKhachHangTuTable();
    if(kh.matkhau == "" || kh.hoten == "" || kh.sdt == "" || kh.thudientu == ""
        || kh.diachi == "" || kh.taikhoan == ""){
        alert("Các trường dữ liệu còn thiếu và không được có khoảng trắng giữa 2 đầu chuỗi). Thao tác thất bại!");
        return false; 
    }

    if(kh.taikhoan.length < 5){
        alert("Tài khoản phải bằng hoặc hơn 5 kí tự");
        return false;
    }
    else{
        format = /\W/ig;
        if(format.test(kh.taikhoan)){
            alert("Tài khoản bao gồm các kí tự chữ, số và dấu gạch dưới!");
            return false;
        }
    }

    if(kh.matkhau.length < 5){
        alert("Mật khẩu phải bằng hoặc hơn 5 kí tự!");
        return false;
    }
    else{
        format = /\W/ig;
        if(format.test(kh.matkhau)){
            alert("Mật khẩu bao gồm các kí tự chữ, số và dấu gạch dưới!");
            return false;
        }
    }

    if(kh.ngaysinh == "0-0-0"){
        alert("Ngày sinh chưa được chọn!");
        return false;
    }
    else{
        var d = new Date(kh.ngaysinh);
        var ngaysinh = kh.ngaysinh.split("-");
        if(parseInt(ngaysinh[0]) != d.getFullYear() || parseInt(ngaysinh[1]) != d.getMonth()+1 || parseInt(ngaysinh[2]) != d.getDate()){
            alert("Ngày sinh chọn không đúng. Hãy kiểm tra lại!");
            return false;
        }
    }

    format = /\D/g;;
    if(format.test(kh.sdt)){
        alert("Số điện thoại phải là chữ số!");
        return false;
    }
    else if(kh.sdt.length < 10 || kh.sdt.length > 11){
        alert("Số điện thoại không phù hợp!");
        return false;
    }

    if(kh.thudientu < 5){
        alert("Thư điện tử phải lớn hơn hoặc bằng 5 kí tự!");
        return false;
    }
    else{
        format = /[A-Z0-9._%+-]{6,30}@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
        if(!format.test(kh.thudientu)){
            alert("Thư điện tử không hợp lệ!");
            return false;
        }
    }
    if($("#buttonkhungNguoiDung").html() != "THÊM"){
        var t = true;
        $.ajax({
            url  :"php/xulyadmin.php",
            type : "post",
            dataType : "json",
            data : {
                request : "sua_kh",
                data_update : kh 
            },
            async:false,
            success : function(data){
                Swal.fire({
                    type : "success",
                    title : "Sửa thàng công"
                }).then((result) =>{
                    if(result.value){
                        $("#closekhungNguoiDung").trigger('click');
                    }
                });
                t = true;
            },
            error : function(e){
                Swal.fire({
                    type : "error",
                    title : "Lỗi khi sửa thông tin khách hàng > admin.js - 1321",
                    html : e.responseText
                });
                t = false;
            }
        }); 

        if(t){
            refreshTableKhachHang();
        }
    }
    else{
        var t = true;
        $.ajax({
            url  :"php/xulyadmin.php",
            type : "post",
            dataType : "text",
            data : {
                request : "them_kh",
                data_update : kh 
            },
            async:false,
            success : function(data){
                if(data == "ok"){
                    Swal.fire({
                        type : "success",
                        title : "Thêm thàng công"
                    }).then((result) =>{
                        if(result.value){
                            $("#closekhungNguoiDung").trigger('click');
                        }
                    });
                    t = true;
                }
                else{
                    t = false;
                }
            },
            error : function(e){
                Swal.fire({
                    type : "error",
                    title : "Lỗi khi thêm thông tin khách hàng > admin.js - 1321",
                    html : e.responseText
                });
                t = false;
            }
        }); 

        if(t){
            refreshTableKhachHang();
        }
    }
    
    return false;
}

// Tìm kiếm
function timKiemNguoiDung(inp) {
    var kieuTim = document.getElementsByName('kieuTimKhachHang')[0].value;
    var text = inp.value;

    // Lọc
    var vitriKieuTim = {
        'ten': 2,
        'email': 4,
        'taikhoan': 1
    };

    var listTr_table = document.getElementsByClassName('khachhang')[0].getElementsByClassName('table-content')[0].getElementsByTagName('tr');
    for (var tr of listTr_table) {
        var td = tr.getElementsByTagName('td')[vitriKieuTim[kieuTim]].innerHTML.toLowerCase();

        if (td.indexOf(text.toLowerCase()) < 0) {
            tr.style.display = 'none';
        } else {
            tr.style.display = '';
        }
    }
}

function openThemNguoiDung() {
    var max_mand = "";
    $.ajax({
        url : "php/xulyadmin.php",
        type : "post",
        dataType : "json",
        data : {
            request : "max_mand"
        },
        async:false,
        success : function(data){
            max_mand = data;
        },
        error : function(e){
            Swal.fire({
                type : "error",
                title : "Lỗi lấy thông tin danh sách khách hàng > admin.js - 1373",
                html : e.responseText
            }); 
        }
    });
    if(max_mand == "" || max_mand == null) return;

    $("#titlekhungNguoiDung").html("Thêm Khách Hàng");
    $("#buttonkhungNguoiDung").html("THÊM");

    // Load ngay thang nam
    var s = '<option value="0">Ngày</option>';
    var val = "";
    for(let i = 1; i < 32; ++i){
        if(i < 10){
            val = "0" + i;
        }
        else{
            val = i;
        }
        s += '<option value="'+ val +'">'+ i +'</option>';
    }
    $("#ngaySua").html(s);
    s = '<option value="0">Tháng</option>';
    for(let i = 1; i < 13; ++i){
        if(i < 10){
            val = "0" + i;
        }
        else{
            val = i;
        }
        s += '<option value="'+ val +'">'+ i +'</option>';
    }
    $("#thangSua").html(s);
    s = '<option value="0">Năm</option>';
    var d = new Date();
    d = d.getFullYear();
    for(let i = d; i >= d-120; --i){
        s += '<option value="'+ i +'">'+ i +'</option>';
    }
    $("#namSua").html(s);
    

    // document.getElementById("mandSua").value = ngdung.mand;
    $("#mandSua").val(parseInt(max_mand.maxmand) + 1);
    $("#taikhoanSua").val("");
    $("#taikhoanSua").attr("disabled", null);
    $("#passSua").val("");
    $("#passSuakodoi").val("");
    $("#hotenSua").val("");
    $("#sdtSua").val("");
    $("#mailSua").val("");
    $("#diachiSua").val("");

    var khung = document.getElementById("khungNguoiDung");
    khung.style.transform = 'scale(1)';
}

// vô hiệu hóa người dùng (tạm dừng, không cho đăng nhập vào)
function voHieuHoaNguoiDung(TrangThai) {
    if (TrangThai == 1)
    {

    }
    var span = inp.parentElement.nextElementSibling;
    span.innerHTML = (inp.checked ? 'Khóa' : 'Mở');
}

// Xóa người dùng
function xoaNguoiDung(tt, mand) { 
    if(tt == 1){
        Swal.fire({
            title: "Bạn có chắc muốn KHÓA tài khoản?",
            type: "question",
            showCancelButton: true,
            cancelButtonText: "Hủy"
        }).then((result)=>{
            if(result.value){
                $.ajax({
                    url: "php/xulyadmin.php",
                    type: "post",
                    dataType: "json",
                    // timeout: 1500, // sau 1.5 giây mà không phản hồi thì dừng => hiện lỗi
                    data: {
                        request: "an_nd",
                        mand: mand
                    },
                    success: function(data, status, xhr) {
                        refreshTableKhachHang();
                        //console.log(data);
                    },
                    error: function(e) {
                        // Swal.fire({
                        //     type: "error",
                        //     title: "Lỗi lấy dữ liệu khách Hàng (admin.js > refreshTableKhachHang)",
                        //     html: e.responseText
                        // });
                        console.log(e.responseText);
                    }
                });
            }
        });
    }
    else{
        Swal.fire({
            title: "Bạn có chắc muốn XÓA tài khoản?",
            type: "question",
            showCancelButton: true,
            cancelButtonText: "Hủy"
        }).then((result)=>{
            if(result.value) {
                $.ajax({
                    type: "post",
                    url: "php/xulyadmin.php",
                    dataType: "text",
                    // timeout: 1500, // sau 1.5 giây mà không phản hồi thì dừng => hiện lỗi
                    data: {
                        request: "delete_tk",
                        mand: mand
                    },
                    success: function(data, status, xhr) {
                        refreshTableKhachHang();
                        //console.log(data);
                    },
                    error: function(e) {
                        // Swal.fire({
                        //     type: "error",
                        //     title: "Lỗi lấy dữ liệu khách Hàng (admin.js > refreshTableKhachHang)",
                        //     html: e.responseText
                        // });
                        console.log(e.responseText);
                    }
                });
            }
        });
    }
    
}

// Sắp xếp
function sortKhachHangTable(loai) {
    value_sort = !value_sort;
    var sort = "";
    if(value_sort){
        sort = "ASC";
    }
    else{
        sort = "DESC";
    }
    load_khach_hang_khi_sort(sort, loai);
}

function load_khach_hang_khi_sort(sort, loai){
    $.ajax({
        type: "POST",
        url: "php/xulyadmin.php",
        dataType: "json",
        // timeout: 1500, // sau 1.5 giây mà không phản hồi thì dừng => hiện lỗi
        data: {
            request: "getall_kh_sort",
            sort : sort,
            loai : loai
        },
        success: function(data, status, xhr) {
            addTableKhachHang(data);
            //console.log(data);
        },
        error: function(e) {
            Swal.fire({
                type: "error",
                title: "Lỗi lấy dữ liệu khách Hàng (admin.js > refreshTableKhachHang)",
                html: e.responseText
            });
        }
    });
}

function getValueOfTypeInTable_KhachHang(tr, loai) {
    var td = tr.getElementsByTagName('td');
    switch (loai) {
        case 'stt':
            return Number(td[0].innerHTML);
        case 'mand':
            return Number(td[1].innerHTML);
        case 'taikhoan':
            return td[2].innerHTML.toLowerCase();
        case 'hoten':
            return td[3].innerHTML.toLowerCase();
        case 'email':
            return td[4].innerHTML.toLowerCase();
        case 'diachi':
            return td[5].innerHTML.toLowerCase();
        case 'sex':
            return td[6].innerHTML.toLowerCase();
        case 'date':
            return new Date(td[7].innerHTML);
        case 'tt':
            return td[8].innerHTML.toLowerCase();
    }
    return false;
}

var listbgcolor = new Array('rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 0, 255, 0.2)',
                    'rgba(0, 0, 255, 0.2)',
                    'rgba(255, 255, 0, 0.2)',
                    'rgba(0, 255, 0, 0.2)');
var listbdcolor = new Array('rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 0, 255, 1)',
                    'rgba(0, 0, 255, 1)',
                    'rgba(255, 255, 0, 1)',
                    'rgba(0, 255, 0, 1)');

function load_thong_ke(){
    var thang = $("#thongke_thang").val();
    var nam = $("#thongke_nam").val();
    var type_select = $("#thongke_selection").val();

    if(nam == "0"){
        Swal.fire({
            type : "error",
            title : "Năm chưa được chọn!"
        });
        return;
    }

    switch(parseInt(type_select)){
        case 0 :{
            load_thong_ke_san_pham_ban_chay(nam, thang);
            break;
        }
        case 1:{
            load_thong_ke_loai_san_pham_ban_chay(nam, thang);
            break;
        }
    }
}

function load_thong_ke_san_pham_ban_chay(nam, thang){
    if(typeof thang == "undefined") thang = "0";
    thang = parseInt(thang);
    nam = parseInt(nam);
    $.ajax({
        url : "php/xulyadmin.php",
        type : "post",
        dataType : "json",
        data : {
            request : "load_thong_ke_san_pham_ban_chay_admin",
            thang : thang,
            nam : nam
        },
        success : function(data){
            var s = `<th title="Sắp xếp" style="width: 5%" onclick="sortProductsTableThongKe('masp')">Mã <i class="fa fa-sort"></i></th>
                    <th title="Sắp xếp" style="width: 40%" onclick="sortProductsTableThongKe('ten')">Tên <i class="fa fa-sort"></i></th>
                    <th title="Sắp xếp" style="width: 10%" onclick="sortProductsTableThongKe('soluong')">Số lượng <i class="fa fa-sort"></i></th>
                    <th title="Sắp xếp" style="width: 15%" onclick="sortProductsTableThongKe('gia')">Giá <i class="fa fa-sort"></i></th>
                    <th title="Sắp xếp" style="width: 15%" onclick="sortProductsTableThongKe('khuyenmai')">Khuyến mãi <i class="fa fa-sort"></i></th>
                    <th title="Sắp xếp" style="width: 10%" onclick="sortProductsTableThongKe('trangthai')">Trạng thái <i class="fa fa-sort"></i></th>`;
            $("#header_thong_ke").html(s);
            var tc = document.getElementById("thongke_sua_table");
            s = `<table class="table-outline hideImg">`;

            var top_sl_sp = 10;
            if(data.length <= top_sl_sp){
                top_sl_sp = data.length;
            }

            var tongtien = 0;
            var list_soluong = [];
            var list_label = [];
            var list_bg =[];
            var list_bd = [];
            var txt = "Top " + top_sl_sp + " sản phẩm bán chạy nhất";

            for (var i = 0; i < data.length; i++) {
                var p = data[i];
                if(i < top_sl_sp){
                    list_soluong.push(p.soluong);
                    list_label.push(p.tensp);
                    list_bg.push(listbgcolor[i]);
                    list_bd.push(list_bd[i]);
                }
                tongtien += parseInt(p.dongia)*parseInt(p.soluong);
                s += `<tr>
                    <td style="width: 5%">` + p.masp + `</td>
                    <td style="width: 40%">
                        <a title="Xem chi tiết" target="_blank" href="../product-details.php?masp=` + p.masp + `">` + p.tensp + `</a>
                        <img src="../img/products/` + p.img + `"></img>
                    </td>
                    <td style="width: 10%">` + p.soluong + `</td>
                    <td style="width: 15%">` + ham_xu_ly_tien_te(p.dongia) + `</td>
                    <td style="width: 15%">` + /*promoToStringValue(*/ (p.tenkm) /*)*/ + `</td>
                    <td style="width: 10%">` + (p.trangthai==1?"Hiện":"Ẩn") + `</td>
                </tr>`;
            }

            s += `</table>`;

            tc.innerHTML = s;
            $("#thongke_doanhthu").val(ham_xu_ly_tien_te(tongtien) + "đ");

            var dataChart = {
                type: 'bar',
                data: {
                    labels: list_label,
                    datasets: [{
                        label: 'Số lượng bán ra',
                        data: list_soluong,
                        backgroundColor: list_bg,
                        borderColor: list_bd,
                        borderWidth: 2
                    }]
                },
                options: {
                    title: {
                        fontColor: '#fff',
                        fontSize: 25,
                        display: true,
                        text: txt
                    }
                }
            };

            // Thêm thống kê
            var barChart = copyObject(dataChart);
            barChart.type = 'bar';
            addChart('myChart1', barChart);

            var doughnutChart = copyObject(dataChart);
            doughnutChart.type = 'doughnut';
            addChart('myChart2', doughnutChart);

            var pieChart = copyObject(dataChart);
            pieChart.type = 'pie';
            addChart('myChart3', pieChart);

            var lineChart = copyObject(dataChart);
            lineChart.type = 'line';
            addChart('myChart4', lineChart);



        },
        error : function(e){
            Swal.fire({
                type : "error",
                title : "Lỗi load sản phẩm bán chạy thống kê",
                html : e.responseText
            });
        }
    });
}

function load_thong_ke_loai_san_pham_ban_chay(nam, thang){
    var tongtien = 0;
    if(typeof thang == "undefined") thang = "0";
    thang = parseInt(thang);
    nam = parseInt(nam);
    $.ajax({
        url : "php/xulyadmin.php",
        type : "post",
        dataType : "json",
        data : {
            request : "load_thong_ke_loai_san_pham_ban_chay_admin",
            thang : thang,
            nam : nam
        },
        success : function(data){
            var s = `<th title="Sắp xếp" style="width: 5%" onclick="sortloaiProductsTableThongKe('maloai')">Mã loại <i class="fa fa-sort"></i></th>
                    <th title="Sắp xếp" style="width: 40%" onclick="sortloaiProductsTableThongKe('tenloai')">Tên loại <i class="fa fa-sort"></i></th>
                    <th title="Sắp xếp" style="width: 10%" onclick="sortloaiProductsTableThongKe('soluong')">Số lượng <i class="fa fa-sort"></i></th>
                    <th title="Sắp xếp" style="width: 15%" onclick="sortloaiProductsTableThongKe('gia')">Tổng tiền <i class="fa fa-sort"></i></th>`;
            $("#header_thong_ke").html(s);
            var tc = document.getElementById("thongke_sua_table");
            s = `<table class="table-outline hideImg">`;

            var top_sl_sp = data.length;

            var list_soluong = [];
            var list_label = [];
            var list_bg =[];
            var list_bd = [];
            var txt = "";

            for (var i = 0; i < data.length; i++) {
                var p = data[i];
                if(i < top_sl_sp){
                    list_soluong.push(p.soluong);
                    list_label.push(p.tenloai);
                    list_bg.push(listbgcolor[i]);
                    list_bd.push(list_bd[i]);
                    tongtien = tongtien + parseInt(p.tongtien)*parseInt(p.soluong);
                }
                s += `<tr>
                    <td style="width: 5%">` + p.maloai + `</td>
                    <td style="width: 40%">
                        <a title="Xem chi tiết" target="_blank">` + p.tenloai + `</a>
                    </td>
                    <td style="width: 10%">` + p.soluong + `</td>
                    <td style="width: 15%">` + ham_xu_ly_tien_te(p.tongtien) + `</td>
                </tr>`;
            }

            s += `</table>`;
            $("#thongke_doanhthu").val(ham_xu_ly_tien_te(tongtien)+"đ");
            tc.innerHTML = s;

            var dataChart = {
                type: 'bar',
                data: {
                    labels: list_label,
                    datasets: [{
                        label: 'Số lượng bán ra',
                        data: list_soluong,
                        backgroundColor: list_bg,
                        borderColor: list_bd,
                        borderWidth: 2
                    }]
                },
                options: {
                    title: {
                        fontColor: '#fff',
                        fontSize: 25,
                        display: true,
                        text: txt
                    }
                }
            };

            // Thêm thống kê
            var barChart = copyObject(dataChart);
            barChart.type = 'bar';
            addChart('myChart1', barChart);

            var doughnutChart = copyObject(dataChart);
            doughnutChart.type = 'doughnut';
            addChart('myChart2', doughnutChart);

            var pieChart = copyObject(dataChart);
            pieChart.type = 'pie';
            addChart('myChart3', pieChart);

            var lineChart = copyObject(dataChart);
            lineChart.type = 'line';
            addChart('myChart4', lineChart);



        },
        error : function(e){
            Swal.fire({
                type : "error",
                title : "Lỗi load sản phẩm bán chạy thống kê",
                html : e.responseText
            });
        }
    });
}

function sortProductsTableThongKe(loai){
    value_sort = !value_sort;
    var sort = "";
    if(value_sort){
        sort = "ASC";
    }
    else{
        sort = "DESC";
    }
    load_san_pham_thong_ke_khi_sort(sort, loai);
}

function sortloaiProductsTableThongKe(loai){
    value_sort = !value_sort;
    var sort = "";
    if(value_sort){
        sort = "ASC";
    }
    else{
        sort = "DESC";
    }
    load_loai_san_pham_thong_ke_khi_sort(sort, loai);
}

function load_san_pham_thong_ke_khi_sort(sort, loai){
    var thang = $("#thongke_thang").val();
    var nam = $("#thongke_nam").val();
    var type_select = $("#thongke_selection").val();

    if(nam == "0"){
        Swal.fire({
            type : "error",
            title : "Năm chưa được chọn!"
        });
        return;
    }
    thang = parseInt(thang);
    nam = parseInt(nam);
    $.ajax({
        type: "POST",
        url: "php/xulyadmin.php",
        dataType: "json",
        // timeout: 1500, // sau 1.5 giây mà không phản hồi thì dừng => hiện lỗi
        data: {
            request: "load_thong_ke_san_pham_ban_chay_admin_sort",
            sort : sort,
            loai : loai,
            thang : thang,
            nam : nam
        },
        success: function(data, status, xhr) {
            var s = `<table class="table-outline hideImg">`;

            for (var i = 0; i < data.length; i++) {
                var p = data[i];
                s += `<tr>
                    <td style="width: 5%">` + p.masp + `</td>
                    <td style="width: 40%">
                        <a title="Xem chi tiết" target="_blank" href="../product-details.php?masp=` + p.masp + `">` + p.tensp + `</a>
                        <img src="../img/products/` + p.img + `"></img>
                    </td>
                    <td style="width: 10%">` + p.soluong + `</td>
                    <td style="width: 15%">` + ham_xu_ly_tien_te(p.dongia) + `</td>
                    <td style="width: 15%">` + /*promoToStringValue(*/ (p.tenkm) /*)*/ + `</td>
                    <td style="width: 10%">` + (p.trangthai==1?"Hiện":"Ẩn") + `</td>
                </tr>`;
            }

            s += `</table>`;
            $("#thongke_sua_table").html(s);
        },
        error: function(e) {
            Swal.fire({
                type: "error",
                title: "Lỗi lấy dữ liệu sản phẩm (admin.js > refreshTableSanPham)",
                html: e.responseText
            });
            console.log(e.responseText)
        }
    });
}

function load_loai_san_pham_thong_ke_khi_sort(sort, loai){
    var thang = $("#thongke_thang").val();
    var nam = $("#thongke_nam").val();
    var type_select = $("#thongke_selection").val();

    if(nam == "0"){
        Swal.fire({
            type : "error",
            title : "Năm chưa được chọn!"
        });
        return;
    }
    thang = parseInt(thang);
    nam = parseInt(nam);
    $.ajax({
        type: "POST",
        url: "php/xulyadmin.php",
        dataType: "json",
        // timeout: 1500, // sau 1.5 giây mà không phản hồi thì dừng => hiện lỗi
        data: {
            request: "load_thong_ke_loai_san_pham_ban_chay_admin_sort",
            sort : sort,
            loai : loai,
            thang : thang,
            nam : nam
        },
        success: function(data, status, xhr) {
            var s = `<th title="Sắp xếp" style="width: 5%" onclick="sortloaiProductsTableThongKe('maloai')">Mã loại <i class="fa fa-sort"></i></th>
                    <th title="Sắp xếp" style="width: 40%" onclick="sortloaiProductsTableThongKe('tenloai')">Tên loại <i class="fa fa-sort"></i></th>
                    <th title="Sắp xếp" style="width: 10%" onclick="sortloaiProductsTableThongKe('soluong')">Số lượng <i class="fa fa-sort"></i></th>
                    <th title="Sắp xếp" style="width: 15%" onclick="sortloaiProductsTableThongKe('gia')">Tổng tiền <i class="fa fa-sort"></i></th>`;
            $("#header_thong_ke").html(s);
            var tc = document.getElementById("thongke_sua_table");
            s = `<table class="table-outline hideImg">`;

            for (var i = 0; i < data.length; i++) {
                var p = data[i];
                s += `<tr>
                    <td style="width: 5%">` + p.maloai + `</td>
                    <td style="width: 40%">
                        <a title="Xem chi tiết" target="_blank">` + p.tenloai + `</a>
                    </td>
                    <td style="width: 10%">` + p.soluong + `</td>
                    <td style="width: 15%">` + ham_xu_ly_tien_te(p.tongtien) + `</td>
                </tr>`;
            }

            s += `</table>`;
            tc.innerHTML = s;

        },
        error: function(e) {
            Swal.fire({
                type: "error",
                title: "Lỗi lấy dữ liệu sản phẩm (admin.js > refreshTableSanPham)",
                html: e.responseText
            });
            console.log(e.responseText)
        }
    });
}

function copyObject(o) {
    return JSON.parse(JSON.stringify(o));
}