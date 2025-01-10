import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer footer-center p-10 bg-base-200 text-base-content rounded">
    
      <aside>
        <p>Copyright © 2024 - All rights reserved</p>
      </aside>
    </footer>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class FooterComponent {}