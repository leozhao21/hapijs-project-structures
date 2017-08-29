const NoticeModel = require('../model/NoticeModel')

let Notice = {};

Notice.getContentByUid =  function (uid) {
    let content = NoticeModel.findOneByUId(uid);
    return content.get('content')
}




module.exports = Notice;