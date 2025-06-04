import { Component } from '@angular/core';
import { Header } from "../header/header";
import { CountryList } from "../country-list/country-list";

@Component({
  selector: 'app-home',
  imports: [Header, CountryList],
  templateUrl: './home.html',
  styleUrl: './home.sass'
})
export class Home {

}
