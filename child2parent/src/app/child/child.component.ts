import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})


export class ChildComponent {

  childItem: string | undefined ;


  @Output()
  childEvent = new EventEmitter<string>();

  childMessage() {
    this.childEvent.emit(this.childItem);
  }
}
