import { SwaggerRouter } from 'koa-swagger-decorator';
import { SwaggerOptions, MapOptions } from 'koa-swagger-decorator/dist/wrapper';
import { swaggerOpts } from './swagger.opts';
import UsersController from './v1.0/controller/user/users.controller';
import UserService from './v1.0/service/user/user.service';
import BaseControllerInterface from 'v1.0/controller/base.controller.interface';

let router: SwaggerRouter = new SwaggerRouter();

// create all controllers
const usersController: UsersController = new UsersController(new UserService()); 

function installControllers(router: SwaggerRouter, controllers: BaseControllerInterface[]): void {
  controllers.forEach(controller => {
    controller.setup(router);
  })
}

// setup all routes
installControllers(router, [usersController]);

router.swagger(<SwaggerOptions> swaggerOpts);

const mapOptions: MapOptions = {
  doValidation: true
};

router.mapDir(__dirname, mapOptions);

export default router;