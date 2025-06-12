import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  imports: [FormsModule],
  templateUrl: './searchbar.html',
  styleUrl: './searchbar.sass'
})
export class Searchbar {

  searchChanged = output<string>();
  searchTerm = signal<string>('');

  onSearchChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchTerm.set(target.value)
    this.searchChanged.emit(this.searchTerm())
  }


}
