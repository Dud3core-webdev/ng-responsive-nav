import { Component } from '@angular/core';
import {NavConfig} from '../config/nav.config';

@Component({
  selector: 'app-desktop-navigation',
  templateUrl: './desktop-navigation.component.html',
  styleUrls: ['./desktop-navigation.component.scss']
})
export class DesktopNavigationComponent {
  public navConfig: NavConfig;

  constructor(navConfig: NavConfig) {
    this.navConfig = navConfig;
  }

}
