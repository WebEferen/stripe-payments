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
   * Create record in the Stripe vault
   * @param {any} creationObject Object with creation details
   * @param {IOption} options Optional options object
   */
  public async create(creationObject: any, options: IOption) {
    if (!this.isEmpty(options)) { return await this.createWithOptions(creationObject, options); }
    [this.error, this.result] = await to(this.instance().create(creationObject));
    return this.error || this.result;
  }

  /**
   * Finds record based for the specific index key
   * @param {string} findingId Unique finding index
   * @param {IOption} options Optional options object
   * istanbul ignore next
   */
  public async retrieve(findingId: string, options: IOption) {
    if (!this.isEmpty(options)) { return await this.retrieveWithOptions(findingId, options); }
    [this.error, this.result] = await to(this.instance().retrieve(findingId));
    return this.error || this.result;
  }

  /**
   * Update specific record in the Stripe vault
   * @param {string} findingId Unique finding index
   * @param {any} updatedObject Object with update details
   */
  public async update(findingId: string, updatedObject: any) {
    [this.error, this.result] = await to(this.instance().update(findingId, updatedObject));
    return this.error || this.result;
  }

  /**
   * Deletes customer / invoice from the Stripes vault
   * @param {string} findingId Unique finding index
   */
  public async delete(findingId: string) {
    [this.error, this.result] = await to(this.instance().del(findingId));
    return this.error || this.result;
  }

  /**
   * List records from the Stripe model
   * @param {IListOption} options Listing options
   */
  public async list(options: IListOption = {}) {
    if (!this.isEmpty(options)) { return await this.listWithOptions(options); }
    [this.error, this.result] = await to(this.instance().list());
    return this.error || this.result.data;
  }

  /**
   * Method caller
   * @param method Method async
   */
  protected async call(method: any) {
    [this.error, this.result] = await to(method);
    return this.error || this.result;
  }

  /**
   * Instance getter
   */
  protected instance() {
    return this.model;
  }

  /**
   * Gets query result
   */
  protected getResult() {
    return this.result;
  }

  /**
   * Error checker
   */
  protected isError() {
    return (this.error) ? true : false;
  }

  /**
   * Error getter
   */
  protected getError() {
    return this.error;
  }

  /**
   * Creation helper
   * @param {any} creationObject Creation object
   * @param {IOption} options Options array
   */
  private async createWithOptions(creationObject: any, options: IOption) {
    [this.error, this.result] = await to(this.instance().create(creationObject, options));
    return this.error || this.result;
  }

  /**
   * Retrieve helper
   * @param {string} findingId Finding unique index
   * @param {IOption} options Options array
   */
  private async retrieveWithOptions(findingId: string, options: IOption) {
    [this.error, this.result] = await to(this.instance().retrieve(findingId, options));
    return this.error || this.result;
  }

  /**
   * Listing with options
   * @param {IListOption} options Options
   */
  private async listWithOptions(options: IListOption) {
    [this.error, this.result] = await to(this.instance().list(options));
    return this.error || this.result;
  }

  /**
   * Object empty checker
   * @param object Object for check
   */
  private isEmpty(object: any) {
    for (const key in object) {
      /* istanbul ignore next */
      if (object.hasOwnProperty(key)) { return false; }
    }
    return true;
  }
}
