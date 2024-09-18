import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WellbeingService } from '../wellbeing.service';

@Component({
  selector: 'app-wellbeing-analyzer',
  templateUrl: './wellbeing-analyzer.component.html',
  styleUrls: ['./wellbeing-analyzer.component.css'],
})
export class WellbeingAnalyzerComponent implements OnInit {
  wellbeingForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private wellbeingService: WellbeingService
  ) {
    // Initialize the form with validators
    this.wellbeingForm = this.fb.group({
      userId: ['', Validators.required],
      sleepDuration: ['', [Validators.required, Validators.min(0)]],
      screenTime: ['', [Validators.required, Validators.min(0)]],
      calories: ['', [Validators.required, Validators.min(0)]],
      workLifeScore: [
        '',
        [Validators.required, Validators.min(0), Validators.max(100)],
      ],
    });
  }

  ngOnInit(): void {
    // Check if data is already in local storage and prefill the form (optional)
    const storedUserId = localStorage.getItem('userId');
    const storedSleepDuration = localStorage.getItem('sleepDuration');
    const storedScreenTime = localStorage.getItem('screenTime');
    const storedCalories = localStorage.getItem('calories');
    const storedWorkLifeScore = localStorage.getItem('workLifeScore');

    if (storedUserId && storedSleepDuration && storedScreenTime && storedCalories && storedWorkLifeScore) {
      this.wellbeingForm.setValue({
        userId: storedUserId,
        sleepDuration: +storedSleepDuration,
        screenTime: +storedScreenTime,
        calories: +storedCalories,
        workLifeScore: +storedWorkLifeScore,
      });
    }
  }

  analyzeWellbeing(): void {
    if (this.wellbeingForm.valid) {
      // Get form data
      const formData = this.wellbeingForm.value;

      // Save each form value in local storage separately
      localStorage.setItem('userId', formData.userId);
      localStorage.setItem('sleepDuration', formData.sleepDuration.toString());
      localStorage.setItem('screenTime', formData.screenTime.toString());
      localStorage.setItem('calories', formData.calories.toString());
      localStorage.setItem('workLifeScore', formData.workLifeScore.toString());

      // Fetch data from local storage
      const userId = localStorage.getItem('userId');
      const sleepDuration = localStorage.getItem('sleepDuration');
      const screenTime = localStorage.getItem('screenTime');
      const calories = localStorage.getItem('calories');
      const workLifeScore = localStorage.getItem('workLifeScore');

      // Create the prompt from local storage data
      const prompt = `User ID: ${userId}, Sleep Duration: ${sleepDuration} hours, Screen Time: ${screenTime} hours, Calories: ${calories} kcal, Work-Life Balance Score: ${workLifeScore}%`;

      // Log the request body for debugging
      console.log('Request Body:', { prompt });

      // Send the request to the backend for analysis
      this.wellbeingService.getWellbeingAnalysis(prompt).subscribe(
        (response) => {
          console.log('Analysis Result:', response);
          alert(`Wellbeing Analysis Result: ${response}`);
        },
        (error) => {
          console.error('Error:', error);
          alert('Error occurred while processing the analysis.');
        }
      );
    } else {
      console.log('Form is invalid');
      alert('Please fill out the form correctly.');
    }
  }
}
