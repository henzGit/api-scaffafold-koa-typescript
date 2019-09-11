import InternalUser from './internalUser.dto';
import ExternalUser from './externalUser.dto';

export interface ResGetUsersWithSpecialRole {
  message: string;

  readonly users: (InternalUser|ExternalUser)[];
}
