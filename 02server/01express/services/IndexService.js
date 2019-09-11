//引入模块
let CourseService = require("./CourseService");
class IndexService{
    constructor(){}
    getData(callback){
        let courseService  = new CourseService();
        //获得数据
        courseService.getheadItem(function(ob){
            callback(ob);
        });
    }
}
module.exports = IndexService;