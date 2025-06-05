import { httpResource, HttpResourceRef } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Country } from '../models/country';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class Data {

  constructor() { }

  fields = signal<string[]>(['name','flags', 'population', 'borders', 'region', 'subregion', 'languages', 'capital', 'currencies', 'topLevelDomain']);
  searchItem = signal<string>('');


  readonly countriesData = httpResource<Country[]>(() => {
    const selectedFields = this.fields()
    return `${environment.apiUrl}/all?fields=${selectedFields.join(',')}`
  });


}
