let NaviModel=require("../model/NaviModel");
let LongsService=require("./LongsService");
class NaviService{
    constructor(){}
    getNavis(callback) {
      let naviModel = new NaviModel();
      let longsService=new LongsService();
      naviModel.getAllNavis(function (navis) {
            // callback(navis);
            longsService.getLongsWithNavi(function(longs){
                callback({longs:longs,navis:navis});
            });
        });
    }
}
module.exports=NaviService;