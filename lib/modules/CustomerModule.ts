import Module from '../abstracts/Module';

import ICard from '../interfaces/ICard';
import ICustomer from '../interfaces/ICustomer';
import IError from '../interfaces/IError';
import IListOption from '../interfaces/IListOption';
import IOption from '../interfaces/IOption';

export default class CustomerModule extends Module {

  /**
   * Constructor
   * @param module Customer module instance
   */
  constructor(module: any) { super(module); }

  /**
   * Create customer in the Stripe vault
   * @param {ICustomer} customerDetails New customer details
   * @param {IOption} options Options (if provided)
   */
  public async create(customerDetails: ICustomer, options: IOption = {}) {
    await super.create(customerDetails, options);
    if (super.isError()) { return {success: false, error: super.getError() as IError}; }
    return {success: true, customer: super.getResult() as ICustomer};
  }

  /**
   * Retrieve customer from the Stripe vault
   * @param {string} customerId Customer unique index
   * @param {IOption} options Options (if provided)
   */
  public async retrieve(customerId: string, options: IOption = {}) {
    await super.retrieve(customerId, options);
    if (super.isError()) { return {success: false, error: super.getError() as IError}; }
    return {success: true, customer: super.getResult() as ICustomer};
  }

  /**
   * Update customer in the Stripe vault
   * @param {string} customerId Customer unique index
   * @param {ICustomer} updatedObject Update for the customer
   */
  public async update(customerId: string, updatedObject: ICustomer) {
    await super.update(customerId, updatedObject);
    if (super.isError()) { return {success: false, error: super.getError() as IError}; }
    return {success: true, customer: super.getResult() as ICustomer};
  }

  /**
   * Deletes (safe) customer from the Stripe vault
   * @param {string} customerId Customer unique index
   */
  public async delete(customerId: string) {
    await super.delete(customerId);
    if (super.isError()) { return {success: false, error: super.getError() as IError}; }
    return {success: true, customer: super.getResult() as ICustomer};
  }

  /**
   * Retrieve list of customers from the Stripe vault
   * @param {IListOption} listOptions Options for the listing
   */
  public async list(listOptions: IListOption) {
    await super.list(listOptions);
    if (super.isError()) { return {success: false, error: super.getError() as IError}; }
    return {success: true, customers: super.getResult()};
  }

  /**
   * Creates a card node for the existing customer
   * @param {string} customerId Customer unique index
   * @param {string} source Source from the StripeJS
   */
  public async attachCard(customerId: string, source: string) {
    await super.instance().createSource(customerId, {source});
    if (super.isError()) { return {success: false, error: super.getError() as IError}; }
    return {success: true, card: super.getResult() as ICard};
  }

  /**
   * Retrieves card details for the specific customer
   * @param {string} customerId Customer unique index
   * @param {string} cardId Card unique index
   */
  public async retrieveCard(customerId: string, cardId: string) {
    await super.instance().retrieveCard(customerId, cardId);
    if (super.isError()) { return {success: false, error: super.getError() as IError}; }
    return {success: true, card: super.getResult() as ICard};
  }

  /**
   * Update existing card details
   * @param {string} customerId Customer unique index
   * @param {string} cardId Card unique index
   * @param {ICard} updatedCard Updated card model
   */
  public async updateCard(customerId: string, cardId: string, updatedCard: ICard = {}) {
    await super.instance().updateCard(customerId, cardId, updatedCard);
    if (super.isError()) { return {success: false, error: super.getError() as IError}; }
    return {success: true, card: super.getResult() as ICard};
  }

  /**
   * Deletes specific card from specific customer
   * @param {string} customerId Customer unique index
   * @param {string} cardId Card unique index
   */
  public async deleteCard(customerId: string, cardId: string) {
    await super.instance().deleteCard(customerId, cardId);
    if (super.isError()) { return {success: false, error: super.getError() as IError}; }
    return {success: true, card: super.getResult() as ICard};
  }

  /**
   * Return all of the cards for specific customer
   * @param {string} customerId Customer unique index
   */
  public async listCards(customerId: string) {
    await super.instance().listCards(customerId);
    if (super.isError()) { return {success: false, error: super.getError() as IError}; }
    return {success: true, cards: super.getResult()};
  }

}
