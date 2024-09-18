import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginFailed: boolean = false;
  loginSuccess: boolean = false;

  constructor(private authService: AuthService) {}

  onLogin() {
    // Call the service method to create the contact
    this.authService.loginUser(this.email, this.password).subscribe({
      next: (data) => {
        console.log('Login successful', data);
        this.loginSuccess = true;
        this.loginFailed = false;
        // Handle success (e.g., redirect to another page or store user information)
      },
      error: (error) => {
        console.error('Login failed', error);
        this.loginSuccess = false;
        this.loginFailed = true;
        // Handle error (e.g., show an error message)
      },
    });
  }
}
