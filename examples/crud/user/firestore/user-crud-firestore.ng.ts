import { Injectable } from '@angular/core';

import { BaseCrudFirestore } from '../../base';

import { User } from '../user';
import { UserCrud } from '../user-crud.ng';

@Injectable({
  providedIn: 'root'
})
export class UserCrudFireStore extends BaseCrudFirestore<User> implements UserCrud {
  protected override collectionName = 'users';
}
