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
}

interface ContactInfo {
  general: {
    phone: string;
    email: string;
    emergency: string;
    fax: string;
  };
  social: {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
    youtube: string;
  };
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
      address: '123 Health Street',
      city: 'Nairobi',
      country: 'Kenya',
      phone: '+254 700 123 456',
      email: 'info@citycareclinic.co.ke',
      hours: 'Mon-Fri: 8AM-8PM',
      weekend: 'Sat: 9AM-5PM, Sun: Closed'
    },
  ];

  contactInfo: ContactInfo = {
    general: {
      phone: '+254 700 123 456',
      email: 'info@citycareclinic.co.ke',
      emergency: '+254 700 999 911',
      fax: '+254 20 123 4567'
    },
    social: {
      facebook: 'https://facebook.com/citycareclinic',
      twitter: 'https://twitter.com/citycareclinic',
      instagram: 'https://instagram.com/citycareclinic',
      linkedin: 'https://linkedin.com/company/citycareclinic',
      youtube: 'https://youtube.com/citycareclinic'
    }
  };

  quickLinks = [
    { name: 'Home', path: '/home' },
    { name: 'Services', path: '/services' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Contact', path: '/contact' }
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
    const query = `${location.address}, ${location.city}, ${location.country}`;
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
    window.open(url, '_blank');
  }

  scrollToTop() {
    document.documentElement.scrollTop = 0;
    // or window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
