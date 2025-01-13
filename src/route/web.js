import express from 'express';
import viewEngine from '../configs/viewEngine.js';
import homeController from '../controller/homeController.js';
import authController from '../controller/authController.js';
// import initWebRoutes from './web.js';

let router = express.Router();

const initWebRoutes = (app) => {
    // app.use('/', router);

    router.get('/', homeController.getHomepage);

    router.get('/TrangChu', homeController.getHomepage);

    // router.post('/create-new-user', homeController.createNewUser);

    router.post('/TrangChu',(req,res)=>{
        res.render('TrangChu')
    });

    router.get('/DangNhap',authController.getDangNhap)
    router.post('/DangNhap',authController.postDangNhap)

    router.get('/DangKy',authController.getDangKy)
    router.post('/DangKy',authController.postDangKy)

    //sanpham
    //điện thoại
    //iphone
    router.get('/Iphone/Iphone11', (req, res) => {
        res.render('Iphone/Iphone11'); 
    });
    router.get('/Iphone/Iphone12', (req, res) => {
        res.render('Iphone/Iphone12'); 
    });
    router.get('/Iphone/Iphone13', (req, res) => {
        res.render('Iphone/Iphone13'); 
    });
    router.get('/Iphone/Iphone14', (req, res) => {
        res.render('Iphone/Iphone14'); 
    });
    //sam sung
    router.get('/SamSung/SamSung-Galaxy-A16', (req, res) => {
        res.render('SamSung/SamSung-Galaxy-A16'); 
    })
    router.get('/SamSung/SamSung-Galaxy-A55', (req, res) => {
        res.render('SamSung/SamSung-Galaxy-A55'); 
    })
    router.get('/SamSung/SamSung-Galaxy-M15', (req, res) => {
        res.render('SamSung/SamSung-Galaxy-M15'); 
    })
    router.get('/SamSung/SamSung-Galaxy-S24FE', (req, res) => {
        res.render('SamSung/SamSung-Galaxy-S24FE'); 
    })

    //may tinh
    //dell
    router.get('/DELL/Dell-Insprion-15-3520', (req, res) => {
        res.render('DELL/Dell-Insprion-15-3520'); 
    });
    router.get('/DELL/Dell-Inspiron-15-3530', (req, res) => {
        res.render('DELL/Dell-Inspiron-15-3530'); 
    });
    router.get('/DELL/Dell-Insprion-16-5640', (req, res) => {
        res.render('DELL/Dell-Insprion-16-5640'); 
    });
    router.get('/DELL/Dell-Vostro', (req, res) => {
        res.render('DELL/Dell-Vostro'); 
    });

    //hp
    router.get('/HP/HP-15', (req, res) => {
        res.render('HP/HP-15'); 
    });
    router.get('/HP/HP-Vistus', (req, res) => {
        res.render('HP/HP-Vistus'); 
    });
    router.get('/HP/HP-240-G8', (req, res) => {
        res.render('HP/HP-240-G8'); 
    });
    router.get('/HP/HP-240-G9', (req, res) => {
        res.render('HP/HP-240-G9'); 
    });


    return app.use("/", router);
}

export default initWebRoutes;