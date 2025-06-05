import { httpResource, HttpResourceRef } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../models/country';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class Data {

  constructor() { }

  readonly countriesData = httpResource<Country[]>(() => `${environment.apiUrl}/all`);
}
