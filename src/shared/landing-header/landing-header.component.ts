import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing-header',
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.scss']
})
export class LandingHeaderComponent {
  @ViewChild('navitem') navitemRef!: ElementRef;
  toggleMenu(): void {
    const navEl = this.navitemRef.nativeElement;
    navEl.classList.toggle('active');
  }

}
