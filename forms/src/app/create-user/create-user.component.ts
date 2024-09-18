import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent {

  formData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    address: '',
  };

  constructor(private userService: UserService) {}

  onSubmit() {
    const user: User = {
      firstName: this.formData.firstName,
      lastName: this.formData.lastName,
      email: this.formData.email,
      password: this.formData.password,
      phone: this.formData.phone,
      address: this.formData.address,
    };

    this.userService.createUser(user).subscribe({ 
      next:(user) => {
        console.log('User created successfully:', user);
        // Reset form or show success message
      },
      error:(error) => {
        console.error('Error creating user:', error);
        // Handle error, e.g., show error message
  }});
  }
}
