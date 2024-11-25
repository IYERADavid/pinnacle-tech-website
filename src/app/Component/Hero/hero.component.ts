import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),  
        animate('1000ms', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('1000ms', style({ opacity: 0, transform: 'translateY(-10px)' }))
      ])
    ])
  ]
})
export class HeroComponent implements OnInit {

  ngOnInit(): void {
    
  }
  isScrolled = false;
  isMenuOpen = false;
  activeDropdown: string | null = null;

  menuItems = [
    {
      name: 'Services',
      dropdown: [
        { name: 'Web Development', link: '/services/web-development' },
        { name: 'Mobile Apps', link: '/services/mobile-apps' },
        { name: 'Cloud Solutions', link: '/services/cloud' },
        { name: 'AI & ML', link: '/services/ai-ml' }
      ]
    },
    {
      name: 'Solutions',
      dropdown: [
        { name: 'Enterprise', link: '/solutions/enterprise' },
        { name: 'Startups', link: '/solutions/startups' },
        { name: 'Healthcare', link: '/solutions/healthcare' }
      ]
    },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' }
  ];

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }

  @HostListener('window:resize')
  onWindowResize() {
    if (window.innerWidth > 768) {
      this.isMenuOpen = false;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  toggleDropdown(menuItem: string) {
    this.activeDropdown = this.activeDropdown === menuItem ? null : menuItem;
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.activeDropdown = null;
    document.body.style.overflow = 'auto';
  }
}