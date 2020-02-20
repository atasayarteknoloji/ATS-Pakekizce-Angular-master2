import { Component, OnInit } from '@angular/core';
import { ToDyehouseService } from './to-dyehouse.service';
import { ToDyehouse } from './to-dyehouse';

@Component({
  selector: 'app-to-dyehouse',
  templateUrl: './to-dyehouse.component.html',
  styleUrls: ['./to-dyehouse.component.scss']
})
export class ToDyehouseComponent implements OnInit {
  settings = {
    hideSubHeader: true,
    actions: {
      position: 'right',
      columnTitle: 'Barkod',
      custom: [{
        name:'Barkod',
        title:'<ngx-barcode [bc-value]="GIZEM" [bc-element-type]="img" [bc-width]="1" [bc-height]="50" [bc-line-color]="#111111"></ngx-barcode>'
      }],
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
      }
    },
    pager:
    {
      perPage: 10
    },
    mode:'external'
  };
  constructor(private dyehouseService: ToDyehouseService) { }
  datas: ToDyehouse[];
  ngOnInit() {
    this.getdata();
  }
  getdata() {
    this.dyehouseService.getData().subscribe(o=>{
      this.datas =o;
    });
  }
  rowClicked(event) {
    console.log(event);
  }
}
