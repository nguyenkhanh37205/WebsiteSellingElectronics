import express from 'express';
import configviewEngine from './configs/viewEngine.js';
import initWebRoutes from './route/web.js';

require('dotenv').config();

const app = express()
const port = process.env.PORT || 5000;
// console.log(">>>Check port<<<",port)

configviewEngine(app);

initWebRoutes(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})