import { Component, inject, input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Country } from '../../models/country';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [DecimalPipe],
  templateUrl: './card.html',
  styleUrl: './card.sass'
})
export class Card {

  filteredData = input<Country[]>();
  router = inject(Router);

  showDetails(country: Country) {
    if (country && country.name && country.name.common) {
      this.router.navigate(['/name', country.name.common]);
    }
    else {
      console.error('Cannot navigate: Selected country or its common name is undefined.', country);
    }
  }

}
