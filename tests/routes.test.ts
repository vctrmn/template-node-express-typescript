import request from 'supertest';
import app from '../src/app';

describe('Test default route', () => {
    it('Request / should return 204', async () => {
        const result = await request(app).get('/').send();
        expect(result.status).toBe(204);
    });
});

describe('Test not found route', () => {
    it('Request /request should return 200', async () => {
        const result = await request(app).get('/request?hello=world').send();
        expect(result.status).toBe(200);
        expect(result.body.payload).toStrictEqual({});
        expect(result.body.queryParams).toStrictEqual({ hello: 'world' });
    });
});

describe('Test not found route', () => {
    it('Request /request should return 200', async () => {
        const result = await request(app).post('/request?hello=world').send({ hello: 'world' });
        expect(result.status).toBe(200);
        expect(result.body.payload).toStrictEqual({ hello: 'world' });
        expect(result.body.queryParams).toStrictEqual({ hello: 'world' });
    });
});

describe('Test not found route', () => {
    it('Request /notfound should return 404', async () => {
        const result = await request(app).get('/notfound').send();
        expect(result.status).toBe(404);
    });
});
