import Module from '../abstracts/Module';

import IDeleted from '../interfaces/IDeleted';
import IError from '../interfaces/IError';
import IListOption from '../interfaces/IListOption';
import IOption from '../interfaces/IOption';
import ISubscriptionItem from '../interfaces/ISubscriptionItem';

export default class SubscriptionItemModule extends Module {

  constructor(module: any) { super(module); }

  /**
   * Creates new subscription item
   * @param {ISubscriptionItem} subscriptionItem New subscription item object
   */
  public async create(subscriptionItem: ISubscriptionItem) {
    await super.create(subscriptionItem);
    if (super.isError()) { return {success: false, error: super.getError() as IError}; }
    return {success: true, subscriptionItem: super.getResult() as ISubscriptionItem};
  }

  /**
   * Retrieve subscription item from the Stripe vault
   * @param {string} subscriptionItemId Subscription item unique index
   * @param {IOption} options Options (if provided)
   */
  public async retrieve(subscriptionItemId: string, options: IOption = {}) {
    await super.retrieve(subscriptionItemId, options);
    if (super.isError()) { return {success: false, error: super.getError() as IError}; }
    return {success: true, subscriptionItem: super.getResult() as ISubscriptionItem};
  }

  /**
   * Update subscription item in the Stripe vault
   * @param {string} subscriptionItemId Subscription item unique index
   * @param {ISubscriptionItem} updatedObject Update for the subscription item
   */
  public async update(subscriptionItemId: string, updatedObject: ISubscriptionItem) {
    await super.update(subscriptionItemId, updatedObject);
    if (super.isError()) { return {success: false, error: super.getError() as IError}; }
    return {success: true, subscriptionItem: super.getResult() as ISubscriptionItem};
  }

  /**
   * Deletes subscription item from the Stripe vault
   * @param {string} subscriptionItemId Subscription item unique index
   */
  public async delete(subscriptionItemId: string) {
    await super.delete(subscriptionItemId);
    if (super.isError()) { return {success: false, error: super.getError() as IError}; }
    return {success: true, subscriptionItem: super.getResult() as IDeleted};
  }

  /**
   * Retrieve list of subscription items from the Stripe vault
   * @param {IListOption} listOptions Options for the listing
   */
  public async list(listOptions: IListOption) {
    await super.list(listOptions);
    if (super.isError()) { return {success: false, error: super.getError() as IError}; }
    return {success: true, subscriptionItems: super.getResult()};
  }

}
