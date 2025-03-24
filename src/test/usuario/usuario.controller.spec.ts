import request from 'supertest';
import {
  describe, expect, it, jest,
} from '@jest/globals';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../../app.module';

let app: INestApplication;
beforeAll(async () => {
  const moduleFixure: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();

  app = moduleFixure.createNestApplication();
  await app.init();
});

afterAll(async () => {
    await app.close();
  });

describe('Teste rota POST em /usuarios', () => {
    it('Deve criar um usuário.', async () => {
        await request(app)
            .post('/usuarios')
            .send({
                nome: 'Nome usuário',
                email: 'test@email.com',
                senha: 'abc123',
            })
            .expect(201);
    })
})

describe('Teste rota GET em /usuarios', () => {
    it('Deve listar os usuários.', async() =>{
        await request(app)
            .get('/usuarios')
            .expect(200);
    })
})