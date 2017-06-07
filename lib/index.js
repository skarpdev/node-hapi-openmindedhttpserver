const Hapi = require('hapi');
const _ = require('lodash');

const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });

server.route({
  method: '*',
  path: '/{stuff*}',
  handler: (request, reply) => {
    console.log(`${request.method.toUpperCase()} ${request.path}`);

    const response = reply('hello');

    response.header('X-You-Called', request.url.format())
    response.header('X-Your-Method', request.method);

    _.keys(request.headers).forEach((x) => {
      const y = request.headers[x];
      response.header(`X-Your-Header-${x}`, y);
    });
  }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.info(`Server running at: ${server.info.uri}`);
});
