import Connection from '../../../db/connection';
import User from '../../../db/model/user';
import {USER_TBL} from '../../../lib/constant/tableName';
import UserServiceInterface from './user.service.interface';

export default class UserService implements UserServiceInterface {
    public async getAllUsers() : Promise<User[] | undefined> {
        return await Connection
            .select('*')
            .from<User>(USER_TBL);
    }

    public async getUsersByRoleId(userId: number) : Promise<User[] | undefined> {
        if (userId === 0) {
            return await Connection
            .select('*')
            .from<User>(USER_TBL)
            .where('is_blocked', 1);
        }
        else if (userId === 4) {
            return await Connection
            .select('*')
            .from<User>(USER_TBL)
            .where('is_system_owner', 1);

        }
    }
}