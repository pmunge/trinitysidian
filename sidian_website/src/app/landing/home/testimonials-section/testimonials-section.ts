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
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.',
      image1 : 'images/water-1',
      image2 : 'images/water-2'
    },
    {
      id: 2,
      title: 'Eating fruits is good for health',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.',
      image1:'images/water-1',
      image2 : 'images/water-2'
    }
  ]
}
