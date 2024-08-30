const express = require ("express")


let app = express()
 app.use(express.json())


 app.get("/api/get",(req,res)=>{
        res.send(message =" this node.js server ")
 })


 app.listen(8000,()=>{
    console.log("server is running on http://localhost:8000")
 })
