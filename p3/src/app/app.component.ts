import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  name = 'Sakthivel P';
  role = 'Full Stack Developer';
  
  skills = [
    { name: 'Angular', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'JavaScript', level: 90 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Node.js', level: 80 },
    { name: 'Git', level: 85 }
  ];

  projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce application built with Angular and Node.js',
      tech: ['Angular', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'Real-time collaborative task management tool with drag-and-drop interface',
      tech: ['Angular', 'Firebase', 'RxJS'],
      link: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with charts and forecasts',
      tech: ['Angular', 'TypeScript', 'API Integration'],
      link: '#'
    }
  ];

  contactEmail = 'psakthi24vel@gmail.com';
  githubUrl = 'https://github.com/gpsakthivel';
}
