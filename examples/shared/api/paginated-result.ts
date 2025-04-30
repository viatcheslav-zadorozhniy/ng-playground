export interface PaginatedResult<TEntity> {
  items: TEntity[];
  total: number;
}
