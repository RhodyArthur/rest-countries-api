import { computed, effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  isLightMode = signal<boolean>(false);

  constructor() {
    this.loadSavedTheme()

    effect(() => {
      this.updateTheme();
      this.saveTheme()
    })
   }

  toggleTheme() {
    this.isLightMode.update(currentMode => !currentMode);
  }

  setTheme(isLight: boolean) {
    this.isLightMode.set(isLight);
  }

  private updateTheme() {
    const body = document.body;

    if(this.isLightMode()) {
      body.classList.add('light-mode')
      body.classList.remove('dark-mode')
    }
    else {
      body.classList.add('dark-mode')
      body.classList.remove('light-mode')
    }
  }

  private loadSavedTheme() {
    const saveTheme = localStorage.getItem('theme')
    if(saveTheme === 'light-mode') {
      this.setTheme(true);
    }
    else if (saveTheme === 'dark-mode') {
      this.setTheme(false);
    }
    else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      this.isLightMode.set(!prefersDark)
    }
  }

  private saveTheme() {
    localStorage.setItem('theme', this.isLightMode() ? 'light-mode' : 'dark-mode')
  }
}
