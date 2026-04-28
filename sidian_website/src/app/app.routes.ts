import { Routes } from '@angular/router';
import { Home } from './landing/home/home';
import { AboutSection } from './landing/home/about-section/about-section';
import { ServicesSection } from './landing/home/services-section/services-section';
import { Lab } from './landing/home/lab/lab';
import { DoctorsSection } from './landing/home/doctors-section/doctors-section';


export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: AboutSection },
  { path: 'services', component: ServicesSection },
  {path: 'lab', component: Lab},
  {path:'doctors', component: DoctorsSection}
];
