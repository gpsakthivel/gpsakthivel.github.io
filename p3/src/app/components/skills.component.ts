import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  proficiency: 'Expert' | 'Advanced' | 'Intermediate';
  isHot?: boolean;
}

interface SkillCategory {
  title: string;
  subtitle: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      subtitle: 'Web & Desktop UI Development',
      skills: [
        { name: 'Angular (6-19)', proficiency: 'Expert', isHot: true },
        { name: 'React.js', proficiency: 'Advanced' },
        { name: 'TypeScript/JavaScript', proficiency: 'Expert' },
        { name: 'HTML/CSS/SASS', proficiency: 'Expert' },
        { name: 'Electron.js', proficiency: 'Advanced', isHot: true },
        { name: 'Nuxt.js', proficiency: 'Advanced' },
        { name: 'Material Design', proficiency: 'Advanced' },
        { name: 'jQuery', proficiency: 'Intermediate' }
      ]
    },
    {
      title: 'Backend',
      subtitle: 'Server-side Development',
      skills: [
        { name: 'Spring Boot', proficiency: 'Advanced', isHot: true },
        { name: 'ASP.NET Core', proficiency: 'Advanced', isHot: true },
        { name: 'ASP.NET MVC', proficiency: 'Advanced' },
        { name: 'C#', proficiency: 'Advanced' },
        { name: 'Java', proficiency: 'Advanced' },
        { name: 'Node.js', proficiency: 'Advanced' },
        { name: 'RESTful APIs', proficiency: 'Expert' }
      ]
    },
    {
      title: 'Database & DevOps',
      subtitle: 'Data & Deployment Tools',
      skills: [
        { name: 'MS SQL Server', proficiency: 'Advanced' },
        { name: 'MySQL', proficiency: 'Advanced' },
        { name: 'Azure DevOps', proficiency: 'Advanced', isHot: true },
        { name: 'Git/GitHub/GitLab', proficiency: 'Expert' },
        { name: 'AWS S3', proficiency: 'Advanced' },
        { name: 'Azure Blob Storage', proficiency: 'Advanced' }
      ]
    },
    {
      title: 'Testing & Automation',
      subtitle: 'QA & Build Tools',
      skills: [
        { name: 'Cypress', proficiency: 'Advanced', isHot: true },
        { name: 'Selenium', proficiency: 'Advanced' },
        { name: 'Protractor', proficiency: 'Advanced' },
        { name: 'Jasmine', proficiency: 'Advanced' },
        { name: 'Gulp.js', proficiency: 'Advanced' },
        { name: 'Cake (C# Make)', proficiency: 'Intermediate' }
      ]
    }
  ];
}
