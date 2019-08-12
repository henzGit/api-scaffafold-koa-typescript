import * as Koa from 'koa';
import * as config from 'config';
import { logger } from './lib/logger/winston.logger';
import router from './routes';

const app: Koa  = new Koa();
const port: number = config.get('App.server.port'); 
app.use(router.routes());
app.listen(port);

logger.info(`Server running on port ${port}`);

