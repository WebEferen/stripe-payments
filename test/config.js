const token = 'sk_test_q0IPxgiZsOsTVYMPyVobBife';

const cardTokens = {
  valid: {
    visa: 'tok_visa',
    visaDebit: 'tok_visa_debit',
    mastercard: 'tok_mastercard',
    mastercardDebid: 'tok_mastercard_debit',
    amex: 'tok_amex',
    discover: 'tok_discover',
    diners: 'tok_diners',
    jcb: 'tok_jcb',
    unionpay: 'tok_unionpay'
  },
  invalid: {
    avsFail: 'tok_avsFail',
    avsLine1Fail: 'tok_avsLine1Fail',
    cvcCheckFail: 'tok_cvcCheckFail',
    declined: 'tok_chargeDeclined',
    declinedInsufficientFunds: 'tok_chargeDeclinedInsufficientFunds'
  }
};

const customer = {
  valid: {
    description: 'M. Makowski (5aa65202f97621ef2d6a136a)',
    email: 'm.makowski@adtype.com',
    metadata: {
      clientId: '5aa65202f97621ef2d6a136a',
      firstName: 'John',
      lastName: 'Doe',
      company: 'Vineyards',
      streetAddress: 'Somestreet',
      locality: 'London',
      region: 'London',
      postalCode: 'SW11 3TZ',
      countryName: 'Great Britain',
      countryCodeAlpha2: 'GB'
    },
    source: cardTokens.valid.visa
  },
  invalid: {
    description: 'John Doe (5aa65202f97621ef2d6a136a)'
  }
};

const subscription = {
  customer: {
    id: 'cus_De5jUu83xWswKO'
  }
};










// Rest of the configuration
const payments = require('../dist').payments(token);

const modules = {
  customers: payments.customers(),
  subscriptionItems: payments.subscriptionItems(),
  subscriptions: payments.subscriptions(),
  products: payments.products(),
  plans: payments.plans()
};

const mockups = {customer, subscription, cardTokens};
module.exports = {mockups, modules};
