let express = require("express");
let mysql=require("mysql");
let app = express();
let bodyParser=require("body-parser");
let urlencodedParser = bodyParser.urlencoded({
    extended: false
  });
  app.use(express.static("public"));
  app.all("*", function(req, res, next) {
    //res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin", "http://192.168.3.122:3000");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", " 3.2.1");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
    
  });
  let ip="http://localhost:";
  let port=8888;
  let homeController=require('./controllers/HomeController');
app.get('/home',homeController.home);  

  let indexController1 = require("./controllers/IndexController");
  app.get("/trends", indexController1.index);

  let indexController=require("./controllers/IndexControllers");
  app.get("/myuser",indexController.index)

  app.listen(port, function() {
    console.log("running");
  });