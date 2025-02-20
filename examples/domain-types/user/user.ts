import { BaseEditableEntity } from '../base-entity';

import { UserRole } from './user-role';

/**
 * This is an example of a base helper entity usage.
 */
export type User<UserId = string> = BaseEditableEntity<UserId> & {
  email: string;
  name: string;
  roles: UserRole[];
};
