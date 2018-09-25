import * as stripe from 'stripe';

import CustomerModule from './modules/CustomerModule';
import PlanModule from './modules/PlanModule';
import ProductModule from './modules/ProductModule';
import SubscriptionItemModule from './modules/SubscriptionItemModule';
import SubscriptionModule from './modules/SubscriptionModule';
import TokenModule from './modules/TokenModule';

import IConfig from './interfaces/IConfig';

export default class Payments {

  private provider: any;
  private config: IConfig;

  /**
   * Initializer for the stripe bridge
   * @param {IConfig} paymentsConfig Stripe configuration
   */
  constructor(paymentsConfig: IConfig) {
    this.provider = stripe(paymentsConfig.private_key);
    this.config = paymentsConfig;
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

  /**
   * Token model
   */
  public tokens() {
    return new TokenModule(this.config);
  }

}
