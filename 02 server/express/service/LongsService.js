//引入模块
let LongsModel = require("../model/LongsModel");
class LongsService {
  constructor() {}
  getLongsWithNavi( callback) {
    //创建对象
    let longsModel = new LongsModel();
    longsModel.getAllCourse(function(data) {
      callback(data);
    });
  }
}

module.exports = LongsService;
