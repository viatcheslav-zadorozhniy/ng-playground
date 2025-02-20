import { inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';

import { BaseCrud } from '../base-crud.ng';
import { BaseEntity } from '../base-entity';

/**
 * This is the base class for all CRUD services that use Firebase Firestore.
 *
 * The abstract `collectionName` property must be implemented in the derived class.
 * Example:
 * protected override collectionName = 'users';
 */
export abstract class BaseCrudFirestore<
  TEntity extends BaseEntity
> extends BaseCrud<TEntity> {
  protected abstract collectionName: string;

  protected readonly firestore = inject(AngularFirestore);

  create(data: Partial<Omit<TEntity, 'id'>>) {
    return from(this.firestore.collection<TEntity>(this.collectionName).add(data)).pipe(
      switchMap(documentRef => this.read(documentRef.id))
    );
  }

  read(id: TEntity['id']) {
    return this.#getDocumentRef(id).valueChanges<TEntity['id']>({ idField: 'id' }).pipe(
      take(1), // Remove this line to listen to real-time updates.
    );
  }

  readMany() {
    return this.firestore.collection<TEntity>(this.collectionName).valueChanges({ idField: 'id' }).pipe(
      take(1), // Remove this line to listen to real-time updates.
    );
  }

  update(id: TEntity['id'], data: Partial<TEntity>) {
    return from(this.#getDocumentRef(id).update(data)).pipe(
      switchMap(() => this.read(id))
    );
  }

  delete(id: TEntity['id']) {
    return from(this.#getDocumentRef(id).delete());
  }

  #getDocumentRef(id: TEntity['id']) {
    return this.firestore.collection<TEntity>(this.collectionName).doc(id);
  }
}
