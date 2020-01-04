import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {DOCUMENT} from '@angular/common';
import {Subscription} from 'rxjs';
import {NavConfig} from '../models/nav.config';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mobile-navigation-component',
  templateUrl: 'mobile-navigation.component.html',
  styleUrls: ['mobile-navigation.component.scss']
})

export class MobileNavigationComponent implements OnInit, OnDestroy {

  public readonly navConfig: NavConfig;
  public readonly faBars = faBars;
  public readonly faTimes = faTimes;
  public canActivateMobileNav: boolean = false;

  private readonly _document: Document;
  private readonly _router: Router;
  private _subscriptions: Subscription = new Subscription();

  constructor(router: Router, @Inject(DOCUMENT) document: Document, navConfig: NavConfig) {
    this._router = router;
    this._document = document;
    this.navConfig = navConfig;
  }

  public ngOnInit(): void {
    this._document.body.style.overflowY = 'scroll';
    this._watchNavigationChanges(this._router);
  }

  public ngOnDestroy(): void {
    this.canActivateMobileNav = false;
    this._setOverFlowY();
    this._subscriptions.unsubscribe();
  }

  public toggleCanActivateMobileNavBar(): void {
    this.canActivateMobileNav = !this.canActivateMobileNav;
    this._setOverFlowY();
  }

  private _setOverFlowY(): void {
    this.canActivateMobileNav
      ? this._document.body.style.overflowY = 'hidden'
      : this._document.body.style.overflowY = 'scroll';
  }

  private _watchNavigationChanges(router: Router): void {
    this._subscriptions.add(
      router.events.subscribe((event) => {
        if (event instanceof NavigationEnd && this.canActivateMobileNav) {
          this.toggleCanActivateMobileNavBar();
        }
      })
    );
  }
}
