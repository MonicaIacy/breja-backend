import supertest from "supertest";
import app from "../../../infrastructure/apis/app/app";

describe("Teste de products routes", ()=>{

    test("Recuperando todos os produtos", async ()=>{
        const res = await supertest(app).get("/products");
        expect(res.status).toBe(200)
    })
})
