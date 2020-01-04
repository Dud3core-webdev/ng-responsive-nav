import {Component, Inject, OnInit} from '@angular/core';
import {NavConfig} from '../models/nav.config';
import {WINDOW} from '../window/window.provider';

@Component({
  selector: 'app-desktop-navigation',
  templateUrl: './desktop-navigation.component.html',
  styleUrls: ['./desktop-navigation.component.scss']
})
export class DesktopNavigationComponent implements OnInit {
  public navConfig: NavConfig;
  public canFadeBoxShadowOut = false;

  private readonly _window: Window;

  constructor(navConfig: NavConfig, @Inject(WINDOW) window: Window) {
    this.navConfig = navConfig;
    this._window = window;
  }

  public ngOnInit(): void {
    this._window.addEventListener('scroll', () => {
      this.canFadeBoxShadowOut = this._window.scrollY > 0;
    });
  }

}
