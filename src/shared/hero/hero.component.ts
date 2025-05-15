import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  texts: string[] = [
    'Mobile App Development',
    'Web App Development',
    'Desktop App Development',
    'Website Development'
  ];

  currentText: string = '';
  textIndex: number = 0;
  charIndex: number = 0;
  isDeleting: boolean = false;

  ngOnInit() {
    this.typeEffect();
  }

  typeEffect() {
    const currentFullText = this.texts[this.textIndex];

    if (this.isDeleting) {
      this.currentText = currentFullText.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.currentText = currentFullText.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    let speed = this.isDeleting ? 50 : 100;

    if (!this.isDeleting && this.currentText === currentFullText) {
      speed = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentText === '') {
      this.isDeleting = false;
      this.textIndex = (this.textIndex + 1) % this.texts.length;
      speed = 500;
    }

    setTimeout(() => this.typeEffect(), speed);
  }

}
