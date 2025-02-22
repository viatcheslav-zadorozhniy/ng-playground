import { Injectable } from '@angular/core';

import { BaseCrudRest } from '../../base';

import { User } from '../user';
import { UserCrud } from '../user-crud.ng';

/**
 * This is an example of a CRUD service for users that uses a RESTful API.
 * By extending the `BaseCrudRest` class, it reduces the boilerplate code.
 */
@Injectable({
  providedIn: 'root'
})
export class UserCrudRest extends BaseCrudRest<User> implements UserCrud {
  protected override entityRoute = '/api/users';
}
