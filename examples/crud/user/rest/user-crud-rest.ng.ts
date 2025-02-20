import { Injectable } from '@angular/core';

import { BaseCrudRest } from '../../base';

import { User } from '../user';
import { UserCrud } from '../user-crud.ng';

@Injectable({
  providedIn: 'root'
})
export class UserCrudRest extends BaseCrudRest<User> implements UserCrud {
  protected override entityRoute = '/api/users';
}
