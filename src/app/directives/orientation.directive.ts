import {WINDOW} from '../window/window.provider';
import {DOCUMENT} from '@angular/common';
import {MobileNavigationComponent} from '../mobile-navigation/mobile-navigation.component';
import {Inject, Directive} from '@angular/core';

@Directive({
  selector: '[appCheckOrientation]'
})

export class OrientationDirective {
  private readonly window: Window;
  private readonly mobileNavMenu: MobileNavigationComponent;

  constructor(@Inject(DOCUMENT) document: Document, @Inject(WINDOW) window: Window, mobileNavMenu: MobileNavigationComponent) {
    this.window = window;
    this.mobileNavMenu = mobileNavMenu;

    this.onInitialise();
  }

  public onInitialise(): void {
    this.window.addEventListener('orientationchange', () => {
      if (this._isLandScape()) {
        this.mobileNavMenu.canActivateMobileNav = false;
        document.body.style.overflowY = 'scroll';
      }
    });
  }

  private _isLandScape(): boolean {
    return this.window.outerWidth < this.window.outerHeight;
  }
}
