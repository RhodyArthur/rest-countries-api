import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Card } from "../card/card";
import { Searchbar } from "../searchbar/searchbar";

@Component({
  selector: 'app-home',
  imports: [Header, Card, Searchbar],
  templateUrl: './home.html',
  styleUrl: './home.sass'
})
export class Home {

}
