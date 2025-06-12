import { Component, computed, effect, EnvironmentInjector, inject, runInInjectionContext, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Data } from '../../services/data';
import { Country } from '../../models/country';
import { HttpResourceRef } from '@angular/common/http';
import { DecimalPipe } from '@angular/common';
import { Borders } from "../borders/borders";
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-details',
  imports: [DecimalPipe, RouterLink, Borders],
  templateUrl: './details.html',
  styleUrl: './details.sass'
})
export class Details {

  route = inject(ActivatedRoute);
  dataService = inject(Data);
  router = inject(Router)
  countryName = signal<string | null>(null);
  countryCode = signal<string>('');

  country!: HttpResourceRef<Country[] | undefined>;
    private injector = inject(EnvironmentInjector);



  countryData = computed(() => {
    const data = this.country.value()
    return data?.[0]
  })
  

  constructor() {
    const init = this.route.snapshot.params['countryName']
    this.country = this.dataService.getCountryByName(init)
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

  onBorderClicked(code: string) {
    this.countryCode.set(code)
    
    runInInjectionContext(this.injector, () => {
      const dataRes = this.dataService.getCountryByCode(this.countryCode())
 
     
      effect(() => {
      const data = dataRes.value();
      if (data && data.length > 0) {
        const countryName = data[0].name.common;
        this.country.set(data)
        this.router.navigate(['/name', countryName]);
      }
    });
  });
    
    
  }
}
