import { Component, inject } from '@angular/core';
import { Card } from "../card/card";
import { Data } from '../../services/data';

@Component({
  selector: 'app-country-list',
  imports: [Card],
  templateUrl: './country-list.html',
  styleUrl: './country-list.sass'
})
export class CountryList {

}
