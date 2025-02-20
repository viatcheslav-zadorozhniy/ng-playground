import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

import { BaseCrud } from '../base-crud.ng';
import { BaseEntity } from '../base-entity';

/**
 * This is the base class for all CRUD services that use RESTful APIs.
 *
 * The abstract `entityRoute` property must be implemented in the derived class.
 * Example:
 * protected override entityRoute = '/api/users';
 */
export abstract class BaseCrudRest<
  TEntity extends BaseEntity
> extends BaseCrud<TEntity> {
  protected abstract entityRoute: string;

  protected readonly http = inject(HttpClient);

  create(data: Partial<Omit<TEntity, 'id'>>) {
    return this.http.post<TEntity>(this.entityRoute, data);
  }

  read(id: TEntity['id']) {
    return this.http.get<TEntity>(`${this.entityRoute}/${id}`);
  }

  readMany() {
    return this.http.get<TEntity[]>(this.entityRoute);
  }

  update(id: TEntity['id'], data: Partial<TEntity>) {
    return this.http.patch<TEntity>(`${this.entityRoute}/${id}`, data);
  }

  delete(id: TEntity['id']) {
    return this.http.delete<void>(`${this.entityRoute}/${id}`);
  }
}
