import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReasonChoice } from '../../../models/clinic';

@Component({
  selector: 'app-choice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './choice.html',
  styleUrls: ['./choice.css'],
})
export class Choice {
  @Input() tagline = 'Your health. Our mission. Your trust. Our pride.';

  reasonChoices: ReasonChoice[] = [
    {
      number: '01',
      title: 'Expert Care Team',
      icon: 'users',
      description: [
        'Our skilled and compassionate healthcare professionals are dedicated to providing quality care you can trust.',
        'We treat every patient with respect, kindness, and genuine concern.',
      ],
      image: '/images/choice1.jpeg',
    },
    {
      number: '02',
      title: 'Personalized Treatment',
      icon: 'heart',
      description: [
        'We understand that every patient is unique.',
        'Our team takes the time to listen, understand your needs, and create treatment plans tailored specifically to you.',
      ],
      image: '/images/choice2.jpeg',
    },
    {
      number: '03',
      title: 'Timely & Reliable Care',
      icon: 'clock',
      description: [
        'We value your time and health.',
        'Our team ensures prompt attention and efficient services without compromising on the quality of care.',
        'We are here when you need us most.',
      ],
      image: '/images/choice4.jpeg',
    },
    {
      number: '04',
      title: 'Community-Focused Healthcare',
      icon: 'family',
      description: [
        'As part of the community we serve, we are committed to improving the health and well-being of every individual and family.',
        'Your health is our priority, and we strive to build lasting relationships based on trust and compassion.',
      ],
      image: '/images/choice3.jpeg',
    },
  ];
}
