//引入模块
let CourseModel = require("../model/CourseModel");
let ChaptersModel = require("../model/ChaptersModel");
let ContextsModel = require("../model/ContextsModel");
class CourseService {
    constructor() { }
    getheadItem(callback) {
        let courseModel = new CourseModel();
        let chaptersModel = new ChaptersModel();
        let GetContexts = new ContextsModel();
        // 获得数据
        // chaptersModel.getimgrls(function(imgUrls){
        //     callback({imgUrls:imgUrls});
        // });
        courseModel.getAllheadItem(function (headItem) {
            chaptersModel.getimgrls(function(imgUrls){
                GetContexts.FindContexts(function(contexts){
                    callback({imgUrls:imgUrls,headItem:headItem,contexts:contexts});
            });
                     
            });
          
        });
    }
}
module.exports = CourseService;