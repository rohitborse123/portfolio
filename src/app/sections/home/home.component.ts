import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
      <section id="home" class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse gap-12 max-w-7xl mx-auto">
        <!-- Hero Image/Avatar -->
        <div class="relative">
          <div class="w-64 h-64 relative">
            <div class="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-20 rounded-full animate-pulse"></div>
            <img 
              src="https://api.dicebear.com/7.x/initials/svg?seed=RB&backgroundColor=4f46e5" 
              alt="Rohit Borse" 
              class="w-full h-full object-cover rounded-full ring-4 ring-primary/30 p-1"
            />
          </div>
          <!-- Floating Badges -->
          <div class="absolute -top-4 -right-4 badge badge-primary p-4 animate-bounce">.NET</div>
          <div class="absolute -bottom-4 -left-4 badge badge-secondary p-4 animate-bounce delay-100">SQL</div>
          <div class="absolute -top-4 -left-4 badge badge-accent p-4 animate-bounce delay-200">Angular</div>
        </div>

        <!-- Hero Content -->
        <div class="text-center lg:text-left max-w-2xl">
          <div class="flex flex-col gap-4">
            <h1 class="text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
              Hi, I'm Rohit Borse
            </h1>
            <div class="flex items-center gap-2 justify-center lg:justify-start">
              <h2 class="text-2xl font-semibold">.NET Developer</h2>
              <div class="badge badge-primary">3 Years</div>
            </div>
            <p class="py-6 text-lg opacity-80">
              Passionate about building robust backend solutions and scalable web applications. 
              Specialized in .NET development with expertise in database management and full-stack development.
            </p>
            <div class="flex gap-4 justify-center lg:justify-start">
              <a href="#contact" class="btn btn-primary hover-lift">
                Get in Touch
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a>
              <a href="#projects" class="btn btn-outline hover-lift">
                View Projects
              </a>
            </div>
            <!-- Tech Stack Pills -->
            <div class="flex flex-wrap gap-2 mt-4 justify-center lg:justify-start">
              <div class="badge badge-outline p-3">ASP.NET Core</div>
              <div class="badge badge-outline p-3">SQL Server</div>
              <div class="badge badge-outline p-3">Angular</div>
              <div class="badge badge-outline p-3">Docker</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }

    .hover-lift {
      transition: transform 0.3s ease;
    }

    .hover-lift:hover {
      transform: translateY(-2px);
    }

    @keyframes gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    .animate-gradient {
      background-size: 200% auto;
      animation: gradient 3s linear infinite;
    }
  `]
})
export class HomeComponent {}