import { Component } from '@angular/core';

@Component({
  selector: 'app-saral-discount',
  templateUrl: './saral-discount.component.html',
  styleUrls: ['./saral-discount.component.scss']
})
export class SaralDiscountComponent {
  activeSection: string = 'corporate'; // Default to Cooperate

  data = {
    corporate: [
      '1. Signup and list your organization',
      '2. Add your employees to your profile',
      '3. Send corporate discount requests to merchants listed on the platform',
      '4. Receive and accept corporate discount requests from merchants',
      '5. Negotiate with merchants for better employee discounts'
    ],
    merchant: [
      '1. List your business on the platform',
      '2. Review corporate discount requests from organizations',
      '3. Accept or reject discount offers',
      '4. Track engagement from corporate clients',
      '5.Provide best value deals to expand reach'
    ],
    employees: [
      '1. Access corporate discounts from your organization',
      '2. Browse available merchant deals',
      '3. Use discount codes while purchasing',
      '4. Get notifications about new deals',
      '5. Enjoy benefits from verified offers'
    ]
  };

  setSection(section: string): void {
    this.activeSection = section;
  }
}
