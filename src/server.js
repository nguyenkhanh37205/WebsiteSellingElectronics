import express from 'express';
import configviewEngine from './configs/viewEngine.js';
import initWebRoutes from './route/web.js';
import session from 'express-session';

require('dotenv').config();

const app = express()
const port = process.env.PORT || 5000;

app.use(session({
    secret: process.env.SESSION_SECRET || 'default-secret-key',  // Dùng một key bí mật để mã hóa phiên
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }  // Cấu hình cookie (đặt `secure: true` khi bạn sử dụng HTTPS)
    // cookie: { 
    //     secure: false, // Nếu bạn chưa dùng HTTPS thì để secure = false
    //     httpOnly: true, // Ngăn chặn việc truy cập cookie từ JavaScript
    //     maxAge: 1000 * 60 * 60 * 24 // Thiết lập thời gian tồn tại của session (1 ngày)
    // }
}));

// Middleware xử lý dữ liệu gửi từ form HTML
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

configviewEngine(app);

initWebRoutes(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})