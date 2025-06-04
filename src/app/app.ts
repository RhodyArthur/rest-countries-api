import { Component } from '@angular/core';
import { Home } from './components/home/home';

@Component({
  selector: 'app-root',
  imports: [Home],
  templateUrl: './app.html',
  styleUrl: './app.sass'
})
export class App {
  protected title = 'rest-countries-api';
}
