import { Observable } from 'rxjs';

import { BaseEntity } from './base-entity';

/**
 * This is the base class for all CRUD services.
 * It defines the basic CRUD operations that all services should implement.
 */
export abstract class BaseCrud<TEntity extends BaseEntity> {
  abstract create(data: Partial<Omit<TEntity, 'id'>>): Observable<TEntity>;
  abstract read(id: TEntity['id']): Observable<TEntity>;
  abstract readMany(): Observable<TEntity[]>;
  abstract update(id: TEntity['id'], data: Partial<TEntity>): Observable<TEntity>;
  abstract delete(id: TEntity['id']): Observable<void>;
}
