import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  template: `
   <section id="skills" class="section-padding bg-base-200">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12">Technical Expertise</h2>
        
        <!-- Main Skills Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <!-- .NET Stack -->
          <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div class="card-body">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 8.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.852 7.565h-4.821V7.53h4.63v1.24h-3.205v2.494h2.953v1.234h-2.953v2.604h3.396zm-6.708 0H8.882L4.78 9.863v6.472H3.343V7.53h1.558l4.102 6.471V7.53h1.437z"/>
                  </svg>
                </div>
                <h3 class="card-title text-2xl">.NET Development</h3>
              </div>
              <div class="space-y-6">
                <div class="skill-item">
                  <div class="flex justify-between mb-2">
                    <span class="font-medium">ASP.NET & .NET MVC</span>
                    <span class="text-primary">Expert</span>
                  </div>
                  <div class="w-full bg-base-200 rounded-full h-3">
                    <div class="bg-primary h-full rounded-full" style="width: 90%">
                      <div class="glow"></div>
                    </div>
                  </div>
                </div>
                <div class="skill-item">
                  <div class="flex justify-between mb-2">
                    <span class="font-medium">.NET Core Web API</span>
                    <span class="text-primary">Advanced</span>
                  </div>
                  <div class="w-full bg-base-200 rounded-full h-3">
                    <div class="bg-primary h-full rounded-full" style="width: 85%">
                      <div class="glow"></div>
                    </div>
                  </div>
                </div>
                <div class="skill-item">
                  <div class="flex justify-between mb-2">
                    <span class="font-medium">C#</span>
                    <span class="text-primary">Advanced</span>
                  </div>
                  <div class="w-full bg-base-200 rounded-full h-3">
                    <div class="bg-primary h-full rounded-full" style="width: 85%">
                      <div class="glow"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Database Expertise -->
          <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div class="card-body">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3C7.58 3 4 4.79 4 7V17C4 19.21 7.59 21 12 21S20 19.21 20 17V7C20 4.79 16.42 3 12 3M18 17C18 17.5 15.87 19 12 19S6 17.5 6 17V14.77C7.61 15.55 9.72 16 12 16S16.39 15.55 18 14.77V17M18 12.45C16.7 13.4 14.42 14 12 14C9.58 14 7.3 13.4 6 12.45V9.64C7.47 10.47 9.61 11 12 11C14.39 11 16.53 10.47 18 9.64V12.45M12 9C8.13 9 6 7.5 6 7S8.13 5 12 5C15.87 5 18 6.5 18 7S15.87 9 12 9Z"/>
                  </svg>
                </div>
                <h3 class="card-title text-2xl">Database</h3>
              </div>
              <div class="space-y-6">
                <div class="skill-item">
                  <div class="flex justify-between mb-2">
                    <span class="font-medium">MS SQL Server</span>
                    <span class="text-secondary">Expert</span>
                  </div>
                  <div class="w-full bg-base-200 rounded-full h-3">
                    <div class="bg-secondary h-full rounded-full" style="width: 90%">
                      <div class="glow"></div>
                    </div>
                  </div>
                </div>
                <div class="skill-item">
                  <div class="flex justify-between mb-2">
                    <span class="font-medium">MySQL</span>
                    <span class="text-secondary">Advanced</span>
                  </div>
                  <div class="w-full bg-base-200 rounded-full h-3">
                    <div class="bg-secondary h-full rounded-full" style="width: 85%">
                      <div class="glow"></div>
                    </div>
                  </div>
                </div>
                <div class="mt-4">
                  <h4 class="font-semibold mb-3">Database Expertise:</h4>
                  <div class="grid grid-cols-2 gap-2">
                    <div class="badge badge-secondary badge-outline p-3">Stored Procedures</div>
                    <div class="badge badge-secondary badge-outline p-3">Triggers</div>
                    <div class="badge badge-secondary badge-outline p-3">Functions</div>
                    <div class="badge badge-secondary badge-outline p-3">Views</div>
                    <div class="badge badge-secondary badge-outline p-3">Data Analysis</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Frontend and Tools -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Frontend -->
          <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div class="card-body">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 18.178l-4.62-1.256-.328-3.544h2.27l.158 1.844 2.52.667 2.52-.667.26-2.866H6.96l-.635-6.678h11.35l-.227 2.21H8.822l.204 2.256h8.217l-.624 6.778L12 18.178zM3 2h18l-1.623 18L12 22l-7.377-2L3 2zm2.188 2L6.49 18.434 12 19.928l5.51-1.494L18.812 4H5.188z"/>
                  </svg>
                </div>
                <h3 class="card-title text-2xl">Frontend</h3>
              </div>
              <div class="space-y-6">
                <div class="skill-item">
                  <div class="flex justify-between mb-2">
                    <span class="font-medium">Angular</span>
                    <span class="text-accent">Advanced</span>
                  </div>
                  <div class="w-full bg-base-200 rounded-full h-3">
                    <div class="bg-accent h-full rounded-full" style="width: 80%">
                      <div class="glow"></div>
                    </div>
                  </div>
                </div>
                <div class="mt-4">
                  <h4 class="font-semibold mb-3">CSS Frameworks:</h4>
                  <div class="flex flex-wrap gap-2">
                    <div class="badge badge-accent badge-outline p-3">Tailwind CSS</div>
                    <div class="badge badge-accent badge-outline p-3">Bootstrap</div>
                    <div class="badge badge-accent badge-outline p-3">DaisyUI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Development Tools -->
          <div class="lg:col-span-2 card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div class="card-body">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-info/10 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.71 20.29L20.29 21.71A1 1 0 0 1 18.88 21.71L7 9.85A3.81 3.81 0 0 1 6 10A4 4 0 0 1 2 6A4 4 0 0 1 6 2A4 4 0 0 1 10 6A3.81 3.81 0 0 1 9.85 7L21.71 18.88A1 1 0 0 1 21.71 20.29M6 4A2 2 0 0 0 4 6A2 2 0 0 0 6 8A2 2 0 0 0 8 6A2 2 0 0 0 6 4M19.75 3.19L18.33 4.61C20.04 6.3 21 8.6 21 11C21 15.97 16.97 20 12 20C9.6 20 7.31 19.04 5.61 17.33L4.19 18.75C6.21 20.77 9 22 12 22C18.07 22 23 17.07 23 11C23 8 21.77 5.21 19.75 3.19M19 11C19 7.14 15.86 4 12 4C10.39 4 8.89 4.64 7.71 5.71L9.13 7.13C10.86 5.39 13.14 5.39 14.87 7.13C16.61 8.86 16.61 11.14 14.87 12.87L16.29 14.29C17.36 13.11 18 11.61 18 10C18 7.79 16.21 6 14 6C11.79 6 10 7.79 10 10C10 12.21 11.79 14 14 14C16.21 14 18 12.21 18 10H19Z"/>
                  </svg>
                </div>
                <h3 class="card-title text-2xl">Development Tools</h3>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="space-y-2">
                  <div class="badge badge-info badge-lg w-full justify-between gap-2">
                    VS Code
                    <span class="opacity-75">Expert</span>
                  </div>
                  <div class="badge badge-info badge-lg w-full justify-between gap-2">
                    Visual Studio
                    <span class="opacity-75">Expert</span>
                  </div>
                </div>
                <div class="space-y-2">
                  <div class="badge badge-info badge-lg w-full justify-between gap-2">
                    MSSQL Tools
                    <span class="opacity-75">Advanced</span>
                  </div>
                  <div class="badge badge-info badge-lg w-full justify-between gap-2">
                    Postman
                    <span class="opacity-75">Advanced</span>
                  </div>
                </div>
                <div class="space-y-2">
                  <div class="badge badge-info badge-lg w-full justify-between gap-2">
                    Git
                    <span class="opacity-75">Advanced</span>
                  </div>
                  <div class="badge badge-info badge-lg w-full justify-between gap-2">
                    Docker & CI/CD
                    <span class="opacity-75">Intermediate</span>
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

    .skill-item {
      position: relative;
    }


 
    .badge {
      font-size: 0.875rem;
    }

    .hover-shadow-2xl {
      transition: all 0.3s ease;
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
export class SkillsComponent {}