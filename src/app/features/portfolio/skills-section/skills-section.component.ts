import { Component, input } from '@angular/core';
import { SkillCategory } from '../../../core/models/portfolio.models';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.scss',
})
export class SkillsSectionComponent {
  readonly categories = input.required<readonly SkillCategory[]>();
}
