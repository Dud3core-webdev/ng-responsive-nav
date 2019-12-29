import {ClassProvider, FactoryProvider, PLATFORM_ID} from '@angular/core';
import {WindowRef} from './window.ref';
import {BrowserWindowRef} from './browser-window.ref';
import {WINDOW} from './window.provider';
import {WindowFactory} from './window.factory';

const browserWindowProvider: ClassProvider = {
  provide: WindowRef,
  useClass: BrowserWindowRef
};

const windowProvider: FactoryProvider = {
  provide: WINDOW,
  useFactory: WindowFactory,
  deps: [ WindowRef, PLATFORM_ID ]
};

export const WINDOW_PROVIDERS = [
  browserWindowProvider,
  windowProvider
];

