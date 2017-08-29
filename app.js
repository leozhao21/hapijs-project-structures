'use strict';

const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const hapiAuthJwt = require('hapi-auth-jwt');
const Handlebars = require('handlebars');

const swaggerConfig = require('./conf/swagger.config');
const goodConfig = require('./conf/good.config');
const jwtOptions = require('./conf/jwt.config').options;
const service = require('./service/index');
const views = require('./views/server/index');
const server = new Hapi.Server();

server.connection({
    port: 4000,
    routes: {
        cors: {
            origin: ['*'],
            additionalHeaders: ["X-Requested-With"]
        }
    }
});

//register token plugin, server router must be effective in hapiAuthJwt
server.register(hapiAuthJwt, (err)=>{
    if (err) {
        console.error('Failed to load a plugin:', err);
    }else{
        server.auth.strategy('token', 'jwt', jwtOptions);

        //register route api
        server.register(service, {routes: {prefix: swaggerConfig.basePath}}, (err) => {
            if (err) {
                console.error('Failed to load a plugin:', err);
            }
        });

    }
});


server.register(Vision, function (err) {
    if (err) {
        console.log('Cannot register vision')
    }

    // configure template support
    server.views({
        engines: {
            html: Handlebars
        },
        path: __dirname + '/views/html'
    })
})

server.register(views, {routes: {prefix: '/kkcredit/views'}}, (err) => {
    if (err) {
        console.error('Failed to load a plugin:', err);
    }
});


//register api docment
server.register([Inert,Vision,{
        'register': HapiSwagger,
        'options': swaggerConfig
    }], (err) => {
        if (err) {console.log(err);}
    });

//register good log plugin
server.register({
        register: require('good'),
        options:goodConfig
    }, (err) => {
        if (err) {console.log(err);}
    });

//defined response result
const handler = function (request, reply) {
    var obj ={
        "statusCode": 404,
        "error": "Not Found",
        "message": "您访问的是一个不存在的链接地址"
    }
    return reply(obj).code(404);
};
server.route({ method: '*', path: '/{p*}', handler: handler });

// Start the server
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});

