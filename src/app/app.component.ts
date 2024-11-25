import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './Component/Hero/hero.component';
import { AboutComponent } from './Component/About/about.component';
import { ContactsComponent } from './Component/Contacts/contacts.component';
import { InsightsComponent } from './Component/Insights/insights.component';
import { FooterComponent } from './Component/Footer/footer.component';
import { CareersComponent } from './Component/Careers/careers.component';
import { IndustriesComponent } from './Component/Industries/industries.component';
import { HeaderComponent } from './Component/Header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeroComponent,
    AboutComponent,
    ContactsComponent,
    InsightsComponent,
    FooterComponent,
    CareersComponent,
    IndustriesComponent,
    HeaderComponent,
    CommonModule
  ],
  template: `
    <app-hero />
    <app-about /> 
    <app-contacts /> 
    <app-insights />
    <app-footer />
    <app-careers />
    <app-industries />
    <app-header />
    <router-outlet />
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'pinnacle-tech-app';
}





