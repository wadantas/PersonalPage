import { Component, input } from '@angular/core';
import { ContactInfo } from '../../../core/models/portfolio.models';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  readonly contact = input.required<ContactInfo>();
}
