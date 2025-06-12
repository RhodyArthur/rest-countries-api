import { Component, computed, effect, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Data } from '../../services/data';
import { Country, NativeName } from '../../models/country';
import { HttpResourceRef } from '@angular/common/http';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './details.html',
  styleUrl: './details.sass'
})
export class Details {

  route = inject(ActivatedRoute);
  dataService = inject(Data);
  countryName = signal<string | null>(null);

  country!: HttpResourceRef<Country[] | undefined>

  countryData = computed(() => {
    const data = this.country.value()
    return data?.[0]
  })

  // nativeNames = this.getNativeName(this.countryData()?.name?.nativeName)

  constructor() {
    const init = this.route.snapshot.params['countryName']
    this.country = this.dataService.getCountryByName(init)

    this.route.params.subscribe(params => {
      const name  = params['countryName'];
      this.country = this.dataService.getCountryByName(name)
    })

    effect(() => {
      console.log('details', this.countryData())
    })
  }
  
  
  getNativeName(obj: any) {
    return Object.values(obj)
  }

}
