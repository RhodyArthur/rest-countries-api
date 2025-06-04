import { Component, effect, inject } from '@angular/core';
import { Data } from '../../services/data';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.sass'
})
export class Card {

  dataService = inject(Data);

  constructor(){

    effect(() => {
      console.log(this.dataService.countriesData.value())
    })
  }

  // getData() {
  //   this.dataService.countriesData.value()
  // }
}
