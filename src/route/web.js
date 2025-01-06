import express from 'express';
import viewEngine from '../configs/viewEngine.js';
import homeController from '../controller/homeController.js';
// import initWebRoutes from './web.js';

let router = express.Router();

const initWebRoutes = (app) => {
    // app.use('/', router);

    router.get('/', homeController.getHomepage);

    router.get('/TrangChu', homeController.getHomepage);

    router.get('/DangNhap', (req, res) => {
        res.render('DangNhap')
    })

    router.get('/DangKy', (req, res) => {
        res.render('DangKy')
    })

    return app.use("/", router);
}

export default initWebRoutes;