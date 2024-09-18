import { Component } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css'],
})
export class ThemeComponent {
  toggleThemeD(): void {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    
  }

  toggleThemeW(): void {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
}
