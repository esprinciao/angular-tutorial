import { Component } from '@angular/core';
import { TokenService } from '../token.service';
import { AuthenticationResponse } from '../authentication-response';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css'],
})
export class TokenComponent {
  username: string = '';
  password: string = '';
  loginFailed: boolean = false;
  loginSuccess: boolean = false;
  loading: boolean = false;

  constructor(private tokenService: TokenService) {}

  login(): void {
    this.loading = true;
    this.tokenService.authenticate(this.username, this.password).subscribe({
      next: (response: AuthenticationResponse) => {
        this.loading = false;
        this.loginSuccess = true;
        this.loginFailed = false;
        console.log('JWT Token:', response.jwt);
        alert(response.jwt);

        this.tokenService.sendAuthRequest(response.jwt).subscribe({
          next: (response) => {
            console.log(response);
          },
        });
        // Handle the JWT token (e.g., store it in local storage)
      },
      error: (err) => {
        this.loading = false;
        this.loginSuccess = false;
        this.loginFailed = true;
        console.error('Authentication failed', err);
      },
    });
  }
}
