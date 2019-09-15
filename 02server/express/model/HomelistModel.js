//引入模块
let SqlBase = require("./SqlBase");
class HomelistModel extends SqlBase {
  constructor() {
    super();
  }
  gethomelistItem(callback) {   
    let homelist = "select * from homelist";  
    this.connection.query(homelist,function(err, result) {
      if (err) {
        console.log("[INSERT ERROR] - ", err.message);
        return;
      }
        callback(result);
       
    });
  }
}
module.exports = HomelistModel;