import * as _ from 'lodash';

export default abstract class Validator {

  public verifyPattern: string[];
  public modelToVerify: object;
  private errorMessage: string = '';
  private errorType: string = '';

  constructor(modelToVerify: object, verifyPattern: string[] = []) {
    this.modelToVerify = modelToVerify;
    this.verifyPattern = verifyPattern;
  }

  public setVerifyPattern(pattern: string[]) {
    this.verifyPattern = pattern;
  }

  public isOk() {
    const modelKeys: string[] = _.keys(this.modelToVerify);
    const difference = this.checkIsOk(_.difference(this.verifyPattern, modelKeys));
    return (difference.length > 0) ? false : true;
  }

  public getErrors() {
    return {type: this.errorType, message: this.errorMessage};
  }

  private checkIsOk(difference: string[]) {
    if (difference.length > 0) {
      this.errorType = 'validation_error';
      this.errorMessage = 'Fields: [' + difference.join(',') + '] are required!';
    }
    return difference;
  }
}
