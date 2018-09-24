'use strict'
const chai = require('chai');
const expect = chai.expect;

const config = require('./config');
const mockups = config.mockups;

const modules = config.modules;
const subscriptions = modules.subscriptions;

const subscription = {id: ''};

describe('Subscriptions', () => {

  it('should NOT create subscription', async() => {
    const result = await subscriptions.create(mockups.subscription.invalid);
    expect(result.success).to.be.false;
  });

  it('should NOT retrieve subscription', async() => {
    const result = await subscriptions.retrieve(subscription.id);
    expect(result.success).to.be.false;
  });

  it('should NOT update subscription', async() => {
    const metadata = {metadata: {'test': 'test'}};
    const result = await subscriptions.update(subscription.id, {metadata});
    expect(result.success).to.be.false;
  });

  it('should NOT cancel subscription', async() => {
    const result = await subscriptions.delete(subscription.id);
    expect(result.success).to.be.false;
  });

  it('should create subscription', async() => {
    const result = await subscriptions.create(mockups.subscription.valid);
    expect(result.subscription.customer).to.be.equal(mockups.subscription.valid.customer);
    expect(result.success).to.be.true;
    subscription.id = result.subscription.id;
  });

  it('should retrieve subscription', async() => {
    const result = await subscriptions.retrieve(subscription.id);
    expect(result.subscription.customer).to.be.equal(mockups.subscription.valid.customer);
    expect(result.success).to.be.true;
  });

  it('should update subscription', async() => {
    const tax_percent = 10;
    const result = await subscriptions.update(subscription.id, {tax_percent});
    expect(result.subscription.tax_percent).to.be.equal(tax_percent);
    expect(result.success).to.be.true;
  });

  it('should cancel subscription', async() => {
    const result = await subscriptions.delete(subscription.id);
    expect(result.success).to.be.true;
  });

  it('should get subscriptions list', async() => {
    const result = await subscriptions.list();
    expect(result.success).to.be.true;
    expect(result.subscriptions.length).to.be.greaterThan(0);
  });

});