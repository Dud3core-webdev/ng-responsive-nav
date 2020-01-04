import {ModuleWithProviders, NgModule} from '@angular/core';
import { NgResponsiveNavComponent } from './ng-responsive-nav.component';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {DesktopNavigationComponent} from './desktop-navigation/desktop-navigation.component';
import {MobileNavigationComponent} from './mobile-navigation/mobile-navigation.component';
import {OrientationDirective} from './directives/orientation.directive';
import {WINDOW_PROVIDERS} from './window/browser-window.provider';
import {NavConfig} from './models/nav.config';
import {RouterModule} from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NavConfigFactory} from './factories/nav-config.factory';

const declarations = [
  DesktopNavigationComponent,
  MobileNavigationComponent,
  OrientationDirective,
  NgResponsiveNavComponent
];

@NgModule({
  declarations: [...declarations],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    NgResponsiveNavComponent
  ],
  providers: [
    WINDOW_PROVIDERS
  ]
})

export class NgResponsiveNavModule {

  public static forRoot(navConfig: Partial<NavConfig>): ModuleWithProviders {
    return {
      ngModule: NgResponsiveNavModule,
      providers: [
        {provide: NavConfig, useValue: NavConfigFactory.for(navConfig)}
      ]
    };
  }
}
