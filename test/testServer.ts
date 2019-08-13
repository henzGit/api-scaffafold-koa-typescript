import * as Koa from 'koa';
import * as config from 'config';
import { SwaggerRouter } from 'koa-swagger-decorator';
import BaseControllerInterface from '../src/v1.0/controller/base.controller.interface';

export default class TestServer {
    app: Koa;
    router: SwaggerRouter;
    testPort: number;

    constructor() {
        this.app = new Koa();
        this.router = new SwaggerRouter();
        this.testPort = parseInt(config.get('App.server.port')) + 1;    
    }

    public setController(controller: BaseControllerInterface): void {
        controller.setup(this.router);
        this.app.use(this.router.routes());
    }

    public getInstance(): Koa {
        return this.app;
    }
}

