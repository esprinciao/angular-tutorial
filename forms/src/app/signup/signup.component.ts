import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit, OnDestroy {
  quote: string | undefined;
  author: string | undefined;
  isZenModeActive: boolean = false;
  zenModeTimer: any;
  zenModeDuration: number = 0; // in seconds
  zenModeMessage: string | undefined;
  showCrisisSupport: boolean = false; // For toggling crisis support info
  private quoteInterval: any; // To hold the interval reference

  private zenQuotesUrl =
    'https://thingproxy.freeboard.io/fetch/https://zenquotes.io/api/random';
  private zenModeAudio = new Audio(
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
  ); // Replace with a soothing audio URL

  durationOptions = [
    { label: '10 minutes', value: 600 },
    { label: '30 minutes', value: 1800 },
    { label: '1 hour', value: 3600 },
    { label: '3 hours', value: 10800 },
    { label: '6 hours', value: 21600 },
    { label: '12 hours', value: 43200 },
  ];

  selectedDuration: number = this.durationOptions[0].value; // Default to 10 minutes

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getQuote();
    this.quoteInterval = setInterval(() => this.getQuote(), 60000); // Fetch a new quote every 60 seconds
  }

  ngOnDestroy(): void {
    if (this.quoteInterval) {
      clearInterval(this.quoteInterval); // Clear interval on component destroy
    }
    if (this.zenModeTimer) {
      clearTimeout(this.zenModeTimer); // Clear timer on component destroy
    }
  }

  getQuote(): void {
    this.http.get(this.zenQuotesUrl).subscribe((data: any) => {
      this.quote = data[0]?.q;
      this.author = data[0]?.a;
    });
  }

  getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log('Latitude:', position.coords.latitude);
          console.log('Longitude:', position.coords.longitude);
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }

  startZenMode(duration: number): void {
    this.isZenModeActive = true;
    this.zenModeMessage = undefined; // Clear any previous messages
    this.zenModeAudio.play();
    this.zenModeTimer = setTimeout(() => {
      this.stopZenMode();
      this.zenModeMessage = 'Zen Mode Completed!';
    }, duration * 1000); // Convert seconds to milliseconds
  }

  stopZenMode(): void {
    this.isZenModeActive = false;
    this.zenModeAudio.pause();
    this.zenModeAudio.currentTime = 0;
    if (this.zenModeTimer) {
      clearTimeout(this.zenModeTimer);
    }
  }

  toggleCrisisSupport(): void {
    this.showCrisisSupport = !this.showCrisisSupport;
  }
}
