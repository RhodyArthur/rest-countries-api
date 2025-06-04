import { httpResource, HttpResourceRef } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class Data {

  apiUrl:string = 'https://restcountries.com/v2/all';
  constructor() { }

  readonly countriesData = httpResource<Country[]>(() => this.apiUrl);
}
