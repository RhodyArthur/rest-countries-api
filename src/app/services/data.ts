import { httpResource } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Country } from '../models/country';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class Data {

  constructor() { }

  fields = signal<string[]>(['name','flags', 'population', 'borders', 'region', 'subregion', 'languages', 'capital', 'currencies', 'topLevelDomain']);

  readonly countriesData = httpResource<Country[]>(() => {
    const selectedFields = this.fields()
    return `${environment.apiUrl}/all?fields=${selectedFields.join(',')}`
  });
 

  getCountryByName(countryName: string | null) {
    return httpResource<Country[]>(() => `${environment.apiUrl}/name/${countryName}?fullText=true`)
  }

  getCountryByCode(countryCode: string | null) {
    return httpResource<Country[]>(() => `${environment.apiUrl}/alpha/${countryCode}`)
  }

}
