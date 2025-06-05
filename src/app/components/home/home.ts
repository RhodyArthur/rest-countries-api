import { Component, computed, inject, signal } from '@angular/core';
import { Header } from "../header/header";
import { Card } from "../card/card";
import { Searchbar } from "../searchbar/searchbar";
import { Data } from '../../services/data';
import { Spinner } from "../spinner/spinner";

@Component({
  selector: 'app-home',
  imports: [Header, Card, Searchbar, Spinner],
  templateUrl: './home.html',
  styleUrl: './home.sass'
})
export class Home {
 dataService = inject(Data);
  data = this.dataService.countriesData;
  readonly searchQuery = signal<string>('');
  readonly selectedRegion = signal<string>('');

  constructor(){}

  readonly filteredCountries = computed(() => {
    const allCountries = this.data.value() || [];
    const query = this.searchQuery().toLowerCase();
    const region = this.selectedRegion().toLowerCase();

    return allCountries.filter((country) => {
      const countryName = country.name?.common?.toLowerCase() || '';
      const countryRegion = country.region?.toLowerCase() || '';

      const countryCapital = (country.capital && country.capital.length > 0)
        ? country.capital[0].toLowerCase()
        : '';

      const matchesQuery = countryName.includes(query) ||
                           countryCapital.includes(query) ||
                           countryRegion.includes(query);

      const matchesRegion = !region || countryRegion === region;

      return matchesQuery && matchesRegion
    })
  })

  onSearchChanged(value: string) {
    this.searchQuery.set(value)
  }
}
