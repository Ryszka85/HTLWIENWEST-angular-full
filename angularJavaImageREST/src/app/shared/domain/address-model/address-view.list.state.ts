import {Country, Region, ZipCodeAndCity} from "./addres.view.model";

export interface AddressViewListState {
  name: Country[];
  regions: Region[];
  zipCodesAndCity: ZipCodeAndCity[];
}
