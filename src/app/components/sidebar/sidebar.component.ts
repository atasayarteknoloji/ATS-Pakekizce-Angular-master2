import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {SidebarService} from './sidebar.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../_services';
import {BehaviorSubject} from 'rxjs';
import {User} from '../../_models';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('slide', [
      state('up', style({height: 0})),
      state('down', style({height: '*'})),
      transition('up <=> down', animate(200))
    ])
  ]
})
export class SidebarComponent implements OnInit {
  menus = [];
  private currentUserSubject: BehaviorSubject<User>;
  constructor(public sidebarservice: SidebarService,
              private router: Router,
              private authenticationService: AuthenticationService) {
    this.menus = sidebarservice.getMenuList();
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    console.log(this.currentUserSubject);
  }

  ngOnInit() {
  }

  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }

  toggle(currentMenu) {
    if (currentMenu.type === 'dropdown') {
      this.menus.forEach(element => {
        if (element === currentMenu) {
          currentMenu.active = !currentMenu.active;
        } else {
          element.active = false;
        }
      });
    }
  }

  getState(currentMenu) {

    if (currentMenu.active) {
      return 'down';
    } else {
      return 'up';
    }
  }

  hasBackgroundImage() {
    return this.sidebarservice.hasBackgroundImage;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
