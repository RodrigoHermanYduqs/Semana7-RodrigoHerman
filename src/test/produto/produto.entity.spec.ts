import {
    describe, expect, it, jest,
  } from '@jest/globals';
import { ProdutoEntity } from "../../produto/produto.entity"
import { v4 as uuid } from 'uuid';

describe('Teste modelo produto', () => {
  let produto : ProdutoEntity;
  let produto_uuid : string;

  beforeEach(() => {
    produto_uuid = uuid();

    produto = new ProdutoEntity();
    produto.id = produto_uuid;
    produto.nome = 'Nome produto';
    produto.valor = 10.1;
    produto.quantidadeDisponivel = 1;
    produto.descricao = 'descrição produto';
    produto.caracteristicas = [];
    produto.imagens = [];
    produto.categoria = 'categoria';
  });

  it('Produto deve ter um id gerado', () => {
    expect(produto.id).toBe(produto_uuid);
  }); 

  it('Produto deve ter um nome', () => {
    expect(produto.nome).toBe('Nome produto');
  });

  it('Produto deve ter um valor numérico maior que zero', () => {
    expect(produto.valor).toBeGreaterThan(0);
  });

  it('Produto deve ter um valor', () => {
    expect(produto.valor).toBe(10.1);
  });

  it('Produto deve ter quantidade disponível maior ou igual a zero', () => {
    expect(produto.quantidadeDisponivel).toBeGreaterThanOrEqual(0);
  });

  it('Produto deve ter quantidade disponível', () => {
    expect(produto.quantidadeDisponivel).toBe(1);
  });

  it('Produto deve ter descrição', () => {
    expect(produto.descricao).toBe('descrição produto');
  });

  it('Produto deve ter caracteristicas', () => {
    expect(produto.caracteristicas).toBeInstanceOf(Array);
  });

  it('Produto deve ter imagens', () => {
    expect(produto.imagens).toBeInstanceOf(Array);
  });

  it('Produto deve ter categoria', () => {
    expect(produto.categoria).toBe('categoria');
  });

})