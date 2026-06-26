
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
      title: 'Routine Health Check-Ups',
      description: 'Stay on top of your health with regular medical check-ups designed to detect potential concerns early. Our comprehensive assessments help you maintain a healthier lifestyle and provide peace of mind for you and your family.'
    },
    { 
      id: 2,
      title: 'General Medical Consultation',
      description: 'Receive personalized care from experienced healthcare professionals who take the time to understand your concerns. We provide accurate diagnoses, treatment plans, and guidance to help you recover and stay healthy.'
    },
    { 
      id:3,
      title: 'Laboratory & Diagnostic Services',
      description: 'Our laboratory offers reliable diagnostic testing to support timely and accurate medical decisions. From routine blood work to essential screenings, we deliver results you can trust.'
    },
    { id: 4,
      title: 'Chronic Disease Management',
      description: 'Living with a chronic condition does not mean facing it alone. We provide continuous monitoring, personalized treatment plans, and regular follow-up care to help you effectively manage diabetes, hypertension, asthma, and other long-term health conditions.'
    }
  ];

  constructor() { }

}