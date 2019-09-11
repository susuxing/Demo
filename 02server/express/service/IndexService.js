let NaviService=require("./NaviService");

class IndexService{
    constructor(){}
    getData(callback) {
        let naviService = new NaviService();
        
        naviService.getNavis(function (navis) {
            callback(navis);
        });
        // longsService.getLongsWithNavi(function(longs){
        //     callback(longs);
        // });
    }
}
module.exports=IndexService;