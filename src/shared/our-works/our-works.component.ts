import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-our-works',
  templateUrl: './our-works.component.html',
  styleUrls: ['./our-works.component.scss']
})
export class OurWorksComponent {
  @ViewChild('content', { static: false }) content!: ElementRef;

 scroll(direction: string) {
  const screenWidth = window.innerWidth;

  // Set scroll amount based on screen width
  const scrollAmount = (screenWidth >= 600 && screenWidth <= 1200) ? 320 : 470;

  // Scroll in the desired direction
  if (direction === 'left') {
    this.content.nativeElement.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  } else {
    this.content.nativeElement.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }
}

}
