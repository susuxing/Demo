let longsService=require("../service/LongsService");
module.exports.long=function(req,res){
    let longsService=new LongsService();
    longsService.getData(function(ob) {
        res.json(ob);
    });
}