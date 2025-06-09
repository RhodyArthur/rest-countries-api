import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-filter',
  imports: [],
  templateUrl: './filter.html',
  styleUrl: './filter.sass'
})
export class Filter {

  regions = signal<string[]>(['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']);

  selectRegion = output<string>();
  selectedOption = signal<string>('')

  onSelectedRegion(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedOption.set(target.value);
    this.selectRegion.emit(this.selectedOption())
  }
}
