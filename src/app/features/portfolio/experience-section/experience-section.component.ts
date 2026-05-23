import { Component, input } from '@angular/core';
import { Job } from '../../../core/models/portfolio.models';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  templateUrl: './experience-section.component.html',
  styleUrl: './experience-section.component.scss',
})
export class ExperienceSectionComponent {
  readonly jobs = input.required<readonly Job[]>();
}
