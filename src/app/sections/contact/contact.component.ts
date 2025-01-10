import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule], 
  standalone: true,
   template: `
  <section id="contact" class="section-padding bg-base-200">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-4xl font-bold text-center mb-12">Let's Connect</h2>
        
        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Contact Info Cards -->
          <div class="lg:col-span-1 space-y-6">
            <!-- Email Card -->
            <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div class="card-body">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-lg">Email</h3>
                    <a href="mailto:contact@example.com" class="text-primary hover:underline">contactexample.com</a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Location Card -->
            <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div class="card-body">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-lg">Location</h3>
                    <p class="opacity-80">City, Country</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Social Links Card -->
            <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div class="card-body">
                <div class="flex items-center gap-4 mb-4">
                  <div class="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" clip-rule="evenodd" />
                      <path d="M10 4a1 1 0 100 2 1 1 0 000-2zm0 7a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm0-3a1 1 0 100 2 1 1 0 000-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-lg">Social Links</h3>
                  </div>
                </div>
                <div class="flex justify-center gap-4">
                  <a href="#" class="btn btn-circle btn-outline hover:bg-primary hover:border-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="#" class="btn btn-circle btn-outline hover:bg-primary hover:border-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="lg:col-span-2">
            <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div class="card-body">
                <h3 class="text-2xl font-bold mb-6">Send a Message</h3>
                <form class="space-y-6">
                  <div class="grid md:grid-cols-2 gap-6">
                    <div class="form-control">
                      <label class="label">
                        <span class="label-text font-medium">Name</span>
                      </label>
                      <input type="text" placeholder="Your name" class="input input-bordered w-full focus:input-primary" />
                    </div>
                    
                    <div class="form-control">
                      <label class="label">
                        <span class="label-text font-medium">Email</span>
                      </label>
                      <input type="email" placeholder="your.email@example.com" class="input input-bordered w-full focus:input-primary" />
                    </div>
                  </div>
                  
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text font-medium">Subject</span>
                    </label>
                    <input type="text" placeholder="Message subject" class="input input-bordered w-full focus:input-primary" />
                  </div>
                  
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text font-medium">Message</span>
                    </label>
                    <textarea class="textarea textarea-bordered h-32 focus:textarea-primary" placeholder="Your message"></textarea>
                  </div>
                  
                  <div class="form-control mt-6">
                    <button class="btn btn-primary hover-lift">
                      Send Message
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </form>
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

    .hover-lift {
      transition: transform 0.3s ease;
    }

    .hover-lift:hover {
      transform: translateY(-2px);
    }

    .card {
      backdrop-filter: blur(10px);
    }
  `]
   
 
})
export class ContactComponent {
 
  
}
