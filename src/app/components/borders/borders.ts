import { Component, input } from '@angular/core';

@Component({
  selector: 'app-borders',
  imports: [],
  templateUrl: './borders.html',
  styleUrl: './borders.sass'
})
export class Borders {
borders = input<string[]>();
}
