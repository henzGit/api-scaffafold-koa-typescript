import { SuperTest, Test } from 'supertest';
import * as supertest from 'supertest';
import UsersController from '../../../../src/v1.0/controller/user/users.controller';
import UserServiceMock from '../../../mock/v1.0/service/user.service.mock';
import * as UsersJson from '../../../mock/data/users.json';
import User from '../../../../src/db/model/user';
import UserServiceInterface from '../../../../src/v1.0/service/user/user.service.interface';
import TestServer from '../../../testServer';
import { OK, INTERNAL_SERVER_ERROR, BAD_REQUEST } from 'http-status-codes';
import * as Koa from 'koa';
import { Server } from 'http';

describe('UsersController', () => {
    let listenedServer: Server;
    let agent: SuperTest<Test>;

    beforeAll(async () => {
        const usersData: User[] = UsersJson['users'];
        const userServiceMock : UserServiceInterface = new UserServiceMock(usersData);
        const usersController: UsersController = new UsersController(userServiceMock);
    
        const testServer: TestServer = new TestServer();
        testServer.setController(usersController);
        const koaInstance: Koa = testServer.getInstance();

        listenedServer = await koaInstance.listen(testServer.testPort);
        agent = supertest.agent(listenedServer);
    })

    describe('API: "/users/specialrole/:roleId"', () => {
        const message = 'get blocked users / system owners';

        it(`should return a JSON object with the message "${message}" and a status code
            of "${OK}" if message was successful`, async () => {
            await agent.get('/users/specialrole/0')
                    .expect(OK);
        });
    })

    afterAll(async () => {
        await listenedServer.close();
      });
    
});
