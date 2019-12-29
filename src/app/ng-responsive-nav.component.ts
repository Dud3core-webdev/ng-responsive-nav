import { Component } from '@angular/core';

@Component({
  selector: 'ng-responsive-nav',
  template: `<app-desktop-navigation></app-desktop-navigation>
            <app-mobile-navigation-component></app-mobile-navigation-component>`
})
export class NgResponsiveNavComponent {}
