let HomeService = require("../service/HomeService");
module.exports.home = function(req,res){
    let homeService = new HomeService();
    homeService.getData(function(ob){
        res.json(ob);

    });
};

