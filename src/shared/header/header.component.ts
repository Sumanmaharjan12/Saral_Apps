import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @ViewChild('navitem') navitemRef!: ElementRef;
  toggleMenu(): void {
    const navEl = this.navitemRef.nativeElement;
    navEl.classList.toggle('active');
  }
}
