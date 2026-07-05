import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroSection } from './hero-section/hero-section';
import { AboutSection } from './about-section/about-section';
import { ServicesComponent } from './services-section/services-section';
import { Lab } from './lab/lab';
import { TestimonialsSection } from './testimonials-section/testimonials-section';
import { DoctorsSection } from './doctors-section/doctors-section';
import { Choice } from './choice/choice';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeroSection,
    AboutSection,
    ServicesComponent,
    DoctorsSection,
    Lab,
    TestimonialsSection,
    Choice
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {}
