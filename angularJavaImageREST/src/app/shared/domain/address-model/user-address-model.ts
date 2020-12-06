export class UserAddressModel {
  street: string;
  region: string;
  zipcode: string;
  country: string;


  constructor(street: string,
              region: string,
              zipcode: string,
              country: string) {
    this.street = street;
    this.region = region;
    this.zipcode = zipcode;
    this.country = country;
  }
}
