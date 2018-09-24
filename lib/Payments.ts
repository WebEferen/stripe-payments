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
   * @param {any} paymentsConfig Stripe configuration
   */
  constructor(paymentsConfig: any) {
    this.provider = stripe(paymentsConfig);
  }

  /**
   * Customers model
   */
  public customers() {
    return new CustomerModule(this.provider.customers);
  }

  /**
   * Subscriptions model
   */
  public subscriptions() {
    return new SubscriptionModule(this.provider.subscriptions);
  }

  /**
   * Plans model
   */
  public plans() {
    return new PlanModule(this.provider.plans);
  }

  /**
   * SubscriptionItems model
   */
  public subscriptionItems() {
    return new SubscriptionItemModule(this.provider.subscriptionItems);
  }

  /**
   * Products model
   */
  public products() {
    return new ProductModule(this.provider.products);
  }

}
