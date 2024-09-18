import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  answer: string = '';

  answer1: string[] = [];

  hello(message: string): void {
    this.answer1.push(message);
  }

  constructor() {
    console.log(this.answer1);
  }
}
