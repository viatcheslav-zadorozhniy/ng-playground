import { z } from '@zod/mini';

import { PostSchema } from './post.schema';

/**
 * The `Post` is inferred from the `PostSchema` using Zod.
 * It represents the structure of a Post object and is used throughout the application to ensure type safety.
 */
export type Post = z.infer<typeof PostSchema>;
