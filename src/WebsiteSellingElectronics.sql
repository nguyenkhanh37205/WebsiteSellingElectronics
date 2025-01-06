create database WebsiteSellingElectronics;
use WebsiteSellingElectronics;

--Nguoi dung
create table NguoiDung(
	MaND int IDENTITY(1,1) PRIMARY KEY,
	HoTen nvarchar(50) not null,
	Email nvarchar(100) not null unique,
	MatKhau nvarchar(50) not null,
	DiaChi nvarchar(50) not null,
	VaiTro nvarchar(50) not null check(VaiTro in(N'Quan Tri Vien','Nguoi Dung')) DEFAULT 'Nguoi Dung',
	NgayTaoTK datetime default getdate()
);

--Danh muc san pham
create table DanhMucSP(
	MaDanhMucSP int IDENTITY(1,1) PRIMARY KEY,
	TenDanhMuc nvarchar(100) not null,
	MoTaDanhMuc nvarchar(max),
);

--San pham
create table SanPham(
	MaSP int IDENTITY(1,1) PRIMARY KEY,
	TenSP nvarchar(50) not null,
	MoTaSP nvarchar(max),
	NhanHang nvarchar(50) not null,
	GiaTien numeric(10,2) not null,
	GiamGia numeric(10,2) not null,
	NgayTaoSP datetime default getdate(),
	MaDanhMucSP int not null,
	NgayCapNhatSP datetime default getdate(),--ngay cap nhat san pham
	foreign key (MaDanhMucSP) references DanhMucSP(MaDanhMucSP)
);

--Don hang
create table DonHang(
	MaDH int IDENTITY(1,1) PRIMARY KEY,
	MaND int not null,
	TongGiaTriDH decimal(10,2) not null,--tong gia tri don hang
	TrangThaiDH nvarchar(50) check (TrangThaiDH in('Dang cho','Da giao','Hoan thanh','Da tuy')) default 'Dang Cho',
	NgayTaoDH datetime default  getdate(),--ngay tao don hang
	foreign key(MaND) references NguoiDung(MaND)
);

--Chi tiet don hang
create table ChiTietDonHang(
	MaChiTietDonHang int IDENTITY(1,1) PRIMARY KEY,
	MaDH int not null,
	MaSP int not null,
	SoLuong decimal(10,2) not null,--so luong san pham
	GiaTien decimal(10,2) not null,--gia tai thoi diem dat hang
	foreign key (MaDH)  references DonHang(MaDH),
	foreign key (MaSP) references SanPham(MaSP),
);

--Danh gia san pham
create table DanhGiaSP(
	MaDanhGia int IDENTITY(1,1) PRIMARY KEY,
	MaSP int not null,
	MaND int not null,
	DanhGia int check(DanhGia >=1 and DanhGia <= 5),
	BinhLuan nvarchar(max),
	foreign key (MaSP) references SanPham(MaSP),
	foreign key (MaND) references NguoiDung(MaND),
);

--Khuyen mai
create table KhuyenMai(
	MaKM int IDENTITY(1,1) PRIMARY KEY,
	MaSP int not null,
	PhanTramGiamGia decimal(5,2) check(PhanTramGiamGia between 0 and 100),
	NgayBatDauKM date,
	NgayKetThucKM date,
	foreign key (MaSP) references SanPham(MaSP)
);

--Thanh toan
create table ThanhToan(
	MaTT int IDENTITY(1,1) PRIMARY KEY,
	MaDH int not null,
	--phuong thuc thanh toan
	PhuongThucTT nvarchar(50) check(PhuongThucTT in ('Chuyen khoan','Vi dien tu','Tien mat khi giao hang')) not null,
	--trang thai thanh toan
	TrangThaiTT nvarchar(50) check(TrangThaiTT in ('Dang cho xu ly','Da hoan thanh,','Khong thanh cong')) default 'Dang cho xu ly',
	NgayTT date default getdate(),
	foreign key (MaDH) references DonHang(MaDH)
);

--Gio hang
create table GioHang(
	MaGH int IDENTITY(1,1) PRIMARY KEY,
	MaND int not null,
	MaSP int not null,
	SoLuongSP int not null,--so luong san pham
	foreign key (MaND) references NguoiDung(MaND),
	foreign key (MaSP) references SanPham(MaSP),
);