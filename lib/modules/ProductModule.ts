import Module from '../abstracts/Module';

import IDeleted from '../interfaces/IDeleted';
import IError from '../interfaces/IError';
import IListOption from '../interfaces/IListOption';
import IOption from '../interfaces/IOption';
import IProduct from '../interfaces/IProduct';

export default class ProductModule extends Module {

  constructor(module: any) { super(module); }

  /**
   * Creates new product
   * @param {IProduct} product New product object
   */
  public async create(product: IProduct) {
    await super.create(product, {});
    if (super.isError()) { return {success: false, error: super.getError() as IError}; }
    return {success: true, product: super.getResult() as IProduct};
  }

  /**
   * Retrieve product from the Stripe vault
   * @param {string} productId Product unique index
   * @param {IOption} options Options (if provided)
   */
  public async retrieve(productId: string, options: IOption = {}) {
    await super.retrieve(productId, options);
    if (super.isError()) { return {success: false, error: super.getError() as IError}; }
    return {success: true, product: super.getResult() as IProduct};
  }

  /**
   * Update product in the Stripe vault
   * @param {string} productId Product unique index
   * @param {IProduct} updatedObject Update for the product
   */
  public async update(productId: string, updatedObject: IProduct) {
    await super.update(productId, updatedObject);
    if (super.isError()) { return {success: false, error: super.getError() as IError}; }
    return {success: true, product: super.getResult() as IProduct};
  }

  /**
   * Deletes (safe) product from the Stripe vault
   * @param {string} productId Product unique index
   */
  public async delete(productId: string) {
    await super.delete(productId);
    if (super.isError()) { return {success: false, error: super.getError() as IError}; }
    return {success: true, product: super.getResult() as IDeleted};
  }

  /**
   * Retrieve list of products from the Stripe vault
   * @param {IListOption} listOptions Options for the listing
   */
  public async list(listOptions: IListOption) {
    await super.list(listOptions);
    if (super.isError()) { return {success: false, error: super.getError() as IError}; }
    return {success: true, products: super.getResult()};
  }

}
