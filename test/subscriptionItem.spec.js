'use strict'
const chai = require('chai');
const expect = chai.expect;

const config = require('./config');
const mockups = config.mockups;

const modules = config.modules;
const subscriptionItems = modules.subscriptionItems;

const subscriptionItem = {id: ''};

describe('Subscription Items', () => {

  it('should NOT create subscriptionItem', async() => {
    const result = await subscriptionItems.create(mockups.subscriptionItem.invalid);
    expect(result.success).to.be.false;
  });

  it('should NOT retrieve subscriptionItem', async() => {
    const result = await subscriptionItems.retrieve(subscriptionItem.id);
    expect(result.success).to.be.false;
  });

  it('should NOT update subscriptionItem', async() => {
    const quantity = subscriptionItem.quantity;
    const result = await subscriptionItems.update(subscriptionItem.id, {quantity});
    expect(result.success).to.be.false;
  });

  it('should NOT cancel subscriptionItem', async() => {
    const result = await subscriptionItems.delete(subscriptionItem.id);
    expect(result.success).to.be.false;
  });

  it('should create subscriptionItem', async() => {
    const result = await subscriptionItems.create(mockups.subscriptionItem.valid);
    expect(result.subscriptionItem.subscription).to.be.equal(mockups.subscriptionItem.valid.subscription);
    expect(result.success).to.be.true;
    subscriptionItem.id = result.subscriptionItem.id;
  });

  it('should retrieve subscriptionItem', async() => {
    const result = await subscriptionItems.retrieve(subscriptionItem.id);
    expect(result.subscriptionItem.subscription).to.be.equal(mockups.subscriptionItem.valid.subscription);
    expect(result.success).to.be.true;
  });

  it('should update subscriptionItem', async() => {
    const quantity = 2;
    const result = await subscriptionItems.update(subscriptionItem.id, {quantity});
    expect(result.subscriptionItem.quantity).to.be.equal(quantity);
    expect(result.success).to.be.true;
  });

  it('should delete subscriptionItem', async() => {
    const result = await subscriptionItems.delete(subscriptionItem.id);
    expect(result.success).to.be.true;
  });

  it('should get subscriptionItems list', async() => {
    const subscription = {subscription: mockups.subscriptionItem.valid.subscription};
    const result = await subscriptionItems.list(subscription);
    expect(result.success).to.be.true;
    expect(result.subscriptionItems).to.be.greaterThan(0);
  });

});