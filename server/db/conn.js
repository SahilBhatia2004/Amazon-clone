const mongoose=require("mongoose");


const DB = "mongodb+srv://Sahil_Devloper:sahil@20112004@cluster0.ennthic.mongodb.net/AmazonWeb?retryWrites=true&w=majority&appName=Cluster0"


mongoose.connect(DB).then(()=>console.log("data base connected")).catch((error)=>console.log("error"+ error.message))