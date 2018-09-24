'use strict'
const chai = require('chai');
const expect = chai.expect;

const config = require('./config');
const mockups = config.mockups;

const modules = config.modules;
const products = modules.products;

const product = {id: ''};

describe('Products', () => {

  it('should NOT create product', async() => {
    const result = await products.create(mockups.product.invalid);
    expect(result.success).to.be.false;
  });

  it('should NOT retrieve product', async() => {
    const result = await products.retrieve(product.id);
    expect(result.success).to.be.false;
  });

  it('should NOT update product', async() => {
    const name = 'service';
    const result = await products.update(product.id, {name});
    expect(result.success).to.be.false;
  });

  it('should NOT delete product', async() => {
    const result = await products.delete(product.id);
    expect(result.success).to.be.false;
  });

  it('should create product', async() => {
    const result = await products.create(mockups.product.valid);
    expect(result.success).to.be.true;
    product.id = result.product.id;
  });

  it('should retrieve product', async() => {
    const result = await products.retrieve(product.id);
    expect(result.success).to.be.true;
  });

  it('should update product', async() => {
    const name = 'service';
    const result = await products.update(product.id, {name});
    expect(result.success).to.be.true;
  });

  it('should delete product', async() => {
    const result = await products.delete(product.id);
    expect(result.success).to.be.true;
  });

  it('should list products', async() => {
    const result = await products.list();
    expect(result.success).to.be.true;
    expect(result.products.length).to.be.greaterThan(0);
  });

});