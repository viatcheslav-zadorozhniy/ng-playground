import { BaseEntity } from '../../base-entity';

export interface JsonApiResource<TEntity extends BaseEntity> {
  type: string;
  id: string;
  attributes: Omit<TEntity, 'id'>;
}

export interface JsonApiSingleResponse<TEntity extends BaseEntity> {
  data: JsonApiResource<TEntity>;
}

export interface JsonApiListResponse<TEntity extends BaseEntity> {
  data: JsonApiResource<TEntity>[];
  meta?: { total: number };
}

export interface JsonApiPayload<Attributes> {
  data: {
    type: string;
    attributes: Attributes;
  };
}

export interface JsonApiUpdatePayload<Attributes> {
  data: {
    id: string;
    type: string;
    attributes: Attributes;
  };
}
