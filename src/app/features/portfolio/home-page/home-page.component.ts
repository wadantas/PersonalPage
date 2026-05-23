import { Component } from '@angular/core';
import { PORTFOLIO } from '../../../core/data/portfolio.data';
import { SiteFooterComponent } from '../../../layout/site-footer/site-footer.component';
import { SiteHeaderComponent } from '../../../layout/site-header/site-header.component';
import { ContactSectionComponent } from '../contact-section/contact-section.component';
import { EducationSectionComponent } from '../education-section/education-section.component';
import { ExperienceSectionComponent } from '../experience-section/experience-section.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { SkillsSectionComponent } from '../skills-section/skills-section.component';
import { SummarySectionComponent } from '../summary-section/summary-section.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    SiteHeaderComponent,
    SiteFooterComponent,
    HeroSectionComponent,
    SummarySectionComponent,
    SkillsSectionComponent,
    ExperienceSectionComponent,
    EducationSectionComponent,
    ContactSectionComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  readonly portfolio = PORTFOLIO;
}
