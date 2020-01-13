import {Component, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';

import {User} from '../../app/_models';
import {AuthenticationService, UserService} from '../../app/_services';
import {SidebarService} from '../components/sidebar/sidebar.service';

@Component({templateUrl: 'home.component.html'})
export class HomeComponent implements  OnInit{
  loading = false;
  currentUser: User;
  userFromApi: User;

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService,
    public sidebarservice: SidebarService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    this.loading = true;
    this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
      this.loading = false;
      this.userFromApi = user;
    });
  }
}
