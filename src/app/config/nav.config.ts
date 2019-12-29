import {NavBrandConfig} from './nav-brand.config';
import {NavigationMenuRoute} from './nav-routes.config';

export abstract class NavConfig {
  public readonly navColourConfig?: NavBrandConfig;
  public readonly navigationMenuRoutes?: Array<NavigationMenuRoute>;
  public readonly navigationHomeRoute: NavigationMenuRoute;
}
