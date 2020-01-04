import {NavConfig} from '../models/nav.config';

export const defaultConfig: NavConfig = {
  navBrandConfig: {
    colorPalette: {
      primaryColor: '#1976D2',
      secondaryColor: '#ffffff',
      linkActiveColor: '#1976D2',
      linkColor: '#1976D2',
      tertiaryColor: '#1976D2',
      backGroundColor: '#ffffff'
    },
    brandImageUrl: 'https://placehold.it/300x300',
    zIndex: 1,
    boxShadow: true,
  },
  navigationHomeRoute: {
    routePath: '/',
    routeName: 'home'
  },
  navigationMenuRoutes: []
};
