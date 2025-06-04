import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Card } from "../card/card";

@Component({
  selector: 'app-home',
  imports: [Header, Card],
  templateUrl: './home.html',
  styleUrl: './home.sass'
})
export class Home {

}
