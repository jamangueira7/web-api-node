const { describe, it } = require('mocha');
const request = require('supertest');
const app = require('./index');
const assert = require('assert');
const {join} = require("path");
const {writeFile} = require("fs/promises");

async function initialDB() {
    const fileName = join(__dirname, '../database', 'data.json');
    const initialContent = [{"id":1,"name":"Chapolim","age":38,"power":"sport"},{"id":2,"name":"Superman","age":45,"power":"strong"}];
    await writeFile(fileName, JSON.stringify(initialContent));
}

describe('API Suite test', () => {
    initialDB();
    describe('/default', () => {
        it('should request the default route', async () => {

            const response = await request(app)
                .get('/')
                .expect(200);

            const expect = { msg: 'Hello! Route does not exist!' };
            assert.deepStrictEqual(JSON.parse(response.text), expect);
        });
    });

    describe('/heroes', () => {
        it('should request the heroes page end return HTTP Status 200 and all heroes', async () => {

            const response = await request(app)
                .get('/heroes')
                .expect(200);

            const expect = {
                "results": [
                    {"id":1,"name":"Chapolim","age":38,"power":"sport"},{"id":2,"name":"Superman","age":45,"power":"strong"}
                ]
            };

            assert.deepStrictEqual(JSON.parse(response.text), expect);
        });

        it('should request the heroes page end return HTTP Status 200 and hero with id 1', async () => {

            const response = await request(app)
                .get('/heroes/1')
                .expect(200);

            const expect = {
                "results": {"id":1,"name":"Chapolim","age":38,"power":"sport"}
            };

            assert.deepStrictEqual(JSON.parse(response.text), expect);
        });

        it('should request the create heroes', async () => {

            const response = await request(app)
                .post('/heroes')
                .send({"name": "Batman","age": 35,"power": "Rich"})
                .expect(201);

            const expect = { "success":"User created with success!", "id":response.body.id };

            assert.deepStrictEqual(response.body, expect);
        });

        it('should request the create heroes JSON error invalid', async () => {

            const response = await request(app)
                .post('/heroes')
                .send({"namie": "Batman","age": 35,"power": "Rich"})
                .expect(400);


            const expect = {
                "error":"name is missing!"
            };

            assert.deepStrictEqual(JSON.parse(response.error.text), expect);
        });


    });
});