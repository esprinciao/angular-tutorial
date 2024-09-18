import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css'],
})
export class FormbuilderComponent {
  constructor(private formBuilder: FormBuilder) {}

  dataForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength]],
    age: [0],
    description: this.formBuilder.group({
      fatherAge: [0],
      seasons: [''],
    }),
    qty: [0],
    price: [0],
    suppliers: this.formBuilder.array([this.formBuilder.control('')]),
  });

  get suppliers() {
    return this.dataForm.get('suppliers') as FormArray;
  } 
  addNewSupplier() {
    console.warn(this.suppliers);
    this.suppliers.push(this.formBuilder.control(''));
  }

  onSubmit1() {
    // console.error(this.dataForm);
    // console.error(this.dataForm.value);
    // console.warn(this.dataForm.controls['firstName'].value);
    console.log(
      this.dataForm.controls['description'].controls['fatherAge'].value
    );
    console.log(this.dataForm.controls['suppliers'].value);
  }
}
