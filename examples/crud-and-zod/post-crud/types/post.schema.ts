import { extend, z, ZodMiniType } from '@zod/mini';

import { BaseEntity } from '../../../shared';

/**
 * The `EntitySchema` is a Zod schema that defines the structure of a `BaseEntity` object.
 * It is used as a base schema for other entities, such as Post.
 * It is used to reduce code duplication in the schema definitions.
 */
const EntitySchema = z.interface({
  id: z.string(),
}) satisfies ZodMiniType<BaseEntity>;

/**
 * The `PostSchema` is a Zod schema that defines the structure of a Post object.
 * It is used to validate and parse Post objects received from the API.
 */
export const PostSchema = extend(EntitySchema, z.interface({
  title: z.string(),
  body: z.string(),
}));
