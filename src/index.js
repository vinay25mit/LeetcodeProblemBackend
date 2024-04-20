const express=require("express");
const bodyParser=require("body-parser");
const {PORT}=require("./config/server.config");
console.log(PORT);
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.get("/ping",(req,res)=>{
    return res.json({message:'Problem service is alive'});
})

app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`);
})

