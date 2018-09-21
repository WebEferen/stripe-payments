import * as stripe from 'stripe';

import CustomerModule from './modules/CustomerModule';
import PlanModule from './modules/PlanModule';
import ProductModule from './modules/ProductModule';
import SubscriptionItemModule from './modules/SubscriptionItemModule';
import SubscriptionModule from './modules/SubscriptionModule';

export default class Payments {

  private provider: any;

  /**
   * Initializer for the stripe bridge
   * @param paymentsConfig Stripe configuration
   */
  constructor(paymentsConfig: any) {
    this.provider = stripe(paymentsConfig);
  }

  /**
   * Gets specific module
   * @param moduleName Module specific name (e.g. customers | subscriptions | plans | invoices)
   */
  public getModule(moduleName: string) {
    const model = (this.provider[moduleName]) ? this.provider[moduleName] : null;
    switch (model) {
      case 'customers':
        return new CustomerModule(model);
      case 'subscriptions':
        return new SubscriptionModule(model);
      case 'plans':
        return new PlanModule(model);
      case 'subscriptionItems':
        return new SubscriptionItemModule(model);
      case 'product':
        return new ProductModule(model);
    }

    return undefined;
  }

}
