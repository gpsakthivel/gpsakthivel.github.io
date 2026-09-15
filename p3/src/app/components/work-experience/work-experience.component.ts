import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface WorkExperience {
  id: number;
  position: string;
  company: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  skills: string[];
}

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss'
})
export class WorkExperienceComponent {
  experiences: WorkExperience[] = [
    {
      id: 1,
      position: 'Software Engineer II',
      company: 'Deloitte Consulting India Pvt Ltd',
      period: 'Aug 2025 - Present',
      location: 'Chennai, India',
      description: 'Developed enterprise-grade solutions including new development and migration projects.',
      responsibilities: [
        'Worked on the Life Science application using Angular 22 with the given Figma UI/UX designs',
        'Led Angular version migrations (v12-v22) across xprof application',
        'Worked on the GM2 to GM3 migration of the xprof application with Google Material 3 components and theming',
      ],
      skills: ['Angular 19-22', 'AWS S3', 'RESTful APIs', 'Google Material 2', 'Google Material 3']
    },
    {
      id: 2,
      position: 'Software Analyst',
      company: 'Agilysys Technologies India Pvt Ltd',
      period: 'Jun 2022 - Aug 2025',
      location: 'Chennai, India',
      description: 'Developed enterprise-grade solutions including Express Kiosk modernization and unified booking engine.',
      responsibilities: [
        'Modernized legacy kiosk app using Electron.js and Angular 14 with major UI/UX overhaul',
        'Migrated assets to Azure Blob Storage and integrated with PMS systems (Stay, Versa, Visual One)',
        'Designed and implemented secure RESTful APIs using Spring Boot',
        'Handled hardware integrations (scanners, printers) using .NET Core',
        'Developed booking platform with Angular 13/19 admin and consumer interfaces',
        'Led Angular version migrations (v6-v13) across legacy modules'
      ],
      skills: ['Angular 14-19', 'Spring Boot', '.NET Core', 'Electron.js', 'Azure Blob Storage', 'RESTful APIs']
    },
    {
      id: 3,
      position: 'Software Engineer',
      company: 'Syncfusion Software Pvt Ltd',
      period: 'Dec 2020 - Jun 2022',
      location: 'Chennai, India',
      description: 'Built web portal features and report designer tools with focus on automation and testing.',
      responsibilities: [
        'Built and enhanced website features using C#, ASP.NET Core, and JavaScript',
        'Automated build processes with Gulp.js reducing manual overhead',
        'Built dynamic WYSIWYG-based reports and dashboards for reporting tools',
        'Collaborated with UX teams for optimal report usability and accessibility',
        'Designed front-end test automation using Selenium, Protractor, Jasmine',
        'Migrated legacy test cases to Cypress for improved test performance'
      ],
      skills: ['C#', 'ASP.NET Core', 'WYSIWYG', 'Gulp.js', 'Selenium', 'Protractor', 'Jasmine', 'Cypress']
    }
  ];
}
