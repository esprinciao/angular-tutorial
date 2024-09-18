import {
  AfterContentInit,
  AfterViewChecked,
  Component,
  DoCheck,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'msg from parent';

  constructor() {}
}
