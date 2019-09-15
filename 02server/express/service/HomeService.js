//引入模块
let HomesService = require("./HomesService");
class HomeService{
    constructor(){}
    getData(callback){
        let homesService  = new HomesService();
        //获得数据
        homesService.getAllSwipers(function(ob){
            callback(ob);
        });
    }
}
module.exports = HomeService;