var jwt = require('jsonwebtoken');

var privateKey = 'ShangHaiKaKaDaiOfkakaMMS';

var getNewToken = (userId,roleId) => {
    return 'Bearer '+jwt.sign({ userId: userId, roleId:roleId }, privateKey, { algorithm: 'HS256'})
}


var validate = function (request, decodedToken, callback) {
    let userId = decodedToken.userId,
        roleId = decodedToken.roleId;

    if (!userId || !roleId) {
        return callback(null, false, {flag:0,Msg:"错误的token"});
    }
    return callback(null, true, {
        flag:1, newToken:getNewToken(userId, roleId),
        decodedToken});
};

let options = {
    key: privateKey,
    validateFunc: validate,
    verifyOptions: {
        algorithms: ['HS256'],
        ignoreExpiration: false,
        maxAge: '35m'
    }
}
module.exports = {
    options:options,
    getNewToken:getNewToken
};
