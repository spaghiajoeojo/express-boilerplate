import { Request, Response } from 'express';
import { InjectBean, Route, RouterBean } from 'express-beans';
import { ExampleService } from '@/services/ExampleService';

@RouterBean('/example')
export class ExampleRouter {

  @InjectBean(ExampleService)
  exampleService: ExampleService;


  @Route('GET', '/hello')
  hello(_req: Request, res: Response) {
    res.end(this.exampleService.example());
  }
}
