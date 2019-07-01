import InternalUser from './internalUser.dto';
import ExternalUser from './externalUser.dto';

export default interface GetUsersWithSpecialRole {
  message: string;

  readonly users: (InternalUser|ExternalUser)[];
}
