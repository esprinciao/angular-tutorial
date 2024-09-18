import { Component } from '@angular/core';
import { FormControl, FormGroup , Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent {
  dataForm = new FormGroup({
    firstName: new FormControl(''),
    age: new FormControl(0, [Validators.required, Validators.min(18), Validators.max(60)]),
  });

  onSubmit1() { 
    console.error(this.dataForm);
    console.warn(this.dataForm.value);
    console.log(this.dataForm.controls['age'].value);
    console.log(this.dataForm.controls['age'].status);
  }
}
