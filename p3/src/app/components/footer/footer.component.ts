import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  contact = {
    name: 'Sakthivel P',
    phone: '9487047424',
    email: 'psakthi24vel@gmail.com'
  };
  
  socialLinks = [
    { name: 'GitHub', url: 'https://github.com', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
    { name: 'Email', url: 'mailto:psakthi24vel@gmail.com', icon: 'email' }
  ];
}
