import Module from '../abstracts/Module';

export default class TokenModule extends Module {

  constructor(module: any) { super(module); }

  /**
   * Generates payment token
   */
  public async generate() {
    return {success: true, token: super.instance().public_key};
  }

}
