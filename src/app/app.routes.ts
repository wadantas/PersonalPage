import { Routes } from '@angular/router';
import { HomePageComponent } from './features/portfolio/home-page/home-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'William Araujo Dantas — Senior Software Engineer',
  },
  { path: '**', redirectTo: '' },
];
