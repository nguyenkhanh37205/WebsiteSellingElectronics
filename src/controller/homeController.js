import pool from '../configs/connectDB.js';
import bcrypt from 'bcrypt';

let getHomepage = async (req, res) => {
    try {
        const [rows, fields] = await pool.query('SELECT * FROM nguoidung');
        return res.render('TrangChu', { users: rows });
    } catch (err) {
        console.error(err);
        return res.status(500).send('Lỗi khi lấy dữ liệu người dùng');
    }
};

let createNewUser = async (req, res) => {
    let { HoTen, Email, MatKhau } = req.body;
    try {
        // Mã hóa mật khẩu
        const hashedPassword = await bcrypt.hash(MatKhau, 10);

        // Thêm người dùng vào cơ sở dữ liệu
        await pool.execute('INSERT INTO nguoidung (HoTen, Email, MatKhau) VALUES (?, ?, ?)', [HoTen, Email, hashedPassword]);
        return res.redirect('/'); // Chuyển hướng đến trang chủ
    } catch (err) {
        console.error(err);
        return res.status(500).send('Lỗi khi tạo người dùng');
    }
};

module.exports = {
    getHomepage,
    createNewUser
};
