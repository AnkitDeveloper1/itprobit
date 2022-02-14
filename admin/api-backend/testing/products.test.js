const request = require("supertest");
const mongoose = require("mongoose");
const {User} = require("../models/user");
const path = require("path");

let server;
describe('/api/products', () => {
    beforeEach( () => { server = require("../server"); });
    afterEach(() => { server.close(); });

    const categoryId = mongoose.Types.ObjectId();
    const added_by = mongoose.Types.ObjectId();
    let token;

    describe("POST /", () => {
        it("should return 401 if client is not logged in", async () => {
            const res = await request(server)
                .post("/api/products")
                .send({
                    categoryId: String(categoryId),
                    name: "Product 1",
                    featuredImage: "test.jpg",
                    added_by: String(added_by)
                });
            expect(res.status).toBe(401);
        })

        
        it("should return all products if client is logged in", async () => {
            let token = new User().generateAuthToken();
            const file_u = path.resolve(__dirname, `./test.jpeg`);
            const res = await request(server)
                .post("/api/products")
                .set("Content-Type", "multipart/form-data")
                .set("x-auth-token", token)
                .field("name", "Product 1")
                .attach("featuredImage", file_u);
            
            expect(res.body.success).toBe(true);
        })
    })
})
