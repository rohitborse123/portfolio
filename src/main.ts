import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HeaderComponent } from './app/components/header/header.component';
import { FooterComponent } from './app/components/footer/footer.component';
import { HomeComponent } from './app/sections/home/home.component';
import { AboutComponent } from './app/sections/about/about.component';
import { SkillsComponent } from './app/sections/skills/skills.component';
import { ProjectsComponent } from './app/sections/projects/projects.component';
import { ContactComponent } from './app/sections/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent
  ],
  template: `
    <div class="app-container">
      <app-header></app-header>
      <main>
        <app-home></app-home>
        <app-about></app-about>
        <app-skills></app-skills>
        <app-projects></app-projects>
        <app-contact></app-contact>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    
    main {
      flex: 1;
      margin-top: 64px;
    }
  `]
})
export class App {
  constructor() {
    // Check system dark mode preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Set initial theme based on time of day (7AM-7PM = light, 7PM-7AM = dark)
    const hour = new Date().getHours();
    const isDayTime = hour >= 7 && hour < 19;
    const initialTheme = isDayTime ? 'light' : 'dark';
    
    // Set theme
    document.documentElement.setAttribute('data-theme', initialTheme);
    
    // Update checkbox state
    const themeController = document.querySelector('.theme-controller') as HTMLInputElement;
    if (themeController) {
      themeController.checked = initialTheme === 'dark';
    }

    // Listen for theme changes from toggle
    document.querySelector('.theme-controller')?.addEventListener('change', (e) => {
      const theme = (e.target as HTMLInputElement).checked ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', theme);
    });

    // Listen for system theme changes
    prefersDark.addEventListener('change', (e) => {
      const theme = e.matches ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', theme);
      if (themeController) {
        themeController.checked = e.matches;
      }
    });
  }
}

bootstrapApplication(App, {
  providers: []
});