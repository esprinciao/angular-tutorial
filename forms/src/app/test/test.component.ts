import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  questions = [
    {
      text: 'Today, how often did you feel down, depressed, or hopeless?',
      options: [
        { label: 'Not at all', value: 0, color: '#28a745' },
        { label: 'A little', value: 1, color: '#ffc107' },
        { label: 'Moderately', value: 2, color: '#fd7e14' },
        { label: 'Very often', value: 3, color: '#dc3545' },
      ],
      selectedOption: null,
    },
    {
      text: 'Today, how often did you have little interest or pleasure in doing things?',
      options: [
        { label: 'Not at all', value: 0, color: '#28a745' },
        { label: 'A little', value: 1, color: '#ffc107' },
        { label: 'Moderately', value: 2, color: '#fd7e14' },
        { label: 'Very often', value: 3, color: '#dc3545' },
      ],
      selectedOption: null,
    },
    {
      text: 'Today, how often did you feel nervous, anxious, or on edge?',
      options: [
        { label: 'Not at all', value: 0, color: '#28a745' },
        { label: 'A little', value: 1, color: '#ffc107' },
        { label: 'Moderately', value: 2, color: '#fd7e14' },
        { label: 'Very often', value: 3, color: '#dc3545' },
      ],
      selectedOption: null,
    },
    {
      text: 'Today, how often did you have trouble relaxing?',
      options: [
        { label: 'Not at all', value: 0, color: '#28a745' },
        { label: 'A little', value: 1, color: '#ffc107' },
        { label: 'Moderately', value: 2, color: '#fd7e14' },
        { label: 'Very often', value: 3, color: '#dc3545' },
      ],
      selectedOption: null,
    },
    {
      text: 'Today, how often did you feel restless or find it hard to sit still?',
      options: [
        { label: 'Not at all', value: 0, color: '#28a745' },
        { label: 'A little', value: 1, color: '#ffc107' },
        { label: 'Moderately', value: 2, color: '#fd7e14' },
        { label: 'Very often', value: 3, color: '#dc3545' },
      ],
      selectedOption: null,
    },
    {
      text: 'Today, how often did you feel afraid as if something awful might happen?',
      options: [
        { label: 'Not at all', value: 0, color: '#28a745' },
        { label: 'A little', value: 1, color: '#ffc107' },
        { label: 'Moderately', value: 2, color: '#fd7e14' },
        { label: 'Very often', value: 3, color: '#dc3545' },
      ],
      selectedOption: null,
    },
    {
      text: 'Today, how often did you experience difficulty concentrating?',
      options: [
        { label: 'Not at all', value: 0, color: '#28a745' },
        { label: 'A little', value: 1, color: '#ffc107' },
        { label: 'Moderately', value: 2, color: '#fd7e14' },
        { label: 'Very often', value: 3, color: '#dc3545' },
      ],
      selectedOption: null,
    },
    {
      text: 'Today, how often did you feel irritable or easily annoyed?',
      options: [
        { label: 'Not at all', value: 0, color: '#28a745' },
        { label: 'A little', value: 1, color: '#ffc107' },
        { label: 'Moderately', value: 2, color: '#fd7e14' },
        { label: 'Very often', value: 3, color: '#dc3545' },
      ],
      selectedOption: null,
    },
    {
      text: 'Today, how often did you feel fatigued or had low energy?',
      options: [
        { label: 'Not at all', value: 0, color: '#28a745' },
        { label: 'A little', value: 1, color: '#ffc107' },
        { label: 'Moderately', value: 2, color: '#fd7e14' },
        { label: 'Very often', value: 3, color: '#dc3545' },
      ],
      selectedOption: null,
    },
    {
      text: 'Today, how often did you have feelings of worthlessness or excessive guilt?',
      options: [
        { label: 'Not at all', value: 0, color: '#28a745' },
        { label: 'A little', value: 1, color: '#ffc107' },
        { label: 'Moderately', value: 2, color: '#fd7e14' },
        { label: 'Very often', value: 3, color: '#dc3545' },
      ],
      selectedOption: null,
    },
    {
      text: 'Today, how often did you feel overwhelmed by your daily tasks?',
      options: [
        { label: 'Not at all', value: 0, color: '#28a745' },
        { label: 'A little', value: 1, color: '#ffc107' },
        { label: 'Moderately', value: 2, color: '#fd7e14' },
        { label: 'Very often', value: 3, color: '#dc3545' },
      ],
      selectedOption: null,
    },
  ];

  result: any = null;

  calculateScore() {
    let totalScore = this.questions.reduce((sum, question) => {
      // If selectedOption is null, treat it as 0
      const optionValue = question.selectedOption !== null ? question.selectedOption : 0;
      return sum + optionValue;
    }, 0);

    this.result = {
      depression: this.getDepressionLevel(totalScore),
      anxiety: this.getAnxietyLevel(totalScore),
      stress: this.getStressLevel(totalScore),
    };
  }

  getDepressionLevel(score: number): string {
    if (score <= 10) return 'Minimal';
    if (score <= 20) return 'Mild';
    if (score <= 30) return 'Moderate';
    return 'Severe';
  }

  getAnxietyLevel(score: number): string {
    if (score <= 10) return 'Minimal';
    if (score <= 20) return 'Mild';
    if (score <= 30) return 'Moderate';
    return 'Severe';
  }

  getStressLevel(score: number): string {
    if (score <= 10) return 'Minimal';
    if (score <= 20) return 'Mild';
    if (score <= 30) return 'Moderate';
    return 'Severe';
  }
}
