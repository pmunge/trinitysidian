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
    description: 'A complete blood count that evaluates your overall health and helps detect infections, anemia, inflammation, and other blood disorders.',
    image: 'images/blood.jpg',
    category: 'blood'
  },
  {
    name: 'Blood Sugars',
    description: 'Measures the level of glucose in your blood to help diagnose and monitor diabetes and other blood sugar-related conditions.',
    image: 'images/urine.jpg',
    category: 'blood'
  },
  {
    name: 'Haemoglobin Levels',
    description: 'Determines the amount of haemoglobin in your blood to assess anemia, oxygen-carrying capacity, and overall blood health.',
    image: 'images/xray.jpg',
    category: 'blood'
  },
  {
    name: 'Malaria RDT',
    description: 'A rapid diagnostic test that detects malaria parasites in the blood, providing quick and reliable results for prompt treatment.',
    image: 'images/hiv.jpg',
    category: 'blood'
  },
  {
    name: 'Blood Group & Rh Factor',
    description: 'Identifies your blood type and Rh factor, which are essential for safe blood transfusions, pregnancy care, and medical procedures.',
    image: 'images/blood.jpg',
    category: 'blood'
  },
  {
    name: 'VDRL (Syphilis Test)',
    description: 'Screens for syphilis by detecting antibodies in the blood, enabling early diagnosis and timely treatment.',
    image: 'images/blood.jpg',
    category: 'blood'
  },
  {
    name: 'HIV',
    description: 'Confidential HIV testing for early detection, routine screening, and effective management with professional counseling and support.',
    image: 'images/blood.jpg',
    category: 'blood'
  },
  {
    name: 'Hepatitis',
    description: 'Detects hepatitis virus infections to support early diagnosis, treatment, and protection of liver health.',
    image: 'images/blood.jpg',
    category: 'blood'
  },

  // Stool Tests

  {
    name: 'Salmonella',
    description: 'Detects Salmonella bacteria in stool samples to diagnose foodborne infections causing diarrhea, fever, and abdominal pain.',
    image: 'images/blood.jpg',
    category: 'stool'
  },
  {
    name: 'Helicobacter Pylori',
    description: 'Identifies Helicobacter pylori infection, a common cause of stomach ulcers, gastritis, and persistent abdominal discomfort.',
    image: 'images/blood.jpg',
    category: 'stool'
  },
  {
    name: 'Rota Virus',
    description: 'Detects Rotavirus infection, a leading cause of severe diarrhea and dehydration, particularly in infants and young children.',
    image: 'images/blood.jpg',
    category: 'stool'
  },

  // Urine Tests

  {
    name: 'Urinalysis',
    description: 'A comprehensive urine examination used to detect urinary tract infections, kidney disease, diabetes, and other health conditions.',
    image: 'images/blood.jpg',
    category: 'urine'
  },
  {
    name: 'Pregnancy Test',
    description: 'Detects the pregnancy hormone (hCG) in urine to provide a quick and accurate confirmation of pregnancy.',
    image: 'images/blood.jpg',
    category: 'urine'
  }

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
