import User from '../../../db/model/user';

export default interface UserServiceInterface {
    getAllUsers() : Promise<User[] | undefined>;
    getUsersByRoleId(userId: number) : Promise<User[] | undefined>;
}