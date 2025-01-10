import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
     <section id="about" class="section-padding bg-base-100">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12">About Me</h2>
        <div class="grid lg:grid-cols-2 gap-8">
          <!-- Personal Info Card -->
          <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div class="card-body">
              <div class="flex items-center gap-4 mb-6">
                <div class="avatar">
                  <div class="w-24 rounded-xl ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://api.dicebear.com/7.x/initials/svg?seed=RB" alt="Rohit Borse" />
                  </div>
                </div>
                <div>
                  <h3 class="text-2xl font-bold">Rohit Borse</h3>
                  <p class="text-lg opacity-80">.NET Developer</p>
                  <div class="badge badge-primary mt-2">3 Years Experience</div>
                </div>
              </div>
              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-lg">Professional Background</h4>
                    <p class="opacity-80">Experienced .NET Developer with 3 years of expertise in building robust backend solutions and web applications.</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-lg">Core Focus</h4>
                    <p class="opacity-80">Specialized in backend development with .NET technologies and database management.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Expertise Card -->
          <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div class="card-body">
              <h3 class="text-2xl font-bold mb-6">What I Bring to the Table</h3>
              <div class="grid gap-6">
                <div class="flex items-start gap-3">
                  <div class="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 16L3 6h18l-9 10zm0-12L8 8h8l-4-4z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-lg">Backend Excellence</h4>
                    <p class="opacity-80">Strong expertise in ASP.NET, .NET Core, and Web API development with a focus on building scalable solutions.</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.59 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm0 2c3.87 0 6 1.5 6 2s-2.13 2-6 2-6-1.5-6-2 2.13-2 6-2zm0 14c-3.87 0-6-1.5-6-2v-1.82c1.61.78 3.72 1.32 6 1.32s4.39-.54 6-1.32V17c0 .5-2.13 2-6 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-lg">Database Mastery</h4>
                    <p class="opacity-80">Proficient in designing and optimizing database solutions using MS SQL Server and MySQL.</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h2v2H7V7zm4 0h2v2h-2V7zm4 0h2v2h-2V7z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-lg">Full Stack Capabilities</h4>
                    <p class="opacity-80">Experienced in both backend and frontend development, ensuring end-to-end solution delivery.</p>
                  </div>
                </div>
              </div>
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
    
    .card {
      backdrop-filter: blur(10px);
      transition: all 0.3s ease;
    }

    .card:hover {
      transform: translateY(-5px);
    }
  `]
})
export class AboutComponent {}