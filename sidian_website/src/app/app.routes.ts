import { Routes } from '@angular/router';
import { Home } from './landing/home/home';
import { AboutSection } from './landing/home/about-section/about-section';
import { ServicesSection } from './landing/home/services-section/services-section';


export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: AboutSection },
  { path: 'services', component: ServicesSection }
];
