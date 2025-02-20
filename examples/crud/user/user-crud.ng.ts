import { Injectable, isDevMode } from '@angular/core';

import { BaseCrud } from '../base';

import { UserCrudFireStore } from './firestore';
import { UserCrudRest } from './rest';
import { User } from './user';

@Injectable({
  providedIn: 'root',
  useExisting: isDevMode() ? UserCrudFireStore : UserCrudRest
})
export abstract class UserCrud extends BaseCrud<User> {}
