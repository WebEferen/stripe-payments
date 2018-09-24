'use strict'
const chai = require('chai');
const expect = chai.expect;

const config = require('./config');
const modules = config.modules;

describe('Payments module', () => {

  it('should have customers module', () => {
    expect(modules.hasOwnProperty('customers')).to.be.true;
  });

  it('should have subscriptions module', () => {
    expect(modules.hasOwnProperty('subscriptions')).to.be.true;
  });

  it('should have subscriptionItems module', () => {
    expect(modules.hasOwnProperty('subscriptionItems')).to.be.true;
  });

  it('should have plans module', () => {
    expect(modules.hasOwnProperty('plans')).to.be.true;
  });

  it('should have products module', () => {
    expect(modules.hasOwnProperty('products')).to.be.true;
  });

  it('should NOT have undefined module', () => {
    expect(modules.hasOwnProperty('undefined')).to.be.false;
  });

});