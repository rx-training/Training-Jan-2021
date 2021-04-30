const request = require('supertest');
const mongoose = require('mongoose');
const { Brand } = require('../../models/brand.model');
const { Seller } = require('../../models/seller.model');

let server;

describe('/brands', () => {

    let seller = {
        sellerName: 'Nihar Sodhaparmar',
        email: 'niharsodha17@gmail.com',
        password: 'Nihar@17',
        contactNumber: '7202016399',
        dob: '05/21/2000',
        gender: 'M',
        address: {
            addressLine1: '6. Puneshwar Park',
            addressLine2: 'Nadiad',
            pincode: '387330',
            city: '60825ce8f0d00d44a0342def'
        }
    };

    let sellerres;
    let loginres;
    let token;

    beforeEach(async () => {
        server = require('../../index');
        sellerres = await request(server).post('/sellers').send(seller);
        loginres = await request(server).post('/login').send({ email: seller.email, password: seller.password, role: 'seller' });
        token = JSON.parse(loginres.text).jwtoken;
    });

    afterEach(async () => {
        await Brand.deleteMany({});
        await Seller.deleteMany({});
        server.close();
    });

    describe('GET /', () => {
        it('should return all brands', async () => {

            const brands = [
                { brandName: 'brand1' },
                { brandName: 'brand2' }
            ];

            await Brand.collection.insertMany(brands);

            const res = await request(server).get('/brands').set('x-access-token', token);

            expect(res.status).toBe(200);
            expect(res.body.length).toBe(2);
            expect(res.body.some(b => b.brandName === 'brand1'));
            expect(res.body.some(b => b.brandName === 'brand2'));
        });

        it('should return 401 if user is not logged in', async () => {

            const res = await request(server).get('/brands');

            expect(res.status).toBe(401);

        });
    });

    describe('GET /:id', () => {

        it('should return 401 if user not logged in', async () => {
            const res = await request(server).get('/brands/1');
            expect(res.status).toBe(401);
        });

        it('should return 404 if invalid id is passed', async () => {
            const res = await request(server).get('/brands/1').set('x-access-token', token);
            expect(res.status).toBe(404);
        });

        it('should return 404 if no brand with the given id exists', async () => {
            const id = mongoose.Types.ObjectId();
            const res = await request(server).get('/brands/' + id).set('x-access-token', token);
            expect(res.status).toBe(404);
        });

        it('should return a brand if valid id is passed', async () => {
            const brand = new Brand({ brandName: 'brand1' });
            await brand.save();

            const res = await request(server).get('/brands/' + brand._id).set('x-access-token', token);
            //console.log(res);

            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty('brandName', brand.brandName);
        });
    });

    describe('POST /', () => {

        it('should return 401 if user not logged in', async () => {
            const res = await request(server).post('/brands');
            expect(res.status).toBe(401);
        });

        it('should return 400 if brandName is not provided', async () => {
            const res = await request(server).post('/brands').set('x-access-token', token);
            expect(res.status).toBe(400);
        });

        it('should save the brand if it is valid', async () => {
            const res = await request(server).post('/brands').set('x-access-token', token).send({brandName: 'brand1'});

            const brand = await Brand.find({brandName: 'brand1'});

            expect(brand).not.toBeNull();
        });

        it('should return the brand if it is valid', async () => {
            const res = await request(server).post('/brands').set('x-access-token', token).send({brandName: 'brand1'});

            expect(res.body).toHaveProperty('_id');
            expect(res.body).toHaveProperty('brandName', 'brand1');
        });
    });

    describe('PUT /', () => {
        it('should return 401 if user not logged in', async () => {
            const res = await request(server).put('/brands/1');
            expect(res.status).toBe(401);
        });

        it('should return 404 if invalid id is passed', async () => {
            const res = await request(server).put('/brands/1').set('x-access-token', token);
            expect(res.status).toBe(404);
        });

        it('should return 404 if brandName is not passed', async () => {
            const id = mongoose.Types.ObjectId();
            const res = await request(server).put('/brands/' + id).set('x-access-token', token);
            expect(res.status).toBe(404);
        });

        it('should return 404 if no brand with the given id exists', async () => {
            const id = mongoose.Types.ObjectId();
            const res = await request(server).put('/brands/' + id).set('x-access-token', token).send({brandName: 'brand1'});
            expect(res.status).toBe(404);
        });

        it('should save new brandName in database if valid id and new brandName passed', async () => {
            const brand = new Brand({ brandName: 'brand1' });
            await brand.save();
            const res = await request(server).put('/brands/' + brand._id).set('x-access-token', token).send({brandName: 'newbrand1'});

            const newbrand = await Brand.find({brandName: 'newbrand1'});

            expect(newbrand).not.toBeNull();
        });

        it('should return a new brand if valid id and new brandName passed', async () => {
            const brand = new Brand({ brandName: 'brand1' });
            await brand.save();
            const res = await request(server).put('/brands/' + brand._id).set('x-access-token', token).send({brandName: 'newbrand1'});

            const newbrand = await Brand.find({brandName: 'newbrand1'});

            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty('_id');
            expect(res.body).toHaveProperty('brandName', 'newbrand1');
        });
    });

    describe('DEL /', () => {

        it('should return 401 if user not logged in', async () => {
            const res = await request(server).del('/brands/1');
            expect(res.status).toBe(401);
        });

        it('should return 404 if invalid id is passed', async () => {
            const res = await request(server).del('/brands/1').set('x-access-token', token);
            expect(res.status).toBe(404);
        });

        it('should return 404 if no brand with the given id exists', async () => {
            const id = mongoose.Types.ObjectId();
            const res = await request(server).del('/brands/' + id).set('x-access-token', token).send({brandName: 'brand1'});
            expect(res.status).toBe(404);
        });

        it('should return 200 if brand deleted', async () => {
            const brand = new Brand({ brandName: 'brand1' });
            await brand.save();
            const res = await request(server).del('/brands/' + brand._id).set('x-access-token', token).send({brandName: 'brand1'});
            expect(res.status).toBe(200);
        });
    });
})