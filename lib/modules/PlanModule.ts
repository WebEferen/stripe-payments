import Module from '../abstracts/Module';

import IDeleted from '../interfaces/IDeleted';
import IError from '../interfaces/IError';
import IListOption from '../interfaces/IListOption';
import IOption from '../interfaces/IOption';
import IPlan from '../interfaces/IPlan';

export default class PlanModule extends Module {

  constructor(module: any) { super(module); }

  /**
   * Creates new plan
   * @param {IPlan} plan New plan object
   */
  public async create(plan: IPlan) {
    await super.create(plan, {});
    if (super.isError()) { return {success: false, error: super.getError() as IError}; }
    return {success: true, plan: super.getResult() as IPlan};
  }

  /**
   * Retrieve plan from the Stripe vault
   * @param {string} planId Plan unique index
   * @param {IOption} options Options (if provided)
   */
  public async retrieve(planId: string, options: IOption = {}) {
    await super.retrieve(planId, options);
    if (super.isError()) { return {success: false, error: super.getError() as IError}; }
    return {success: true, plan: super.getResult() as IPlan};
  }

  /**
   * Update plan in the Stripe vault
   * @param {string} planId Plan unique index
   * @param {IPlan} updatedObject Update for the plan
   */
  public async update(planId: string, updatedObject: IPlan) {
    await super.update(planId, updatedObject);
    if (super.isError()) { return {success: false, error: super.getError() as IError}; }
    return {success: true, plan: super.getResult() as IPlan};
  }

  /**
   * Deletes (safe) plan from the Stripe vault
   * @param {string} planId Plan unique index
   */
  public async delete(planId: string) {
    await super.delete(planId);
    if (super.isError()) { return {success: false, error: super.getError() as IError}; }
    return {success: true, plan: super.getResult() as IDeleted};
  }

  /**
   * Retrieve list of plans from the Stripe vault
   * @param {IListOption} listOptions Options for the listing
   */
  public async list(listOptions: IListOption) {
    await super.list(listOptions);
    if (super.isError()) { return {success: false, error: super.getError() as IError}; }
    return {success: true, plans: super.getResult()};
  }

}
