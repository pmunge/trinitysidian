import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Location {
  name: string;
  isMain: boolean;
  address: string;
  city: string;
  country: string;
  phone: string;
  email: string;
  hours: string;
  weekend: string;
  mapsUrl?: string;
}

interface ContactInfo {
  general: {
    phone: string;
    email: string;
    emergency: string;
  };
  social: {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
    youtube: string;
  };
}

interface QuickLink {
  name: string;
  sectionId: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  currentYear = new Date().getFullYear();
  showCopyNotification = signal(false);
  copyMessage = signal('');

  locations: Location[] = [
    {
      name: 'Main Clinic',
      isMain: true,
      address: 'Zimmerman',
      city: 'Nairobi',
      country: 'Kenya',
      phone: '+254 722560062',
      email: 'info@sidiantrinity.co.ke',
      hours: 'Mon-Fri: 8AM-11PM',
      weekend: 'Sat: 8AM-11PM, Sun: 8AM-2PM',
      mapsUrl: 'https://maps.app.goo.gl/BdM3azHw2WkrWtX6A'
    },
  ];

  contactInfo: ContactInfo = {
    general: {
      phone: '+254 722560062',
      email: 'info@sidiantrinity.co.ke',
      emergency: '+254 700 999 911'
    },
    social: {
      facebook: 'https://facebook.com/sidiantrinity',
      twitter: 'https://twitter.com/sidiantrinity',
      instagram: 'https://instagram.com/sidiantrinity',
      linkedin: 'https://linkedin.com/company/sidiantrinity',
      youtube: 'https://youtube.com/sidiantrinity'
    }
  };

  quickLinks: QuickLink[] = [
    { name: 'Home', sectionId: 'home' },
    { name: 'Services', sectionId: 'services' },
    { name: 'Doctors', sectionId: 'doctors' },
    { name: 'Contact', sectionId: 'contact' }
  ];

  legalLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' }
  ];

  async copyToClipboard(text: string, label: string) {
    try {
      await navigator.clipboard.writeText(text);
      this.copyMessage.set(`${label} copied!`);
      this.showCopyNotification.set(true);
      setTimeout(() => {
        this.showCopyNotification.set(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

  openMaps(location: Location) {
  const url = 'https://maps.app.goo.gl/BdM3azHw2WkrWtX6A';
  window.open(url, '_blank');
  }

  scrollToSection(sectionId: string, event?: Event): void {
    event?.preventDefault();

    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const target = document.getElementById(sectionId);
    if (!target) {
      return;
    }

    const offset = 80;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
