//引入模块
let SwipersModel  = require("../model/SwipersModel");
let HomelistModel = require("../model/HomelistModel");
let ContentsModel = require("../model/ContentsModel");
class HomesService {
    constructor() { }
    getAllSwipers(callback) {
        let swipersModel  = new SwipersModel();
        let homelistModel = new HomelistModel();
        let contentsModel = new ContentsModel();
        swipersModel.getAllSwipers(function (swipers) {
            homelistModel.gethomelistItem(function(homelistItem){
                contentsModel.FindContents(function(contents){
                    callback({swipers:swipers,homelistItem:homelistItem,contents:contents});
            });                     
            });     
            // callback(swipers);     
        });
    }
    
}
module.exports = HomesService;