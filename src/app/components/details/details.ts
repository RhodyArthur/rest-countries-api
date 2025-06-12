import { Component, computed, effect, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Data } from '../../services/data';
import { Country } from '../../models/country';
import { HttpResourceRef } from '@angular/common/http';
import { DecimalPipe } from '@angular/common';
import { Borders } from "../borders/borders";

@Component({
  selector: 'app-details',
  imports: [DecimalPipe, RouterLink, Borders],
  templateUrl: './details.html',
  styleUrl: './details.sass'
})
export class Details {

  route = inject(ActivatedRoute);
  dataService = inject(Data);
  countryName = signal<string | null>(null);

  country!: HttpResourceRef<Country[] | undefined>;


  countryData = computed(() => {
    const data = this.country.value()
    return data?.[0]
  })
  


  constructor() {
    const init = this.route.snapshot.params['countryName']
    this.country = this.dataService.getCountryByName(init)

    this.route.params.subscribe(params => {
      const name  = params['countryName'];
      this.country = this.dataService.getCountryByName(name)
    })

    effect(() => console.log(this.countryData()))
  }
  
  borders = computed(() => {
    return this.countryData()?.borders
  })

  getLanguages() {
    const languages = this.countryData()?.languages;

    if(languages) {
      const languageObj = Object.values(languages)
      return languageObj.join(', ')
    }
    return undefined
  }

  getCurrencies() {
    const currencies = this.countryData()?.currencies;
    let currencyName = '';
      for(const code in currencies) {
          const currency = currencies[code]
          currencyName = currency.name
      }
    return currencyName
  }

  getNativeName() {
    const nativeNameObj = this.countryData()?.name.nativeName;
    let lastNativeName: {official: string; common: string} | undefined;

    for (const key in nativeNameObj) {
        lastNativeName = nativeNameObj[key]
    }

    if(lastNativeName) {
      const names = Object.values(lastNativeName)
      return names[1]
    }
    return undefined
  }

}
