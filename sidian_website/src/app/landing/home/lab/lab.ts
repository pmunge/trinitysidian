import { Component, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LabService } from '../../../models/clinic';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-lab',
  standalone: true,
  imports: [CommonModule, RouterModule, MatTabsModule, MatCardModule, MatButtonModule],
  templateUrl: './lab.html',
  styleUrl: './lab.css',
})
export class Lab implements AfterViewInit  {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ){}
  labServices: LabService[] = [
    //blood test
    {
      name: 'Full Haemogram',
      description: 'Comprehensive blood testing services for accurate diagnosis and health monitoring.',
      image: 'images/blood.jpg',
      category: 'blood'
    },
    {
      name: 'Blood Sugars',
      description: 'Detailed urine analysis to detect infections, kidney issues, and overall health status.',
      image: 'images/urine.jpg',
      category: 'blood'
    },
    {
      name: 'Haemoglobin levels',
      description: 'Advanced X-ray imaging for precise diagnosis of bone fractures, lung conditions, and more.',
      image: 'images/xray.jpg',
      category: 'blood'
    },
    {
      name: 'Malaria RDT',
      description: 'lorem ipsium',
      image : 'images/hiv.jpg',
      category: 'blood'
    },
     {
      name: 'Blood Group & RhFactor',
      description: 'Comprehensive blood testing services for accurate diagnosis and health monitoring.',
      image: 'images/blood.jpg',
      category: 'blood'
    },
     {
      name: 'Val Syphilis',
      description: 'Comprehensive blood testing services for accurate diagnosis and health monitoring.',
      image: 'images/blood.jpg',
      category: 'blood'
    },
     {
      name: 'HIV',
      description: 'Comprehensive blood testing services for accurate diagnosis and health monitoring.',
      image: 'images/blood.jpg',
      category: 'blood'
    },
     {
      name: 'Hepatitis',
      description: 'Comprehensive blood testing services for accurate diagnosis and health monitoring.',
      image: 'images/blood.jpg',
      category: 'blood'
    },
    //stool test
     {
      name: 'Salmonella',
      description: 'Comprehensive blood testing services for accurate diagnosis and health monitoring.',
      image: 'images/blood.jpg',
      category: 'stool'
    },
     {
      name: 'Helicobacter Pylori',
      description: 'Comprehensive blood testing services for accurate diagnosis and health monitoring.',
      image: 'images/blood.jpg',
      category: 'stool'
    },
     {
      name: 'Rota Virus',
      description: 'Comprehensive blood testing services for accurate diagnosis and health monitoring.',
      image: 'images/blood.jpg',
      category: 'stool'
    },
    //urine test
     {
      name: 'Urinalysis',
      description: 'Comprehensive blood testing services for accurate diagnosis and health monitoring.',
      image: 'images/blood.jpg',
      category: 'urine'
    },
     {
      name: 'Pregnancy ',
      description: 'Comprehensive blood testing services for accurate diagnosis and health monitoring.',
      image: 'images/blood.jpg',
      category: 'urine'
    },


  ]

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initAnimations();
    }
  }
  activeTab: 'blood' | 'urine' | 'stool' = 'blood';

   get filteredServices(): LabService[] {
      return this.labServices.filter(
       service => service.category === this.activeTab
     );
    }

   setTab(tab: 'blood' | 'urine' | 'stool') {
      this.activeTab = tab;
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
