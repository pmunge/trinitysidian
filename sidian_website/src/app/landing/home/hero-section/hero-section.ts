import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Stat } from '../../../models/clinic';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {

  stats: Stat[] = [
    {value:'10+', label : 'Years of Experiance'},
    {value: '95%', label: 'Patient satisfaction rating'},
    {value: '5000+', label: 'Patients served annually' },
    {value: '6+', label: 'Healthcare providers'}
  ]
}
