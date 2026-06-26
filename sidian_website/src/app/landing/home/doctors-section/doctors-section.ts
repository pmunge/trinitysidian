import { Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doctor } from '../../../models/clinic';

@Component({
  selector: 'app-doctors-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doctors-section.html',
  styleUrl: './doctors-section.css',
})
export class DoctorsSection implements OnInit, OnDestroy {
  @ViewChild('cardsRow') cardsRow!: ElementRef<HTMLElement>;
  private autoplayTimer: ReturnType<typeof setInterval> | null = null;

  doctors: Doctor[] = [
    {
      id: 1,
      name: 'Brian Maina',
      speciality: 'Doctor',
      image: '/images/doctor.png',
      contact: '+254728100707'
    },
    {
      id: 2,
      name: 'Violet Kitur',
      speciality: 'Doctor',
      image: '/images/doctor.png',
      contact: '+254710343517'
    },
    {
      id: 3,
      name: 'Lynn Kiragu',
      speciality: 'Nurse',
      image: '/images/doctor.png',
      contact: '+254799491658'
    },
    {
      id: 4,
      name: 'Lisa Muthoni',
      speciality: 'Lab Technician',
      image: '/images/doctor.png',
      contact: '+5566778899'
    }
  ];

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
    }
  }

  scrollCarousel(direction: 'left' | 'right'): void {
    const container = this.cardsRow?.nativeElement;
    if (!container) {
      return;
    }

    const amount = container.clientWidth * 0.8;
    container.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth'
    });
  }

  private startAutoplay(): void {
    this.autoplayTimer = setInterval(() => {
      const container = this.cardsRow?.nativeElement;
      if (!container) {
        return;
      }

      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScrollLeft - 10) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: container.clientWidth * 0.8, behavior: 'smooth' });
      }
    }, 4000);
  }
}
