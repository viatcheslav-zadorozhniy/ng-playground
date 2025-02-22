import { BaseEntity } from './base-entity';

/**
 * This is the base class for all view models.
 * It encapsulates the entity (DTO) and provides a way to clone the view model.
 * It addition, it provides a way to access the entity id.
 */
export class BaseViewModel<TEntity extends BaseEntity> {
  readonly id: TEntity['id'];

  protected readonly dto: TEntity;

  constructor(dto: TEntity) {
    this.dto = dto;
    this.id = dto.id;
  }

  clone() {
    const classConstructor = this.constructor as new (dto: TEntity) => this;
    return new classConstructor(this.dto);
  }
}
