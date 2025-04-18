import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { ZodMiniType } from '@zod/mini';
import { map } from 'rxjs';

import { BaseCrud } from '../base-crud.ng';
import {
  BaseEntity,
  buildRestQueryParams,
  CrudPayload,
  QueryParams,
  validateEntitiesResponse,
  validateEntityResponse
} from '../../../shared';

/**
 * This is the base class for all CRUD services that use RESTful APIs.
 * It also uses the Zod library to validate the responses from the server.
 *
 * The abstract `entityRoute` and `entitySchema` properties must be implemented in the derived class.
 * Example:
 * protected override entityRoute = '/api/posts';
 * protected override entitySchema = PostSchema;
 */
export abstract class BaseCrudRest<
  TEntity extends BaseEntity
> implements BaseCrud<TEntity> {
  protected abstract entityRoute: string;
  protected abstract entitySchema: ZodMiniType<TEntity>;

  protected readonly http = inject(HttpClient);

  create(payload: CrudPayload<TEntity>) {
    return this.http.post<TEntity>(this.entityRoute, payload).pipe(
      map(response => validateEntityResponse(response, this.entitySchema))
    );
  }

  read(id: TEntity['id']) {
    return this.http.get<TEntity>(`${this.entityRoute}/${id}`).pipe(
      map(response => validateEntityResponse(response, this.entitySchema))
    );
  }

  readMany(params?: QueryParams<TEntity>) {
    return this.http.get<TEntity[]>(this.entityRoute, { params: buildRestQueryParams(params) }).pipe(
      map(response => validateEntitiesResponse(response, this.entitySchema))
    );
  }

  update(id: TEntity['id'], payload: CrudPayload<TEntity>) {
    return this.http.patch<TEntity>(`${this.entityRoute}/${id}`, payload).pipe(
      map(response => validateEntityResponse(response, this.entitySchema))
    );
  }

  delete(id: TEntity['id']) {
    return this.http.delete<void>(`${this.entityRoute}/${id}`);
  }
}
