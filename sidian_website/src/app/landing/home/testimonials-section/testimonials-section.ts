import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Testimonial } from '../../../models/clinic';


@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials-section.html',
  styleUrl: './testimonials-section.css',
})
export class TestimonialsSection {
  testimonials: Testimonial[]=[
    {
      id: 1,
      title: 'Drinking water is good for health',
      description: 'Beyond internal mechanics, consistent water intake aids in weight management by promoting fullness and enhances skin elasticity for a healthier appearance. By meeting your daily fluid needs, you ensure your body can absorb nutrients efficiently and maintain the vital balance required for long-term wellness.',
      image1 : 'images/water-1.jpg',
      image2 : 'images/water-2.jpg'
    },
    {
      id: 2,
      title: 'Eating fruits is good for health',
      description: 'Beyond internal health, the hydration and nutrients found in fresh produce lead to clearer skin and sustained energy levels throughout the day. By replacing processed snacks with a variety of colorful fruits, you provide your body with the vital fuel it needs to thrive.',
      image1:'images/fruit-1.jpeg',
      image2 : 'images/fruit-2.jpeg'
    }
  ]
}
