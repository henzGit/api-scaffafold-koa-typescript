import { SwaggerRouter } from "koa-swagger-decorator";

export default interface BaseController {
   setup(router: SwaggerRouter): void;
}