import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  userId: string = '';

  selectedUser: User | null = null;

  constructor(private userService: UserService) {}

  onSubmit(): void {
    this.userService.getUsers().subscribe({
      next: (data) => {
        console.log('Users fetched successfully:', data);
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      },
    });
  }

  viewUserById(): void {
    if (this.userId) {
      this.userService.getUserById(Number(this.userId)).subscribe({
        next: (data: User) => {
          console.log('Users fetched successfully:', data);
        },
        error: (err) => console.log('sorry no such user'),
      });
    } else {
      console.log('Please enter a valid ID');
    }
  }
}
