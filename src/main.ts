import 'zone.js/dist/zone';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [innerHTML]="inner"> </div>
    <div [innerHTML]="innerSanitized"> </div>

  `,
})
export class App {
  inner = '<p style="background:red;">Test</p>';
  innerSanitized = inject(DomSanitizer).bypassSecurityTrustHtml(this.inner);
}

bootstrapApplication(App);
