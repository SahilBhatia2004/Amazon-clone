const { Title } = require("@mui/icons-material");
const mongoose=require("mongoose");


const Productsschema = new mongoose.Schema({

id:String,
url:String,
detailsUrl:String,
Title:Object,
Price:Object,
description:String,
discount:String,
tagline:String,
})