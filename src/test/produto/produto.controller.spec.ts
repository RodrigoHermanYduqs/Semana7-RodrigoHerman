import * as request from 'supertest';
import {
  describe, expect, it, jest,
} from '@jest/globals';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../../app.module';

describe('Teste rotas ProdutoController', () => {

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

    it('/produtos POST - Deve criar um produto.', async () => {
        await request(app.getHttpServer())
            .post('/produtos')
            .send({
                nome: 'Nome produto',
                valor: '10.0',
                quantidadeDisponivel: '1',
                descricao: 'descrição produto',
                caracteristicas : [
                    {
                        nome: 'caracteristica 1',
                        descricao: 'descricao caracteristica 1' 
                    },
                    {
                        nome: 'caracteristica 2',
                        descricao: 'descricao caracteristica 2' 
                    },
                ],
                imagens : [
                    {
                        url: 'http:\\',
                        descricao: 'imagem'
                    }
                ],
                categoria: 'categoria',
            })
            .expect(201);
    })

    it('/produtos GET - Deve listar os produtos.', async() =>{
        await request(app.getHttpServer())
            .get('/produtos')
            .expect(200);
    })

})