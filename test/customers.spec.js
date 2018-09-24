'use strict'
const chai = require('chai');
const expect = chai.expect;

const config = require('./config');
const mockups = config.mockups;

const modules = config.modules;
const customers = modules.customers;

const customer = {id: '', tempId: ''};

describe('Customers', () => {

  it('should be a module', () => {
    expect(modules.hasOwnProperty('customers')).to.be.true;
    expect(customers).to.be.an('object');
  });

  it('should NOT create customer', async() => {
    const result = await customers.create(mockups.customer.invalid);
    expect(result.success).to.be.false;
    expect(result.error.type).to.be.equal('validation_error');
  });

  it('should NOT create customer (w/options)', async() => {
    const result = await customers.create(mockups.customer.valid, {expand: ['test']});
    expect(result.success).to.be.false;
  });

  it('should NOT retrieve customer', async() => {
    const result = await customers.retrieve(customer.id);
    expect(result.success).to.be.false;
  });

  it('should NOT update customer', async() => {
    const result = await customers.update(customer.id, mockups.customer.invalid);
    expect(result.success).to.be.false;
  });

  it('should NOT delete customer', async() => {
    const result = await customers.delete(customer.id);
    expect(result.success).to.be.false;
  });

  it('should create customer', async() => {
    const result = await customers.create(mockups.customer.valid);
    expect(result.success).to.be.true;
    expect(result.customer.id).to.be.an('string');
    expect(result.customer.metadata.firstName).to.be.equal(mockups.customer.valid.metadata.firstName);
    customer.id = result.customer.id;
  });

  it('should create customer (w/options)', async() => {
    const randomKey = (Math.random() * 10000).toFixed(0);
    const result = await customers.create(mockups.customer.valid, {idempotency_key: randomKey});
    expect(result.success).to.be.true;
    expect(result.customer.id).to.be.an('string');
    expect(result.customer.metadata.firstName).to.be.equal(mockups.customer.valid.metadata.firstName);
    customer.tempId = result.customer.id;
  });

  it('should retrieve customer', async() => {
    const result = await customers.retrieve(customer.id);
    expect(result.success).to.be.true;
    expect(result.customer.id).to.be.an('string');
    expect(result.customer.metadata.firstName).to.be.equal(mockups.customer.valid.metadata.firstName);
  });

  it('should retrieve customer (w/options)', async() => {
    const result = await customers.retrieve(customer.id, {expand: []});
    expect(result.success).to.be.true;
    expect(result.customer.id).to.be.an('string');
    expect(result.customer.metadata.firstName).to.be.equal(mockups.customer.valid.metadata.firstName);
  });

  it('should update customer', async() => {
    const updatedFirstName = 'John Jr';
    const updatedObject = {metadata: {firstName: updatedFirstName}};
    const result = await customers.update(customer.id, updatedObject);

    expect(result.success).to.be.true;
    expect(result.customer.id).to.be.an('string');
    expect(result.customer.metadata.firstName).to.be.equal(updatedFirstName);
  });

  it('should delete customer', async() => {
    const result = await customers.delete(customer.id);
    expect(result.success).to.be.true;
    expect(result.customer.deleted).to.be.true;
  });

  it('should delete customer (w/options)', async() => {
    const result = await customers.delete(customer.tempId);
    expect(result.success).to.be.true;
    expect(result.customer.deleted).to.be.true;
  });

  it('should list existing customers', async() => {
    const result = await customers.list();
    expect(result.success).to.be.true;
  });

  it('should list existing customers (w/options)', async() => {
    const result = await customers.list({limit: 3});
    expect(result.success).to.be.true;
  });

});