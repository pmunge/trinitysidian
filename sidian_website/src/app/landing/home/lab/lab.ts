import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LabService } from '../../../models/clinic';

@Component({
  selector: 'app-lab',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lab.html',
  styleUrl: './lab.css',
})
export class Lab implements AfterViewInit  {
  labServices: LabService[] = [
    {
      name: 'Blood Test',
      description: 'Comprehensive blood testing services for accurate diagnosis and health monitoring.',
      image: 'images/blood.jpg'
    },
    {
      name: 'Urine Analysis',
      description: 'Detailed urine analysis to detect infections, kidney issues, and overall health status.',
      image: 'images/urine.jpg'
    },
    {
      name: 'X-Ray',
      description: 'Advanced X-ray imaging for precise diagnosis of bone fractures, lung conditions, and more.',
      image: 'images/xray.jpg'
    },
    {
      name: 'HIV test',
      description: 'lorem ipsium',
      image : 'images/hiv.jpg'
    }
  ]

  ngAfterViewInit() {
    this.initAnimations();
  }

  private initAnimations() {
    const cards = document.querySelectorAll('.service-card');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add animate-in class with stagger delay
          setTimeout(() => {
            entry.target.classList.add('animate-in');
          }, index * 100);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    cards.forEach(card => observer.observe(card));
  }
}
