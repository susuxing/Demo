//引入模块
let SqlBase = require("./SqlBase");
class ContentsModel extends SqlBase {
  constructor() {
    super();
  }
  FindContents(callback) {
    let c = "select * from contents"; 
    this.connection.query(c, function(err, result) {
      if (err) {
        console.log("[查询] - ", err.message);
        return;
      }
      callback(result);
     
    });
  }
}

module.exports = ContentsModel;
