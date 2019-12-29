# NgResponsiveNav

This is a fully responsive navigation menu solution. It comes with a desktop navigation menu and collapses into a mobile burger menu.
This library is for use with Angular 8 only, as I haven't tested it in older versions of Angular (or 9). It has minimal dependencies, no Bootstrap, just Angular, HTML, SCSS and the amazing
[Font Awesome Angular Module](https://www.npmjs.com/package/@fortawesome/angular-fontawesome)

## Installation

## How To Use
The navigation menu comes with a configuration object that is then used to style and populate the menu with route paths. 

```TypeScript
export abstract class NavConfig {
      public readonly navColourConfig?: NavBrandConfig;
      public readonly navigationMenuRoutes?: Array<NavigationMenuRoute>;
      public readonly navigationHomeRoute: NavigationMenuRoute;
}
```

The object is simple enough. For now the navigation menu can only accept parent routes as it's still a work in progress. 
To use the navigation Module, you must declare it in app.module (or your shared module) like so: 

```TypeScript
const navigationConfig: NavConfig =  {
  navColourConfig: {
    primary: '#1976D2',
    secondary: '#ffffff',
    brandImageUrl: 'https://placehold.it/300x300'
  },
  navigationHomeRoute: {
    routeName: 'home',
    routePath: ''
  },
  navigationMenuRoutes: [
    {
      routePath: './blog/catalogue',
      routeName: 'Blog'
    },
    {
      routePath: '',
      routeName: 'Showcase'
    }
  ]
};

@NgModule({
  imports: [NgResponsiveNavModule.forRoot(navigationConfig),],
  exports: [NgResponsiveNavModule]
})

export class SharedModule {}

```

Then on your component, simply declare it like any other ngModule: 

```html
<ng-responsive-nav></ng-responsive-nav>
<router-outlet></router-outlet>
```

I use it on top of my apps main router outlet, but it can be declared anywhere. 

### Demo: 

You can see a live version of this working over at [my blog](https://marcfreemandev.web.app/home)
