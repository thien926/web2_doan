
Table KH as U {
  makh int [pk, increment] // auto-increment
  username varchar
  pass varchar
  full_name varchar
  sex varchar
  born varchar
  phone varchar
  email varchar
  address varchar
  trangthai varchar
}

Table NV as U {
  manv int [pk, increment] // auto-increment
  username varchar
  pass varchar
  full_name varchar
  sex varchar
  born varchar
  phone varchar
  email varchar
  address varchar
  trangthai varchar
}

Table HOADON {
  mahd int [pk]
  makh int
  manv int
  tonggia int
  ngaylaphoadon int
  ngaynhanhang int
}

Table CTHOADON {
  mahd int [pk]
  masach int [pk]
  soluong int
  dongia int
  
}

Table NXB {
  manxb int [pk]
  full_name varchar
  diachi varchar
  sdt varchar
  email varchar
}

Table Tacgia {
  matg int [pk]
  name varchar
  
}

Table Loaisach {
  maloai int [pk]
  name varchar
  
}

Table MaKM {
  makm int [pk]
  Name varchar
  phantram int
  NgayBD varchar
  NgayKT varchar
  
}

// Indexes: You can define a single or multi-column index 
Table Sach {
  masach int [pk]
  name varchar
  tacgia varchar
  loaisach varchar
  nhaxuatban varchar
  chitiet varchar
  soluong int
  giacu int
  giamoi int
  makm int
  img varchar
}

Ref: Sach.nhaxuatban > NXB.manxb  
Ref: NV.manv < HOADON.manv
Ref: KH.makh < HOADON.makh
Ref: HOADON.mahd < CTHOADON.mahd
Ref: Sach.masach < CTHOADON.masach
Ref: Tacgia.matg < Sach.tacgia
Ref: Loaisach.maloai < Sach.loaisach
Ref: MaKM.makm < Sach.makm


// Ref: "Tacgia"."name" < "Tacgia"."id"
