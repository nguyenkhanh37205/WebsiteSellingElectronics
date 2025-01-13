import pool from '../configs/connectDB.js';

const authController = {
    // Render giao diện Đăng nhập
    getDangNhap: (req, res) => {
        return res.render('DangNhap', { message: null }); // Render giao diện `DangNhap.ejs`
    },

    // Xử lý Đăng nhập
    postDangNhap: async (req, res) => {
        const { Email, MatKhau } = req.body;

        try {
            const [user] = await pool.execute('SELECT * FROM `nguoidung` WHERE Email = ?', [Email]);
            if (user.length === 0) {
                return res.render('DangNhap', { message: 'Tài khoản không tồn tại!' });
            }

            if (MatKhau !== user[0].MatKhau) {
                return res.render('DangNhap', { message: 'Sai mật khẩu!' });
            }

            // Lưu thông tin người dùng vào session sau khi đăng nhập thành công
            req.session.user = {
                // id: user[0].id,
                hoTen: user[0].HoTen,
                email: user[0].Email
            };

            return res.redirect('/TrangChu'); // Đăng nhập thành công
        } catch (error) {
            console.error(error);
            return res.render('DangNhap', { message: 'Đã xảy ra lỗi, vui lòng thử lại!' });
        }
    },

    // Render giao diện Đăng ký
    getDangKy: (req, res) => {
        return res.render('DangKy', { message: null }); // Render giao diện `DangKy.ejs`
    },

    // Xử lý Đăng ký
    postDangKy: async (req, res) => {
        const { HoTen, Email, MatKhau } = req.body;

        try {
            const [existingUser] = await pool.execute('SELECT * FROM `nguoidung` WHERE Email = ?', [Email]);
            if (existingUser.length > 0) {
                return res.render('DangKy', { message: 'Email đã được sử dụng!' });
            }

            await pool.execute('INSERT INTO `nguoidung` (HoTen, Email, MatKhau) VALUES (?, ?, ?)', [HoTen, Email, MatKhau]);

            return res.redirect('/TrangChu'); // Đăng ký thành công
        } catch (error) {
            console.error(error);
            return res.render('DangKy', { message: 'Đã xảy ra lỗi, vui lòng thử lại!' });
        }
    }
};

export default authController;
