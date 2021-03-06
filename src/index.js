const http = require('http');
const PORT = 3000;
const DEFAULT_HEADER = { 'Content-Type' : 'application/json' };
const HeroFactory = require('./factories/heroFactory');
const Hero = require('./entities/hero');
const heroService = HeroFactory.generateInstance();

const routes = {
    '/heroes:get': async (request, response) => {
        const { id } = request.queryString;
        const heroes = await heroService.find(id);
        response.write(JSON.stringify({ results: heroes }));
        return response.end();
    },
    '/heroes:post': async (request, response) => {
        for await (const data of request) {
            try {
                //Simular erro
                //await Promise.reject('/heroes:post');
                const item = JSON.parse(data);
                const hero = new Hero(item);
                const { error, valid } = hero.isValid();
                if(!valid) {
                    response.writeHead(400, DEFAULT_HEADER);
                    response.write(JSON.stringify({ error: error.join(',') }));
                    // só jogamos o retorno pois sabemos que é um objeto body por requisicao
                    // se fosse um arquivo, ele poderia chamar mais de uma vez, aí removeriamos o return
                    return response.end();
                }

                const id = await heroService.create(hero);
                response.writeHead(201, DEFAULT_HEADER);
                response.write(JSON.stringify({ success: 'User created with success!', id }));
                return response.end();
            } catch (err) {
                return handleError(response)(err);
            }

        }
    },
    default:  (request, response) => {
        response.write('hello!');
        response.end();
    }
}

const handleError = (response) => {
    return error => {
        console.error('Internal Error***', error)
        response.writeHead(500, DEFAULT_HEADER);
        response.write(JSON.stringify({ error: 'Internal Server Error!!!' }));

        response.end();
    };
}

const handler = (request, response) => {
    const { url, method } = request;
    const [first, route, id] = url.split('/');

    request.queryString = { id: isNaN(id) ? id : Number(id) };

    const key = `/${route}:${method.toLowerCase()}`;

    const chosen = routes[key] || routes.default;

    response.writeHead(200, DEFAULT_HEADER);

    return chosen(request, response).catch(handleError(response));
}

http.createServer(handler)
.listen(PORT, () => console.log('server running at', PORT));
