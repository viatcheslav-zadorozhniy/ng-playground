import { BaseEditableEntity } from '../base-entity';

import { Property } from './property';

export type Room = BaseEditableEntity & {
  name: string;
  property: Property['id'];
};

/**
 * It can be useful to have a type that includes the related entity itself, not just its ID.
 * For example, when you fetch the entity from the database with a JOIN query.
 */
export type PopulatedRoom = Room & {
  property: Property;
};
