import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @Input() parentData1 !: string;
  @Input() parentData2 !: string;
  @Input() parentData3 !: string;


}
