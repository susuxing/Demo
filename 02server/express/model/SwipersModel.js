//引入模块
let SqlBase = require("./SqlBase");
class SwipersModel extends SqlBase {
  constructor() {
    super();
  }
  getAllSwipers(callback) {  
    let s = "select * from swipers";   
    this.connection.query(s, function(err, result) {
      if (err) {
        console.log("[查询] - ", err.message);
        return;
      }
      callback(result);
      console.log(result);
    });
  
  }
}

module.exports = SwipersModel;
