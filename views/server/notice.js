'use strict';
const Joi = require('joi');
const Notice = require('../../controller/notice')

exports.register = function (server, options, next) {

    server.route([{
        method: ['GET'],
        path: '/notice/{uid}',
        config: {
            description: '查看公告',
            notes: '返回公告的网页',
            tags: ['api', 'foo'], // 用于生成文档的路由标签
            validate: {
                params: {
                    uid:Joi.string().description('公告uid')
                }
            },
        },
        handler: async function (request, reply) {
            let uid = request.params.uid;
            let content = await Notice.getContentByUid(uid);
            var data = { content: content }
            reply.view('notice', data)
        }
    }]);
    next();
};

exports.register.attributes = {
    name: 'notice',
    version: '0.0.1',
    multiple: false,
};