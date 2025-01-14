import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="navbar bg-base-100 fixed top-0 z-50 shadow-md">
    <div class="avatar">
  <div class="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
  <img src="https://api.dicebear.com/7.x/initials/svg?seed=RB" alt="Rohit Borse" />

  </div>
</div>
    <div class="navbar-start">
        <a class="btn btn-ghost text-xl animate-fadeIn">Rohit Borse</a>
      </div>
      <div class="navbar-end">
        <label class="swap swap-rotate">
          <input
            type="checkbox"
            class="theme-controller"
            [checked]="theme === 'dark'"
            (change)="toggleTheme()"
          />
          <svg
            class="swap-on fill-current w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
            />
          </svg>
          <svg
            class="swap-off fill-current w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
            />
          </svg>
        </label>
      </div>
      
      <div class="navbar-end">
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a href="#home" [class.active]="activeSection === 'home'" class="nav-link">Home</a></li>
            <li><a href="#about" [class.active]="activeSection === 'about'" class="nav-link">About</a></li>
            <li><a href="#skills" [class.active]="activeSection === 'skills'" class="nav-link">Skills</a></li>
            <li><a href="#projects" [class.active]="activeSection === 'projects'" class="nav-link">Projects</a></li>
            <li><a href="#contact" [class.active]="activeSection === 'contact'" class="nav-link">Contact</a></li>
          </ul>
        </div>
        <ul class="menu menu-horizontal px-1 hidden lg:flex">
          <li><a href="#home" [class.active]="activeSection === 'home'" class="nav-link">Home</a></li>
          <li><a href="#about" [class.active]="activeSection === 'about'" class="nav-link">About</a></li>
          <li><a href="#skills" [class.active]="activeSection === 'skills'" class="nav-link">Skills</a></li>
          <li><a href="#projects" [class.active]="activeSection === 'projects'" class="nav-link">Projects</a></li>
          <li><a href="#contact" [class.active]="activeSection === 'contact'" class="nav-link">Contact</a></li>
        </ul>
      </div>
    </header>
  `,
  styles: [`
    :host {
      display: block;
    }
    
    .animate-fadeIn {
      animation: fadeIn 0.5s ease-in;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .nav-link {
      position: relative;
      transition: all 0.3s ease;
      border: 1px solid transparent;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      background: transparent;
    }

    .nav-link:hover {
      @apply text-primary;
      background: transparent;
    }

    .active {
      @apply font-bold;
      animation: rgbBorder 3s linear infinite;
      background: transparent !important;
    }

    .active::before {
      content: '';
      position: absolute;
      inset: -2px;
      border-radius: inherit;
      padding: 2px;
      background: linear-gradient(45deg, rgba(255,0,0,0.5), rgba(0,255,0,0.5), rgba(0,0,255,0.5), rgba(255,0,0,0.5));
      -webkit-mask: 
        linear-gradient(#fff 0 0) content-box, 
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      background-size: 300% 300%;
      animation: rgbMove 3s linear infinite;
    }

    .active::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      filter: blur(8px);
      background: inherit;
      animation: rgbShadow 3s linear infinite;
      opacity: 0.3;
      z-index: -1;
    }

    @keyframes rgbBorder {
      0% { border-color: rgba(255,0,0,0.5); }
      33% { border-color: rgba(0,255,0,0.5); }
      66% { border-color: rgba(0,0,255,0.5); }
      100% { border-color: rgba(255,0,0,0.5); }
    }

    @keyframes rgbMove {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    @keyframes rgbShadow {
      0% { box-shadow: 0 0 10px rgba(255,0,0,0.3); }
      33% { box-shadow: 0 0 10px rgba(0,255,0,0.3); }
      66% { box-shadow: 0 0 10px rgba(0,0,255,0.3); }
      100% { box-shadow: 0 0 10px rgba(255,0,0,0.3); }
    }
  `]
})
export class HeaderComponent implements OnInit {
  activeSection: string = 'home';
  theme: string = 'light'; // Default theme
  userOverride: boolean = false; // Tracks if the user manually toggled the theme

  ngOnInit() {
    this.setThemeBasedOnTime();
    this.highlightActiveSection();
    window.addEventListener('scroll', () => this.highlightActiveSection());
  }

  private setThemeBasedOnTime() {
    if (!this.userOverride) { // Only set theme if the user hasn't overridden it
      const currentHour = new Date().getHours();
      this.theme = currentHour >= 7 && currentHour < 19 ? 'light' : 'dark';
      this.applyTheme();
    }
  }

  toggleTheme() {
    this.userOverride = true; // Mark that the user manually changed the theme
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    this.applyTheme();
  }

  private applyTheme() {
    document.documentElement.setAttribute('data-theme', this.theme);
  }

  private highlightActiveSection() {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { top, bottom } = element.getBoundingClientRect();
        const elementTop = top + window.scrollY;
        const elementBottom = bottom + window.scrollY;

        if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
          this.activeSection = section;
          break;
        }
      }
    }
  }
}