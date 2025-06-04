import { Component, inject } from '@angular/core';
import { Data } from '../../services/data';
import { DecimalPipe } from '@angular/common';
import { Spinner } from "../spinner/spinner";

@Component({
  selector: 'app-card',
  imports: [DecimalPipe, Spinner],
  templateUrl: './card.html',
  styleUrl: './card.sass'
})
export class Card {

  dataService = inject(Data);
  data = this.dataService.countriesData;

  constructor(){}
}
