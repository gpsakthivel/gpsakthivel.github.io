import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  techStack = [
    'Angular',
    'Spring Boot',
    '.NET Core',
    'React.js',
    'Node.js',
    'C#',
    'Java',
    'TypeScript',
    'Electron.js',
    'Cypress',
    'Azure DevOps',
    'AWS'
  ];
}
