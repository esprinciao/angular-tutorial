import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css'],
})
export class DeleteUserComponent {
  userId: string = '';

 

  constructor(private userService: UserService) {}

  deleteUserById(): void {
    if (this.userId) {
      this.userService.deleteUser(Number(this.userId)).subscribe({
        next: () => {
          console.log('User deleted successfully.');
        },
        error: (err) => console.log(err),
      });
    } else {
      console.log('Please enter a valid ID');
    }
  }
}
