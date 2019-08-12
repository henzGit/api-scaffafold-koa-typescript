import { Context } from 'koa';
import { 
    SwaggerRouter, 
    request, summary, query, path, tags, prefix, description, responses
    } 
    from 'koa-swagger-decorator';
import * as HttpCodes from 'http-status-codes';
import ResGetUsersWithSpecialRole from 'v1.0/dto/user/res.get.users.withSpecialRole.dto';
import UserService from '../../service/user/user.service';
import User from 'db/model/user';
import * as config from "config";
import InternalUser from 'v1.0/dto/user/internalUser.dto';
import ExternalUser from 'v1.0/dto/user/externalUser.dto';
import BaseControllerInterface from 'v1.0/controller/base.controller';

const apiVersion: string = config.get("App.apiVersion");

@prefix(`${apiVersion}/users`)
export default class UserController implements BaseControllerInterface {
    constructor (private readonly userService: UserService) { 
        this.userService = userService;
    }
    
    @request('GET', '/specialRole/{roleId}')
    @summary('Get users with special roles in BPP system')
    @description('Get list of system owners or blocked users')
    @tags(['User API'])
    @path({
        roleId: { type: 'number', required: true, default: 1, description: 'user role id' },
      })
    @query({
      maxUsers: {
        type: 'number',
        description: 'number of returned users'
      }
    })
    @responses({
      200: { description: 'success' },
      500: { description: 'something wrong about server' }
    })
    public async getUsersWithSpecialRole(ctx: Context) {
        try {    
            const roleId: number = parseInt(ctx.params.roleId);

            const users: User[] | undefined = await this.userService.getUsersByRoleId(roleId);

            if (typeof users === 'undefined') {
                console.log('RETURN UNDEFINED users object');
            }

            const userListOut: ( InternalUser | ExternalUser )[] = [];
            if (typeof users !== 'undefined') {
                users.forEach(user => {
                    let userOut: InternalUser | ExternalUser;
                    if (user.rid_uuid === '') {
                        userOut = {
                            adfsNameId: user.adfs_name_id,
                            lastLogin: user.last_login_ts,
                            role: '',
                            roleId: roleId
                        }
                    } else {
                        userOut = {
                            ridUuid: user.rid_uuid,
                            ridUserName: user.rid_username,
                            ridFirstName: user.rid_first_name,
                            ridLastName: user.rid_last_name,
                            lastLogin: user.last_login_ts,
                            role: '',
                            roleId: roleId
                        }
                    }
                    userListOut.push(userOut);
                    }
                );
            }

            const resArr: ResGetUsersWithSpecialRole =  
            {
                "message": "get blocked users / system owners",
                "users": userListOut
            };
            ctx.body = resArr;
            ctx.status = HttpCodes.OK;
        } catch (err) {
            console.log(err);
        }
    }
    
    setup(router: SwaggerRouter): void {
        router.get('/users/specialrole/:roleId', 
            (ctx: Context) => { return this.getUsersWithSpecialRole(ctx) });
    }
}

