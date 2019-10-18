const request = require("supertest");
const server = require("./server.js");
const authRoute = require("../auth/auth-router");
const Users = require("../auth/auth-model");
const db = require("../database/dbConfig.js");
const jokes = require("../jokes/jokes-router.js");

// describe("router /api/register", () => {
//     const expectedStatusCode = 200;
//     const response = request(server).get("/api/register");
//     expect(response.status).not.toBeDefined();
// })

describe("auth model", () => {
    beforeEach(async () => {
        await db("users").truncate();
    })

    describe("register user", () => {
        it ("should register a user", async () => {
            
            await Users.add({ username: "b", password: "ya"})
            const users = await db("users");
            let i = users.length;
            expect(users).toHaveLength(i++);
            expect(users);
        
            
        })
    })

    describe("login user", () => {
        it("should login a user", async () => {
            const username = { username: "b"}
            await Users.findBy()
            const users = await db("users").where(username)
            expect(users).toHaveLength(1);
        })
    })


});

describe("jokes router", () => {
    it ("you get a 400 error when you try to get in without header", async () => {
        return await request(server).get("/api/jokes").expect(400);
        
    })

    it(" returns a json object", () => {
        const response = request(server).get("/api/jokes");
        expect(response.type);
    })
})