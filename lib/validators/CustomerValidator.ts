import Validator from '../abstracts/Validator';

export default class CustomerValidator extends Validator {

  public verifyPattern = ['description', 'email'];

  constructor(modelToVerify: object) {
    super(modelToVerify);
    super.setVerifyPattern(this.verifyPattern);
  }
}
