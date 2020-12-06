import {FilterStrategy} from "./filter-strategy";
import {MatDialog} from "@angular/material/dialog";

export class ModelFilter {
  static filterByStrategy<T,U>(source: T, strategy: FilterStrategy<T, U>): U {
    return strategy.apply(source);
  }
}


