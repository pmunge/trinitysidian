
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Service } from '../../../models/clinic';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services-section.html',
  styleUrls: ['./services-section.css'],
})

export class ServicesComponent {

  @Input() sectionTitle: string = 'Our Services';
  @Input() sectionSubtitle: string = 'Premium care for your wellness journey';
  @Input() centerImageUrl: string = '/images/background-hero.png';

  services: Service[] = [
    {
      id: 1,
      title: 'Natural Wellness',
      description: 'Discover organic solutions designed to enhance your daily life and promote sustainable living practices.'
    },
    { 
      id: 2,
      title: 'Expert Guidance',
      description: 'Our specialists provide personalized advice to help you make informed choices for your health.'
    },
    { 
      id:3,
      title: 'Premium Quality',
      description: 'Each product is carefully curated and tested to ensure the highest standards of excellence.'
    },
    { id: 4,
      title: 'Community Focus',
      description: 'Join our growing community of wellness enthusiasts committed to sustainable and healthy living.'
    }
  ];

  constructor() { }

}