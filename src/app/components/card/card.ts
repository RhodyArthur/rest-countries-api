import { Component, inject } from '@angular/core';
import { Data } from '../../services/data';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [DecimalPipe],
  templateUrl: './card.html',
  styleUrl: './card.sass'
})
export class Card {

  dataService = inject(Data);
  data = this.dataService.countriesData;

  constructor(){}
}
