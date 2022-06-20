const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(port, ()=>{
    console.log(`App is listening at port ${port}`);
})