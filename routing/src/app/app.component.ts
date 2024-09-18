import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'routing';

  constructor(private router: Router) {}

  renderHome(): void {
    this.router.navigate(['/home']);
  }

  renderAboutus(): void {
    this.router.navigate(['/aboutus']);
  }

  renderRegister(): void {
    this.router.navigate(['/register']);
  }
}
