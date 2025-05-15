import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
faqs = [
    {
      question: 'What are the major benefits of developing mobile apps?',
      answer: 'Mobile apps provide benefits like enhanced user engagement, push notifications, offline access, and better performance.',
      isVisible: false
    },
    {
      question: 'How does a mobile app improve user engagement?',
      answer: 'Mobile apps improve engagement through features like push notifications, personalized content, and easy accessibility.',
      isVisible: false
    },
    {
      question: 'Do you upload the applications to app stores on our behalf?',
      answer: 'Yes, we can handle the submission process to both the Apple App Store and Google Play Store, including preparing required assets and following platform guidelines.',
      isVisible: false
    },
    {
      question: 'Do you ensure the app will be approved on app stores?',
      answer: 'Mobile apps improve engagement through features like push notifications, personalized content, and easy accessibility.',
      isVisible: false
    },
    {
    question: 'Do you ensure the app will be approved on app stores?',
    answer: 'Mobile apps improve engagement through features like push notifications, personalized content, and easy accessibility.',
    isVisible: false
    }

  ];

  toggleAnswer(index: number): void {
    this.faqs[index].isVisible = !this.faqs[index].isVisible;
  }
}
