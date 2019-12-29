export abstract class WindowRef {

  get nativeWindow(): Window | object {
    throw new Error('Not Implemented');
  }
}
