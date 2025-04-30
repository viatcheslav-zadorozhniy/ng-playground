import { BaseEditableEntity } from '../base-entity';

import { AccessLevel } from './access-level';

/**
 * This is an example of a base helper entity usage.
 */
export interface Employee<EmployeeId = string> extends BaseEditableEntity<EmployeeId> {
  name: string;
  email: string;
  accessLevel: AccessLevel;
}
