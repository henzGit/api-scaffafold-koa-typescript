import { ValidationSchema, IsInt } from "class-validator";

export class ReqGetUsersWithSpecialRole {
  @IsInt({
    message: "roleId must be integer"
  })
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
