import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  link: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      name: 'Express Kiosk',
      description: 'Desktop kiosk application modernized with Electron.js and Angular 14. Handles hardware integrations (scanners, printers) with major UI/UX overhaul. Integrated with PMS systems (Stay, Versa, Visual One).',
      language: 'Electron.js + Angular',
      stars: 12,
      forks: 4,
      link: '#'
    },
    {
      id: 2,
      name: 'Unified Booking Engine',
      description: 'Comprehensive booking platform built with Angular 13/19. Includes admin dashboard and consumer-facing interfaces for hotel and restaurant reservations with real-time availability management.',
      language: 'Angular + Spring Boot',
      stars: 8,
      forks: 2,
      link: '#'
    },
    {
      id: 3,
      name: 'Web Portal & Reports',
      description: 'Enterprise web portal with dynamic WYSIWYG-based reporting tools. Built with C#, ASP.NET Core, and JavaScript with comprehensive test automation using Cypress and Selenium.',
      language: 'C# + ASP.NET',
      stars: 6,
      forks: 2,
      link: '#'
    },
    {
      id: 4,
      name: 'Portfolio Website',
      description: 'Modern responsive portfolio showcasing full-stack development skills and professional experience. Built with Angular 19 and SCSS with dark theme design.',
      language: 'Angular + SCSS',
      stars: 5,
      forks: 1,
      link: 'https://github.com/gpsakthivel/gpsakthivel.github.io'
    }
  ];
}
