import { Component, input } from '@angular/core';
import { ContactInfo } from '../../../core/models/portfolio.models';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss',
})
export class ContactSectionComponent {
  readonly contact = input.required<ContactInfo>();

  linkedInLabel(url: string): string {
    return url.replace(/^https?:\/\//, '');
  }

  phoneHref(phone: string): string {
    return `tel:${phone.replace(/\s/g, '')}`;
  }
}
