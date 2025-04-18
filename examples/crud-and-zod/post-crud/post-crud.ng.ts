import { Injectable } from '@angular/core';

import { BaseCrud } from '../base-crud';

import { PostCrudRest } from './rest';
import { Post } from './types';

/**
 * This is an example of a CRUD service for posts that extends the `BaseCrud` class.
 * It is agnostic of the underlying data source (Firestore, RESTful API, etc.).
 * It is easy to switch between different data sources by changing the `useExisting` property.
 * The service consumers do not need to know the implementation details.
 */
@Injectable({
  providedIn: 'root',
  useExisting: PostCrudRest
})
export abstract class PostCrud extends BaseCrud<Post> {
  /**
   * The custom abstract methods for the user CRUD service can be added here.
   * They must be implemented in the derived classes.
   *
   * Example:
   * abstract resetPassword(email: string): Observable<void>;
   * abstract updatePhoto(photo: File): Observable<User>;
   */
}
