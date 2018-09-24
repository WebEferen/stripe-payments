'use strict'
const chai = require('chai');
const expect = chai.expect;

const config = require('./config');
const mockups = config.mockups;

const modules = config.modules;
const customers = modules.customers;

const customer = {id: mockups.subscription.customer.id, card: ''};

describe('Customer Cards', () => {

  it('should NOT attach card to the customer', async() => {
    const result = await customers.attachCard(customer.id, mockups.cardTokens.invalid.declined);
    expect(result.success).to.be.false;
  });

  it('should NOT retrieve card from the customer', async() => {
    const result = await customers.retrieveCard(customer.id, customer.card);
    expect(result.success).to.be.false;
  });

  it('should NOT update card from the customer', async() => {
    const result = await customers.updateCard(customer.id, customer.card, {name: 'John Doe'});
    expect(result.success).to.be.false;
  });

  it('should NOT list cards from the customer', async() => {
    const notExistingCustomer = 'not_existing';
    const result = await customers.listCards(notExistingCustomer);
    expect(result.success).to.be.false;
  });

  it('should NOT delete card from the customer', async() => {
    const result = await customers.deleteCard(customer.id, customer.card);
    expect(result.success).to.be.false;
  });
  
  it('should attach card to the customer', async() => {
    const result = await customers.attachCard(customer.id, mockups.cardTokens.valid.visa);
    expect(result.success).to.be.true;
    expect(result.card.brand).to.be.equal('Visa');
    expect(result.card.last4).to.be.equal('4242');
    customer.card = result.card.id;
  });

  it('should retrieve card from the customer', async() => {
    const result = await customers.retrieveCard(customer.id, customer.card);
    expect(result.success).to.be.true;
    expect(result.card.id).to.be.equal(customer.card);
    expect(result.card.brand).to.be.equal('Visa');
    expect(result.card.last4).to.be.equal('4242');
  });

  it('should update card from the customer', async() => {
    const name = 'John Doe';
    const result = await customers.updateCard(customer.id, customer.card, {name});
    expect(result.success).to.be.true;
    expect(result.card.id).to.be.equal(customer.card);
    expect(result.card.name).to.be.equal(name);
  });

  it('should list cards from the customer', async() => {
    const result = await customers.listCards(customer.id);
    expect(result.success).to.be.true;
    expect(result.cards.length).to.be.equal(1);
  });

  it('should delete card from the customer', async() => {
    const result = await customers.deleteCard(customer.id, customer.card);
    expect(result.success).to.be.true;
  });

});

