import { Component, OnInit } from '@angular/core';
import { TurnDyehouseService } from './turn-dyehouse.service';
import { TurnDyehouse } from './turn-dyehouse';

@Component({
  selector: 'app-turn-dyehouse',
  templateUrl: './turn-dyehouse.component.html',
  styleUrls: ['./turn-dyehouse.component.scss']
})
export class TurnDyehouseComponent implements OnInit {
  settings = {
    hideSubHeader: true,
    actions: {
      position: 'right',
      columnTitle: '',
      custom: [],
      add: false,
      edit: false,
      delete: false
    },
    columns: {
      id: {
        title: "Sipariş Id",
        type:"number",
        filter: false
      },
      order: {
        title: "Statü",
        valuePrepareFunction: (order) => {
          return order.statu;
        },
        filter: false
      },
      item: {
        title: "Renk",
        type:"string",
        valuePrepareFunction: (item) => {
          return item.color;
        },
        filter: false
      },
      floor: {
        title: "Zemin",
        type:"string",
        filter: false
      },
      barcode: {
        title: "Barkod",
        type:"string",
        filter: false
      }
    },
    pager:
    {
      perPage: 10
    },
    mode:'external'
  };
  constructor(private dyehouseService: TurnDyehouseService) { }
  datas: TurnDyehouse[];
  checked: false;
  ngOnInit() {
    this.getdata();
  }
  getdata() {
    this.dyehouseService.getData().subscribe(o => {
      this.datas = o;
    });
  }
  toggleVisibility(e){
    this.checked= e.target.checked;
  }
}
