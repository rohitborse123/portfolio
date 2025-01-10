import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
 template: `
     <section id="projects" class="section-padding bg-base-200">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Project Card 1 -->
          <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
            <figure class="px-6 pt-6">
              <div class="h-48 w-full bg-primary/10 rounded-xl flex items-center justify-center relative overflow-hidden group">
                <div class="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 transform scale-105 group-hover:scale-100 transition-transform duration-300"></div>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 opacity-50 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </figure>
            <div class="card-body">
              <h3 class="card-title text-xl">E-Commerce Platform</h3>
              <div class="my-4 flex flex-wrap gap-2">
                <div class="badge badge-primary badge-outline">.NET Core</div>
                <div class="badge badge-primary badge-outline">SQL Server</div>
                <div class="badge badge-primary badge-outline">Angular</div>
              </div>
              <p class="text-base-content/80">A full-stack e-commerce solution with robust backend APIs and modern frontend interface.</p>
              <div class="card-actions justify-end mt-4">
                <a href="#" class="btn btn-primary btn-sm">View Details</a>
                <a href="#" class="btn btn-ghost btn-sm">Source Code</a>
              </div>
            </div>
          </div>

          <!-- Project Card 2 -->
          <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
            <figure class="px-6 pt-6">
              <div class="h-48 w-full bg-secondary/10 rounded-xl flex items-center justify-center relative overflow-hidden group">
                <div class="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20 transform scale-105 group-hover:scale-100 transition-transform duration-300"></div>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 opacity-50 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
            </figure>
            <div class="card-body">
              <h3 class="card-title text-xl">Task Management System</h3>
              <div class="my-4 flex flex-wrap gap-2">
                <div class="badge badge-secondary badge-outline">ASP.NET MVC</div>
                <div class="badge badge-secondary badge-outline">MySQL</div>
                <div class="badge badge-secondary badge-outline">Bootstrap</div>
              </div>
              <p class="text-base-content/80">Enterprise task management solution with real-time updates and team collaboration features.</p>
              <div class="card-actions justify-end mt-4">
                <a href="#" class="btn btn-primary btn-sm">View Details</a>
                <a href="#" class="btn btn-ghost btn-sm">Source Code</a>
              </div>
            </div>
          </div>

          <!-- Project Card 3 -->
          <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
            <figure class="px-6 pt-6">
              <div class="h-48 w-full bg-accent/10 rounded-xl flex items-center justify-center relative overflow-hidden group">
                <div class="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 transform scale-105 group-hover:scale-100 transition-transform duration-300"></div>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 opacity-50 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
            </figure>
            <div class="card-body">
              <h3 class="card-title text-xl">API Gateway Service</h3>
              <div class="my-4 flex flex-wrap gap-2">
                <div class="badge badge-accent badge-outline">.NET Core</div>
                <div class="badge badge-accent badge-outline">MongoDB</div>
                <div class="badge badge-accent badge-outline">Docker</div>
              </div>
              <p class="text-base-content/80">Microservices gateway with authentication, rate limiting, and request routing capabilities.</p>
              <div class="card-actions justify-end mt-4">
                <a href="#" class="btn btn-primary btn-sm">View Details</a>
                <a href="#" class="btn btn-ghost btn-sm">Source Code</a>
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
export class ProjectsComponent {

}
