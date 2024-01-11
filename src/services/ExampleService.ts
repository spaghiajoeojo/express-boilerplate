import {
  Bean, Logger, InjectLogger, Setup,
} from 'express-beans';

@Bean
export default class ExampleService {
  private msg!: string;

  @InjectLogger('example')
  private logger!: Logger;

  @Setup
  init() {
    this.logger.debug('initializing msg field');
    this.msg = 'hello world!';
  }

  example() {
    return this.msg;
  }
}
