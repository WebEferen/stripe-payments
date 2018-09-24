'use strict'
const chai = require('chai');
const expect = chai.expect;

const config = require('./config');
const mockups = config.mockups;

const modules = config.modules;
const plans = modules.plans;

const plan = {id: ''};

describe('Plans', () => {

  it('should NOT create plan', async() => {
    const result = await plans.create(mockups.plan.invalid);
    expect(result.success).to.be.false;
  });

  it('should NOT retrieve plan', async() => {
    const result = await plans.retrieve(plan.id);
    expect(result.success).to.be.false;
  });

  it('should NOT update plan', async() => {
    const result = await plans.update(plan.id, {nickname: 'Some product'});
    expect(result.success).to.be.false;
  });

  it('should NOT delete plan', async() => {
    const result = await plans.delete(plan.id);
    expect(result.success).to.be.false;
  });

  it('should create plan', async() => {
    const result = await plans.create(mockups.plan.valid);
    expect(result.success).to.be.true;
    expect(result.plan.nickname).to.be.equal(mockups.plan.valid.nickname);
    expect(result.plan.currency).to.be.equal(mockups.plan.valid.currency);
    plan.id = result.plan.id;
  });

  it('should retrieve plan', async() => {
    const result = await plans.retrieve(plan.id);
    expect(result.success).to.be.true;
    expect(result.plan.currency).to.be.equal(mockups.plan.valid.currency);
  });

  it('should update plan', async() => {
    const nickname = 'Common Analytics Plan (per Month)';
    const result = await plans.update(plan.id, {nickname});
    expect(result.success).to.be.true;
    expect(result.plan.nickname).to.be.equal(nickname);
  });

  it('should delete plan', async() => {
    const result = await plans.delete(plan.id);
    expect(result.success).to.be.true;
  });

  it('should list plans', async() => {
    const result = await plans.list();
    expect(result.success).to.be.true;
    expect(result.plans.length).to.be.greaterThan(0);
  });

});