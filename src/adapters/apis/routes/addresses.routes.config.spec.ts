import supertest from "supertest"
import app from "../../../infrastructure/apis/app/app"

describe("Teste addresses route", ()=>{

    test("Recuperando endereço", async ()=>{
        const res = await supertest(app).get("/addresses/13088691")
        expect(res.status).toBe(200)
    })
})
