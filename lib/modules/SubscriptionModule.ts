import Module from '../abstracts/Module';

import IDeleted from '../interfaces/IDeleted';
import IError from '../interfaces/IError';
import IListOption from '../interfaces/IListOption';
import IOption from '../interfaces/IOption';
import ISubscription from '../interfaces/ISubscription';

export default class SubscriptionModule extends Module {

  constructor(module: any) { super(module); }

  /**
   * Creates new subscription
   * @param {ISubscription} subscription New subscription object
   */
  public async create(subscription: ISubscription) {
    await super.create(subscription, {});
    if (super.isError()) { return {success: false, error: super.getError() as IError}; }
    return {success: true, subscription: super.getResult() as ISubscription};
  }

  /**
   * Retrieve subscription from the Stripe vault
   * @param {string} subscriptionId Subscription unique index
   * @param {IOption} options Options (if provided)
   */
  public async retrieve(subscriptionId: string, options: IOption = {}) {
    await super.retrieve(subscriptionId, options);
    if (super.isError()) { return {success: false, error: super.getError() as IError}; }
    return {success: true, subscription: super.getResult() as ISubscription};
  }

  /**
   * Update subscription in the Stripe vault
   * @param {string} subscriptionId Subscription unique index
   * @param {ISubscription} updatedObject Update for the subscription
   */
  public async update(subscriptionId: string, updatedObject: ISubscription) {
    await super.update(subscriptionId, updatedObject);
    if (super.isError()) { return {success: false, error: super.getError() as IError}; }
    return {success: true, subscription: super.getResult() as ISubscription};
  }

  /**
   * Deletes subscription from the Stripe vault
   * @param {string} subscriptionId Subscription unique index
   */
  public async delete(subscriptionId: string) {
    await super.delete(subscriptionId);
    if (super.isError()) { return {success: false, error: super.getError() as IError}; }
    return {success: true, subscription: super.getResult() as IDeleted};
  }

  /**
   * Retrieve list of subscriptions from the Stripe vault
   * @param {IListOption} listOptions Options for the listing
   */
  public async list(listOptions: IListOption) {
    await super.list(listOptions);
    return {success: true, subscriptions: super.getResult().data};
  }

}
