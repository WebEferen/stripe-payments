import to from 'await-to-js';

import IListOption from '../interfaces/IListOption';
import IOption from '../interfaces/IOption';

export default abstract class Module {

  public error: any;
  public result: any;
  private model: any;

  /**
   * Initialises model instance
   * @param {any} model Current model instance
   */
  constructor(model: any) {
    this.model = model;
  }

  /**
   * Instance getter
   */
  public instance() {
    return this.model;
  }

  /**
   * Create record in the Stripe vault
   * @param {any} creationObject Object with creation details
   * @param {IOption} options Optional options object
   */
  public async create(creationObject: any, options: IOption = {}) {
    [this.error, this.result] = await to(this.instance().create(creationObject, options));
    return this.result;
  }

  /**
   * Finds record based for the specific index key
   * @param {string} findingId Unique finding index
   * @param {IOption} options Optional options object
   */
  public async retrieve(findingId: string, options: IOption = {}) {
    [this.error, this.result] = await to(this.instance().retrieve(findingId, options));
    return this.result;
  }

  /**
   * Update specific record in the Stripe vault
   * @param {string} findingId Unique finding index
   * @param {any} updatedObject Object with update details
   */
  public async update(findingId: string, updatedObject: any) {
    [this.error, this.result] = await to(this.instance().update(findingId, updatedObject));
    return this.result;
  }

  /**
   * Deletes customer / invoice from the Stripes vault
   * @param {string} findingId Unique finding index
   */
  public async delete(findingId: string) {
    [this.error, this.result] = await to(this.instance().del(findingId));
    return this.result;
  }

  /**
   * List records from the Stripe model
   * @param {IListOption} options Listing options
   */
  public async list(options: IListOption) {
    [this.error, this.result] = await to(this.instance().list(options));
    return this.result;
  }

  /**
   * Gets query result
   */
  public getResult() {
    return this.result;
  }

  /**
   * Error checker
   */
  public isError() {
    return (this.error) ? true : false;
  }

  /**
   * Error getter
   */
  public getError() {
    return (this.isError()) ? this.error : null;
  }

}
