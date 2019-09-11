let IndexService = require("../services/IndexService");
module.exports.index = function(req,res){
    let indexService = new IndexService();
    indexService.getData(function(ob){
        res.json(ob);
    });
};

