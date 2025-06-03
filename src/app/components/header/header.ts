import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme-service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.sass'
})
export class Header {
  protected themeService = inject(ThemeService);
}
