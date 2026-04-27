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
  isMenuCollapsed = true;
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
  }
}
