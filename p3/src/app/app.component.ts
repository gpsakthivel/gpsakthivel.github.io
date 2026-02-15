import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero.component';
import { WorkExperienceComponent } from './components/work-experience.component';
import { ProjectsComponent } from './components/projects.component';
import { SkillsComponent } from './components/skills.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeroComponent,
    WorkExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}
