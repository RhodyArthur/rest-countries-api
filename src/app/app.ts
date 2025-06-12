import { Component } from '@angular/core';
import { Home } from './components/home/home';
import { Header } from "./components/header/header";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.sass'
})
export class App {
  protected title = 'rest-countries-api';
}
