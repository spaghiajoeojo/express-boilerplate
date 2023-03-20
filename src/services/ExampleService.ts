class ExampleService {
  private msg: string;

  constructor() {
    this.msg = 'hello world!';
  }

  example() {
    return this.msg;
  }
}

let service: ExampleService;

const useExampleService = () => {
  if (!service) {
    service = new ExampleService();
  }
  return service;
};

export { useExampleService, ExampleService };
