import {WindowRef} from './window.ref';

export class BrowserWindowRef extends WindowRef {

  get nativeWindow(): Window | object {
    return window;
  }

  constructor() {
    super();
  }
}
