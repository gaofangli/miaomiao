const express = require("express");//创建原生服务器  createServer

const app = express()

//端口号
const port = 80;


// 通用方法  用作跨域  next  必须有，否则不能向下执行
app.use(function(req,res,next){
    //跨域  Home.vue$axios
    res.header("Access-Control-Allow-Origin","*");
     next()  //向下执行 中间件
})



//监听端口
app.listen(port,function(req,res){
    console.log("running at " + port);
})

//先启动node 文件名  再用浏览器打开localhost（：8080默认8080可以不写）/user（路由因为设置路由user  必须加，否则访问不到）