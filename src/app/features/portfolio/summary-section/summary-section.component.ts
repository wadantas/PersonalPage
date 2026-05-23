import { Component, input } from '@angular/core';

@Component({
  selector: 'app-summary-section',
  standalone: true,
  templateUrl: './summary-section.component.html',
  styleUrl: './summary-section.component.scss',
})
export class SummarySectionComponent {
  readonly paragraphs = input.required<readonly string[]>();
}
