const NoticeDao = require('./dao/noticeDao');

/**
 * 根据uid查询公告信息
 * @param id
 * @returns {Promise.<Model>}
 */
const findOneByUId = (uid) => {
    return NoticeDao.findOne({
        attributes: ['content'],
        where: {uid: uid} });
}


module.exports = {
    findOneByUId:findOneByUId
}