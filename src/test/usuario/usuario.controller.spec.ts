import * as request from 'supertest';
import {
  describe, expect, it, jest,
} from '@jest/globals';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../../app.module';
import { response } from 'express';


describe('Teste rotas UsuarioController', () => {

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

    it('/usuarios POST - Deve criar um usuário.', async() => {
        await request(app.getHttpServer())
            .post('/usuarios')
            .send({
                nome: 'Nome usuário',
                email: 'test@email.com',
                senha: 'abc123',
            })
            .expect(201);
    })

    it('/usuarios GET - Deve listar os usuários.', async() =>{
        await request(app.getHttpServer())
            .get('/usuarios')
            .expect(200);
    })
})