import { Bean, Logger, InjectLogger } from 'express-beans';

@Bean
export default class ExampleService {
  private msg: string;

  @InjectLogger('example')
  private logger!: Logger;

  constructor() {
    this.logger.debug('initializing msg field');
    this.msg = 'hello world!';
  }

  example() {
    return this.msg;
  }
}
