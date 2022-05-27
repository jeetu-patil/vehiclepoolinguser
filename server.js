const express = require("express");
const path = require("path");
const app = express();
app.use(express.static('./dist/vehiclepoolinguser'));
app.get('/',(req,res)=>{
    return res.sendFile('index.html',{root:'dist/vehiclepoolinguser'})
});
app.use((req,res)=>{
  return res.sendFile('index.html',{root:'dist/vehiclepoolinguser'})
});
app.listen(process.env.PORT || 8080);
