import { Request, Response } from 'express';
import { InjectBean, Route, RouterBean } from 'express-beans';
import ExampleService from '@/services/ExampleService';

@RouterBean('/example')
export default class ExampleRouter {
  @InjectBean(ExampleService)
  private exampleService!: ExampleService;

  @Route('GET', '/hello')
  hello(_req: Request, res: Response) {
    res.end(this.exampleService.example());
  }
}
