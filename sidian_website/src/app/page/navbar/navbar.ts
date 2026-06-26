import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  menuOpen = false;
  isScrolled! : any;

  navItems = [
    {path: '/', label: 'Home'},
    {path: '/about', label: 'About'},
    {path: '/services', label: 'Services'},
    {path:'/labs', label: 'Labs'},
    {path:'/doctors', label: 'Doctors'},
    {path: '/contact', label: 'Contact'},
  ]
  
  @HostListener('window:scroll')
  onScroll(){
    this.isScrolled = window.scrollY > 80;
  };

  scrollToSection(sectionId: string, event?: Event): void {
    event?.preventDefault();
    this.menuOpen = false;

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
}
