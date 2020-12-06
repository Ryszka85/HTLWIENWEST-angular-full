export interface FilterStrategy<T, U> {
  apply(source: T): U;
}
