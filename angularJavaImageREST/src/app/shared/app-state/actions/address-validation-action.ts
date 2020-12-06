import {Observable} from "rxjs";

export class GetZipCodesAndCitiesByRegion {
  static readonly type = '[AddressValidation] Get Zipcodes and Cities'
  constructor(public zipcode: Observable<string>,
              public region: string) { }
}

export class GetCountriesAction {
  static readonly type = '[AddressValidation] Get Countries'
  constructor() { }
}

export class GetRegionsAction {
  static readonly type = '[AddressValidation] Get Regions'
  constructor(public countryName: string) { }
}


