import {BrowserWindowRef} from './browser-window.ref';
import {isPlatformBrowser} from '@angular/common';

export function WindowFactory(browserWindowRef: BrowserWindowRef, platformId: object): Window | Object {
  if (isPlatformBrowser(platformId)) {
    return browserWindowRef.nativeWindow;
  }

  return {};
}
