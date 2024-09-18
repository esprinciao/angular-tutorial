import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'parent2child';

  EnterName = 'John Doe';
  EnterAge = '22';
  EnterStatus = 'Single';

  parentData1 = '';
  parentData2 = '';
  parentData3 = '';

  transferData() {
    this.parentData1 = this.EnterName;
    this.parentData2 = this.EnterAge;
    this.parentData3 = this.EnterStatus;
  }

  value = '';

  sendData(value: string) {
    this.value = value;
  }
}
