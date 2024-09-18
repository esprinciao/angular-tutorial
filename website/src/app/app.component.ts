import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'website';

  constructor() {}

  ngOnInit(): void {
    this.initializeButtonEvents();
    this.initializeFormEvent();
    window.onload = function () {
      window.scrollTo(0, 0);
    };
  }

  initializeButtonEvents(): void {
    const cardButtons = document.querySelectorAll(
      '.card-button'
    ) as NodeListOf<HTMLButtonElement>;
    cardButtons.forEach((button) => {
      button.addEventListener('click', () => {
        alert('Details coming soon!');
      });
    });

    const ctaButton = document.querySelector(
      '.cta-button'
    ) as HTMLButtonElement;
    ctaButton.addEventListener('click', () => {
      alert('Learn more about my projects and skills!');
    });
  }

  initializeFormEvent(): void {
    const form = document.querySelector('form') as HTMLFormElement;
    form.addEventListener('submit', (e: Event) => {
      e.preventDefault();
      alert('Message sent successfully!');
    });
  }
}
