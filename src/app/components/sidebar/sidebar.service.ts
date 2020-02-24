import {Injectable} from '@angular/core';
import {ROUTING} from '../../shared/routing';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  toggled = false;
  menus = [
    {
      title: 'İşlemler',
      type: 'header'
    },
    {
      title: 'Siparişler',
      icon: 'fa fa-edit',
      active: true,
      type: 'dropdown',
      
      submenus: [
        {
          title: 'Siparişler',
          routerLink: ROUTING.ORDER
        },
        {
          title: 'Boyahaneye Gidiş',
          routerLink: ROUTING.TODYEHOUSE
        },
        {
          title: 'Boyahaneden Dönüş',
          routerLink: ROUTING.TURNDYEHOUSE
        },
        {
          title:'Paketleme',
          routerLink:ROUTING.PACKAGING
        }
      ]
    },
    {
      title: 'Sevk',
      icon: 'fas fa-truck',
      active: false,
      type: 'dropdown',

      submenus: [
        {
          title: 'Products',
        },
        {
          title: 'Orders'
        },
        {
          title: 'Credit cart'
        }
      ]
    }
  ];

  constructor() {
  }

  _hasBackgroundImage = true;

  get hasBackgroundImage() {
    return this._hasBackgroundImage;
  }

  set hasBackgroundImage(hasBackgroundImage) {
    this._hasBackgroundImage = hasBackgroundImage;
  }

  toggle() {
    this.toggled = !this.toggled;
  }

  getSidebarState() {
    return this.toggled;
  }

  setSidebarState(state: boolean) {
    this.toggled = state;
  }

  getMenuList() {
    return this.menus;
  }
}
