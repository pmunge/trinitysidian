import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from '../../../models/clinic';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-section.html',
  styleUrl: './services-section.css',
})
export class ServicesSection {
  services: Service[] = [
    {
      id: 1,
      title: 'Consultation',
      description: 'Talk to a doctor and get to ask all the questions you have',
      image: 'images/consultation-service.jpg'
    },
    {
      id: 2,
      title: 'Treatment',
      description: 'treatment',
      image: 'images/treatment-service.jpg'
    },
    {
      id: 3,
      title: 'lab tests',
      description: 'get tested know what you have',
      image: 'images/lab-service.jpg'
    }
  ]
}
