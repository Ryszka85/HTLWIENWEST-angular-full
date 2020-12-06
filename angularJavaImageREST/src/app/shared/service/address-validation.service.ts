import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {TagModel} from "../domain/tagModel/tag-model";
import {distinctUntilChanged, switchMap, tap, throttleTime} from "rxjs/operators";
import { Country, Region, ZipCodeAndCity} from "../domain/address-model/addres.view.model";
import {GetZipCodesAndCitiesByRegion} from "../app-state/actions/address-validation-action";
import {SearchRequestService} from "../../serviceV2/search.request.service";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AddressValidationService {
  private readonly SEARCH_URL: string = environment.apiUrl + "addresses/validate/";
  private readonly COUNTRIES: string = environment.apiUrl + "addresses/get/all/countries";
  private readonly REGIONS: string = environment.apiUrl + "addresses/regions/";
  private readonly ZIPCODES: string =  environment.apiUrl + "query/searchByZipAndRegion/";
  constructor(private  http: HttpClient,
              private searchReqService: SearchRequestService<ZipCodeAndCity>) { }

  public getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.COUNTRIES);
  }

  public getRegionsByCountry(countryName: string): Observable<Region[]> {
    return this.http.get<Region[]>(this.REGIONS + countryName);
  }

  public getZipCodesAndCitiesByRegion(region: string): Observable<ZipCodeAndCity[]> {
    return this.http.get<ZipCodeAndCity[]>(this.ZIPCODES + region);
  }

  public getZipCodesAndCitiesByRegion2(zipcode: Observable<string>, region: string): Observable<ZipCodeAndCity[]> {
    return this.searchReqService.search(zipcode, this.ZIPCODES + region + ", ");
  }
}
