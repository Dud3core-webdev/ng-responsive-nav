import {NavigationMenuRoute} from '../models/nav-routes.config';
import {NavConfig} from '../models/nav.config';
import {NavBrandConfig} from '../models/nav-brand.config';
import {NavColorPalette} from '../models/nav-color-pallete';
import {defaultConfig} from './default-config';


export class NavConfigFactory {

  public static for(config: Partial<NavConfig>): NavConfig {
    return {
      navigationMenuRoutes: this._mapNavigationMenuRoutes(config.navigationMenuRoutes),
      navigationHomeRoute: this._mapNavigationHomeRoute(config.navigationHomeRoute),
      navBrandConfig: this._mapBrandConfig(config.navBrandConfig)
    };
  }

  private static _mapNavigationMenuRoutes(navLinks: Array<Partial<NavigationMenuRoute>>): Array<NavigationMenuRoute> {
    return navLinks ? [...navLinks] : defaultConfig.navigationMenuRoutes;
  }

  private static _mapNavigationHomeRoute(homeRoute: Partial<NavigationMenuRoute>): NavigationMenuRoute {
    return homeRoute ? homeRoute : defaultConfig.navigationHomeRoute;
  }

  private static _mapBrandConfig(styles: Partial<NavBrandConfig>): NavBrandConfig {
    return {
      brandImageUrl: styles.brandImageUrl ? styles.brandImageUrl : defaultConfig.navBrandConfig.brandImageUrl,
      colorPalette: this._mapColorPalette(styles.colorPalette),
      zIndex: styles.zIndex ? styles.zIndex : defaultConfig.navBrandConfig.zIndex,
      boxShadow:  styles.boxShadow ? styles.boxShadow : defaultConfig.navBrandConfig.boxShadow,
      animateBoxShadowOnScroll: styles.animateBoxShadowOnScroll ? styles.animateBoxShadowOnScroll : defaultConfig.navBrandConfig.animateBoxShadowOnScroll,
    };
  }

  private static _mapColorPalette(colorPalette: Partial<NavColorPalette>): NavColorPalette {
    if (colorPalette) {
      return {
        primaryColor: colorPalette.primaryColor,
        secondaryColor: colorPalette.secondaryColor,
        linkActiveColor: colorPalette.linkActiveColor,
        linkColor: colorPalette.linkColor,
        tertiaryColor: colorPalette.tertiaryColor,
        backGroundColor: colorPalette.backGroundColor,
      };
    }
    return {
      primaryColor: defaultConfig.navBrandConfig.colorPalette.primaryColor,
      secondaryColor: defaultConfig.navBrandConfig.colorPalette.secondaryColor,
      linkActiveColor: defaultConfig.navBrandConfig.colorPalette.linkActiveColor,
      linkColor: defaultConfig.navBrandConfig.colorPalette.linkColor,
      tertiaryColor: defaultConfig.navBrandConfig.colorPalette.tertiaryColor,
      backGroundColor: defaultConfig.navBrandConfig.colorPalette.backGroundColor,
    };
  }
}
