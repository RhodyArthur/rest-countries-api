import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-borders',
  imports: [],
  templateUrl: './borders.html',
  styleUrl: './borders.sass'
})
export class Borders {
  borders = input<string[]>();
  
  codeChange = output<string>();

  onCodeChange(countryCode: string) {
    this.codeChange.emit(countryCode)
  }
}
