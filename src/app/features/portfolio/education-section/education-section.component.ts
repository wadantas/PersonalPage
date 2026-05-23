import { Component, input } from '@angular/core';
import { EducationItem, LanguageItem } from '../../../core/models/portfolio.models';

@Component({
  selector: 'app-education-section',
  standalone: true,
  templateUrl: './education-section.component.html',
  styleUrl: './education-section.component.scss',
})
export class EducationSectionComponent {
  readonly education = input.required<readonly EducationItem[]>();
  readonly languages = input.required<readonly LanguageItem[]>();
}
