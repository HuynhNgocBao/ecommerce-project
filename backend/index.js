const express = require('express');
require('dotenv').config();
const fs = require("fs");
const cloudinary = require('cloudinary');
const Product = require("./models/Product");
const fileUpload = require("express-fileupload");
const port = process.env.PORT || 5000;
const route = require('./routes');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(fileUpload());
connectDB();

route(app);

// let count = 1;
// Product.create({
//     genderType: "Ladies",
//     clothesType : "Dresses",
//     photos: [`ladies/dresses/${count}`, `ladies/dresses/${count+1}`],
//     name: "test",
//     categories: ["casual dresses", "going out dresses"],
//     brand: "Zara",
//     price: 90,
//     size: ["S","M","L"],
//     color: ["Blue","White", "Black"],
//     quantity: 200,
//     description: "test",
// })
// cloudinary.config({ 
//     cloud_name: process.env.CLOUD_NAME_CLOUDINARY, 
//     api_key: process.env.API_KEY_CLOUDINARY, 
//     api_secret: process.env.API_SECRET_CLOUDINARY 
//   });

  
// fs.readdir('./ladies dresses', (err, files) => {
//     let count = 1;
//     files.forEach(file => {
//         await cloudinary.v2.uploader.upload(`./ladies dresses/${file}`,
//         { public_id: `ladies/dresses/${count}` }, 
//         function(error, result) {console.log(result); });
//         count++;
//     });
//   });
  
app.listen(port, ()=>{
    console.log(`App is listening at port ${port}`);
})

