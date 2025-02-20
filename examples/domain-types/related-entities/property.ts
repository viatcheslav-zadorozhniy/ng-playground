import { BaseEditableEntity } from '../base-entity';

import { Room } from './room';

export type Property = BaseEditableEntity & {
  name: string;
  rooms: Room['id'][];
};

/**
 * It can be useful to have a type that includes the related entities themselves, not just their IDs.
 * For example, when you fetch the entity from the database with a JOIN query.
 */
export type PopulatedProperty = Property & {
  rooms: Room[];
};
