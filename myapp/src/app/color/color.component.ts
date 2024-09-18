import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent {
  userColor = '';

  setColor(color: string): void {
    document.body.style.backgroundColor = this.userColor;
    if (color == 'white') {
      document.body.style.color = 'black';
    } else {
      document.body.style.color = 'white';
    }
  }
}
