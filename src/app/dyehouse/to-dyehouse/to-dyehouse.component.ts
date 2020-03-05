import { Component, OnInit } from '@angular/core';
import { ToDyehouseService } from './to-dyehouse.service';
import { ToDyehouse } from '../../order/model/to-dyehouse';

@Component({
  selector: 'app-to-dyehouse',
  templateUrl: './to-dyehouse.component.html',
  styleUrls: ['./to-dyehouse.component.scss']
})
export class ToDyehouseComponent implements OnInit {
  settings = {
    hideSubHeader: true,
    selectMode: 'multi',
    actions: {
      position: 'right',
      columnTitle: 'Barkod',
      custom: [{
        name: 'Barkod',
        title: '<ngx-barcode [bc-value]="GIZEM" [bc-element-type]="img" [bc-width]="1" [bc-height]="50" [bc-line-color]="#111111"></ngx-barcode>'
      }],
      add: false,
      edit: false,
      delete: false
    },
    columns: {
      id: {
        title: "Sipariş Id",
        type: "number",
        filter: false
      },
      statusId: {
        title: "Statü",
        valuePrepareFunction: (cell, row) => {
          return row.order.statusId;
        },
        filter: false
      },
      color: {
        title: "Renk",
        type: "string",
        valuePrepareFunction: (cell, row) => {
          return row.item.color;
        },
        filter: false
      },
      floor: {
        title: "Zemin",
        type: "string",
        valuePrepareFunction: (cell, row) => {
          return row.item.floor;
        },
        filter: false
      }
    },
    pager:
    {
      perPage: 10
    },
    mode: 'external'
  };
  constructor(private dyehouseService: ToDyehouseService) { }
  datas: ToDyehouse[];
  selectedRows: any;
  id:number;
  ngOnInit() {
    this.getdata();
    //this.onClick();
  }
  getdata() {
    this.dyehouseService.getData().subscribe(o => {
      this.datas = o;
    });
  }
  rowClicked(event) {
    console.log(event);
  }
  onUserRowSelect(event) {

    this.selectedRows = event.data;
    this.orderid= this.selectedRows.id;
    this.id=this.selectedRows.order.statusId;
    console.log(event.data);
  }
  orderid:number;

  onClick() {
    // It will console all the selected rows
    //debugger;
      console.log("seçilen satır statü", this.id);
    this.selectedRows.order.statusId =3;
    //this.dyehouseService.postStatu(this.orderid,this.selectedRows);
    //console.log("yeni statü", this.selectedRows.order.statusId)
    this.dyehouseService.updatePost(this.orderid,this.id).subscribe(
      data=>{
        this.datas=data;
      });
  }
}
