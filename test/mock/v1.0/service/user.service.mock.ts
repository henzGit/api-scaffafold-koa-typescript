import User from '../../../../src/db/model/user';

export default class UserServiceMock {

    constructor (readonly usersData: User[]) { 
        this.usersData = usersData;
    }

    public async getAllUsers() : Promise<User[] | undefined> {
        return await this.usersData;
    }

    public async getUsersByRoleId(userId: number) : Promise<User[] | undefined> {
        let users: User[] = [];

        this.usersData.forEach(user => {
            if (userId === 0 && user.is_blocked === 1) users.push(user);
            if (userId === 4 && user.is_system_owner === 1) users.push(user);
        });
        return await users;
    }
}