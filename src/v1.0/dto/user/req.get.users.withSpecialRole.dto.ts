import { ValidationSchema } from "class-validator";

export class ReqGetUsersWithSpecialRole {
  roleId: number;
}

export const ReqGetUsersWithSpecialRoleSchema: ValidationSchema = {
  name: "ReqGetUsersWithSpecialRoleSchema", 
  properties: {
      roleId: [{
          type: "isInt", 
          message: "roleId must be integer"
      }],
  }
};
