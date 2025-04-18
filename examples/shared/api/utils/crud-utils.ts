import { array, prettifyError, ZodMiniType } from '@zod/mini';

import { BaseEntity } from '../../base-entity';

export const validateEntitiesResponse = <TEntity extends BaseEntity>(
  data: TEntity[],
  entitySchema: ZodMiniType<TEntity>
): TEntity[] => {
  const schema = array(entitySchema);
  const result = schema.safeParse(data);

  if (!result.success) {
    console.error('Validation error:', prettifyError(result.error));
    throw new Error('The API response has an incorrect structure.');
  }

  return result.data;
};

export const validateEntityResponse = <TEntity extends BaseEntity>(
  data: TEntity,
  entitySchema: ZodMiniType<TEntity>
): TEntity => {
  const result = entitySchema.safeParse(data);

  if (!result.success) {
    console.error('Validation error:', prettifyError(result.error));
    throw new Error('The API response has an incorrect structure.');
  }

  return result.data;
};
