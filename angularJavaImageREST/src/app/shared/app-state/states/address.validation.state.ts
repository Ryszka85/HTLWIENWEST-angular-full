import {Action, Selector, State, StateContext} from "@ngxs/store";
import {IUserAuthState} from "../../domain/UserAuthStateModel";
import {Country, Region, ZipCodeAndCity} from "../../domain/address-model/addres.view.model";
import {AddCommand} from "@angular/cli/commands/add-impl";
import {AddressValidationService} from "../../service/address-validation.service";
import {ImagesByTagsAction} from "../actions/image.action";
import {ImagesByTagNameStateModel} from "../../domain/imageModel/ImagesByTagNameQuery";
import {switchMap, tap} from "rxjs/operators";
import {GetZipCodesAndCitiesByRegion, GetCountriesAction, GetRegionsAction} from "../actions/address-validation-action";
import {Injectable} from "@angular/core";
import {AddressViewListState} from "../../domain/address-model/address-view.list.state";
import {ImageModel} from "../../domain/imageModel/image.model";

@State<AddressViewListState>({
  name: 'AddressValidation'
})
@Injectable()
export class AddressValidationState {
  constructor(private addressService: AddressValidationService) { }

  @Selector()
  static zipCodesAndCities(state: AddressViewListState): ZipCodeAndCity[] {
    return state.zipCodesAndCity;
  }

  @Selector()
  static regions(state: AddressViewListState): Region[] {
    return state.regions;
  }

  @Selector()
  static countries(state: AddressViewListState): Country[] {
    return state.name;
  }

  @Action(GetCountriesAction)
  getCountries(ctx: StateContext<AddressViewListState>,
               action: GetCountriesAction) {
    const state = ctx.getState();
    return this.addressService
      .getCountries()
      .pipe(
        tap(res => {
          ctx.setState(
            {
              ...state,
              name: res
            }
          )
        })
      );
  }


  @Action(GetRegionsAction)
  getRegionsByCountry(ctx: StateContext<AddressViewListState>,
                      action: GetRegionsAction) {
    const state = ctx.getState();
    return this.addressService
      .getRegionsByCountry(action.countryName)
      .pipe(
        tap(res => {
          console.log("Du Hund du")
          console.log(res)
          ctx.setState(
            {
              ...state,
              regions: res
            }
          )
        })
      )
  }

  @Action(GetZipCodesAndCitiesByRegion)
  getZipCodesAndCitiesByRegion(ctx: StateContext<AddressViewListState>,
                      action: GetZipCodesAndCitiesByRegion) {
    const state = ctx.getState();
    return this.addressService
      .getZipCodesAndCitiesByRegion2(action.zipcode, action.region)
      .pipe(
        tap(res => {
          console.log(res)
          ctx.setState(
            {
              ...state,
              zipCodesAndCity: res
            }
          )
        })
      )
  }

}
