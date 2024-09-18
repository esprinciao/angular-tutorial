import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'P R .';

  constructor(private router: Router) {}

  navigateToFeature(feature: string) {
    // Navigate to the route based on the feature parameter
    this.router.navigate([`/${feature}`]);
  }

  input1: string = '';
  input2: string = '';

  onSubmit(event: Event): void {
    event.preventDefault(); // Prevent the default form submission behavior
    // Add your form handling logic here
    console.log('Form submitted', this.input1, this.input2);
  }

}
