import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent {
  userId: string = '';

  formData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    address: '',
  };

  constructor(private userService: UserService) {}

  updateUser(): void {
    const user: User = {
      firstName: this.formData.firstName,
      lastName: this.formData.lastName,
      email: this.formData.email,
      password: this.formData.password,
      phone: this.formData.phone,
      address: this.formData.address,
    };

    this.userId
      ? this.userService.updateUser(Number(this.userId), user).subscribe({
          next: (updatedUser) => {
            console.log('User updated successfully:', updatedUser);
          },

          error: (error) => {
            console.error('Error updating user:', error);
          },
        })
      : console.log('Please enter a valid ID');
  }
}
