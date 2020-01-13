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
      active: false,
      type: 'dropdown',
      
      submenus: [
        {
          title: 'Siparişler',
          routerLink: ROUTING.NEW_ORDER
        },
        {
          title: 'Tamamlanmamış Sipariş',
          routerLink: ROUTING.UNCOMPLETEORDER

        },
        {
          title: 'Tamamlanan Sipariş',
          routerLink: ROUTING.ORDER

        }
      ]
    },
    {
      title: 'Sevk',
      icon: 'fa fa-shopping-cart',
      active: false,
      type: 'dropdown',
      badge: {
        text: '3',
        class: 'badge-danger'
      },
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
    },

    {
      title: 'Ekstra',
      type: 'header'
    },
    {
      title: 'Dokümantasyon',
      icon: 'fa fa-book',
      active: false,
      type: 'simple',
      badge: {
        text: 'Beta',
        class: 'badge-primary'
      },
    },
    {
      title: 'Takvim',
      icon: 'fa fa-calendar',
      active: false,
      type: 'simple'
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