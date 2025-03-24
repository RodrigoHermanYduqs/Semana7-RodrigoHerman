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

describe('Teste rota POST em /produtos', () => {
    it('Deve criar um produto.', async () => {
        await request(app)
            .post('/produtos')
            .send({
                nome: 'Nome produto',
                valor: '10.0',
                quantidadeDisponivel: "1",
                descricao: "descrição produto",
                caracteristicas : [
                    {
                        nome: "caracteristica 1",
                        descricao: "descricao caracteristica 1" 
                    },
                    {
                        nome: "caracteristica 2",
                        descricao: "descricao caracteristica 2" 
                    },
                ],
                imagens : [
                    {
                        url: "http:\\",
                        descricao: "imagem"
                    }
                ],
                categoria: 'categoria',
            })
            .expect(201);
    })
})

describe('Teste rota GET em /produtos', () => {
    it('Deve listar os usuários.', async() =>{
        await request(app)
            .get('/produtos')
            .expect(200);
    })
})