import { SwaggerRouter } from "koa-swagger-decorator";

export default interface BaseControllerInterface {
   setup(router: SwaggerRouter): void;
}