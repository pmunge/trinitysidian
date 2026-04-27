import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doctor } from '../../../models/clinic';

@Component({
  selector: 'app-doctors-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doctors-section.html',
  styleUrl: './doctors-section.css',
})
export class DoctorsSection {
  doctors: Doctor[] = [
    {
      id: 1,
      name: 'Brian Maina',
      speciality: 'Doctor',
      image: 'assets/images/doctor1.jpg',
      contact: '+1234567890'
    },
    {
      id: 2,
      name: 'Violet Kitur',
      speciality: 'Doctor',
      image: 'assets/images/doctor2.jpg',
      contact: '+0987654321'
    },
    {
      id: 3,
      name: 'Lynn Kiragu',
      speciality: 'Nurse',
      image: 'assets/images/doctor3.jpg',
      contact: '+1122334455'
    },
    {
      id: 4,
      name: 'Lisa Muthoni',
      speciality: 'Lab Technician',
      image: 'assets/images/doctor4.jpg',
      contact: '+5566778899'
    }
  ];
}
