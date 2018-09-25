'use strict'
const chai = require('chai');
const expect = chai.expect;

const config = require('./config');
const modules = config.modules;
const tokens = modules.tokens;

describe('Tokens', () => {

  it('should get publishable key', async() => {
    const result = await tokens.generate();
    expect(result.success).to.be.true;
    expect(result.token).to.be.an('string');
  });

});