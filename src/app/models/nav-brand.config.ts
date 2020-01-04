import {NavColorPalette} from './nav-color-pallete';

export abstract class NavBrandConfig {
  public readonly colorPalette?: NavColorPalette;
  public readonly brandImageUrl?: string;
  public readonly zIndex?: number;
  public readonly boxShadow?: boolean;
}
