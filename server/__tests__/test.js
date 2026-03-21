const request = require('supertest')
const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')
const app = require('../app')
const User = require('../models/userModel')

let mongoServer

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create()
  await mongoose.connect(mongoServer.getUri())
})

afterAll(async () => {
  await mongoose.disconnect()
  await mongoServer.stop()
})

afterEach(async () => {
  await User.deleteMany({})
})

describe('Auth API Endpoints', () => {
  const validUser = {
    username: 'testuser',
    password: 'password123',
    email: 'test@example.com',
    role: 'buyer',
  }

  /* --- SIGNUP TESTS --- */

  test('SUCCESS: Should register a new user and return 201', async () => {
    const res = await request(app).post('/api/auth/signup').send(validUser)

    expect(res.status).toBe(201)
    expect(res.body.user).toHaveProperty('id')
    expect(res.body.user.username).toBe(validUser.username)
    expect(res.body.user.role).toBe('buyer')
    expect(res.body.user.hashedPassword).toBeUndefined()
  })

  test('FAILURE: Should not allow duplicate emails', async () => {
    await request(app).post('/api/auth/signup').send(validUser)

    // Try to signup again with same email
    const res = await request(app)
      .post('/api/auth/signup')
      .send({
        username: 'otheruser',
        password: 'password456',
        email: 'test@example.com',
        role: 'seller',
      })

    expect(res.status).toBe(400)
  })

  /* --- LOGIN TESTS --- */

  test('SUCCESS: Should login and return a token', async () => {
    // Manually create user (this triggers the 'save' hook for hashing)
    await request(app).post('/api/auth/signup').send(validUser)

    const res = await request(app).post('/api/auth/login').send({
      email: 'test@example.com',
      password: 'password123',
    })

    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty('token')
  })

  test('FAILURE: Should reject wrong password', async () => {
    await request(app).post('/api/auth/signup').send(validUser)

    const res = await request(app).post('/api/auth/login').send({
      email: 'test@example.com',
      password: 'wrongpassword',
    })

    expect(res.status).toBe(400)
    expect(res.body.token).toBeUndefined()
  })

  test('FAILURE: Should reject non-existent email', async () => {
    const res = await request(app).post('/api/auth/login').send({
      email: 'nobody@example.com',
      password: 'password123',
    })

    expect(res.status).toBe(400)
  })
})
