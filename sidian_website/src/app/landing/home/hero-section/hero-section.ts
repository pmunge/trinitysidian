import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Stat } from '../../../models/clinic';

interface AnimatedStat extends Stat {
  target: number;
  suffix: string;
  display: number;
}

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection implements OnInit {
  stats: AnimatedStat[] = [
    this.createAnimatedStat({ value: '10+', label: 'Years of Experiance' }),
    this.createAnimatedStat({ value: '95%', label: 'Patient satisfaction rating' }),
    this.createAnimatedStat({ value: '5000+', label: 'Patients served annually' }),
    this.createAnimatedStat({ value: '6+', label: 'Healthcare providers' }),
  ];

  ngOnInit(): void {
    this.stats.forEach((stat, index) => {
      stat.display = 0;
      setTimeout(() => this.animateStat(stat, 1000), index * 60);
    });
  }

  private createAnimatedStat(stat: Stat): AnimatedStat {
    const match = stat.value.match(/^(\d+)(.*)$/);
    const target = match ? Number(match[1]) : 0;
    const suffix = match ? match[2] : '';
    return { ...stat, target, suffix, display: 0 };
  }

  private animateStat(stat: AnimatedStat, durationMs: number): void {
    const stepMs = 16;
    const totalSteps = Math.max(1, Math.round(durationMs / stepMs));
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep += 1;
      const progress = Math.min(currentStep / totalSteps, 1);
      stat.display = Math.round(stat.target * progress);

      if (progress >= 1) {
        stat.display = stat.target;
        clearInterval(timer);
      }
    }, stepMs);
  }
}
