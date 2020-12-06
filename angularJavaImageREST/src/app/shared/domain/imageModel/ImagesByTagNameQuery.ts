import {ImageModel} from "./image.model";
import {FilterCheckBox} from "../../../public/search-toolbar/search.toolbar.component";

export interface ImagesByTagName {
  page?: number;
  searchTerm: string;
  imagResponseList?: ImageModel[];
  filterOpt?: FilterCheckBox;
}

export class FilterName {
  public static readonly FILTER_BY_DATE_WEEK = "WEEK";
  public static readonly FILTER_BY_DATE_MONTH = "MONTH";
  public static readonly FILTER_BY_DATE_YEAR = "YEAR";
  public static readonly FILTER_BY_MOST_DOWNLOADS = "DOWNLOADS";
  public static readonly FILTER_BY_MOST_LIKES = "LIKES";
}

export class ImagesByTagNameWithFilterArgs implements ImagesByTagName{
  searchTerm: string;
  filters: Map<string, boolean>;

  constructor(searchTerm: string, filters: Map<string, boolean>) {
    this.searchTerm = searchTerm;
    this.filters = filters;
  }
}

export class ImagesByTagNameWithFilterOpt implements ImagesByTagName{
  filterOpt: FilterCheckBox;
  searchTerm: string;


  constructor(filterOpt: FilterCheckBox, searchTerm: string) {
    this.filterOpt = filterOpt;
    this.searchTerm = searchTerm;
  }
}


export class ImagesByTagNameQueryImpl implements ImagesByTagName{
  searchTerm: string;

  constructor(searchTerm: string) {
    this.searchTerm = searchTerm;
  }
}

export class ImagesByTagNameStateModel implements ImagesByTagName{
  page: number;
  searchTerm: string;
  imagResponseList?: ImageModel[];

  constructor(page: number,
              searchTerm: string,
              imagResponseList: ImageModel[]) {
    this.page = page;
    this.searchTerm = searchTerm;
    this.imagResponseList = imagResponseList;
  }
}
