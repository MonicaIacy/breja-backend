import supertest from 'supertest'
import app from '../../../infrastructure/apis/app/app'

describe("Products routes", () => {
  test("get all products", async () => {
    const res = await supertest(app).get("/products")
    expect(res.status).toBe(200)
  })
})
