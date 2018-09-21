'use strict'
const chai = require('chai');
const expect = chai.expect;

const config = require('./config');

const payments = require('../dist').payments(config.settings.token);