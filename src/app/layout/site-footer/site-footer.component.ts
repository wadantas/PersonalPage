import { Component, input } from '@angular/core';
import { ContactInfo } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.scss',
})
export class SiteFooterComponent {
  readonly contact = input.required<ContactInfo>();
  readonly year = new Date().getFullYear();
}
