import { Injectable } from '@angular/core';

import { BaseCrudRest } from '../../base-crud';
import { PostCrud } from '../post-crud.ng';
import { Post, PostSchema } from '../types';

/**
 * This is an example of a CRUD service for posts that uses a RESTful API.
 * By extending the `BaseCrudRest` class, it reduces the boilerplate code.
 */
@Injectable({
  providedIn: 'root'
})
export class PostCrudRest extends BaseCrudRest<Post> implements PostCrud {
  protected override entityRoute = '/api/posts';
  protected override entitySchema = PostSchema;
}
