import { Component, OnInit } from '@angular/core';
import { PackagingService } from './packaging.service';
import { Packaging } from '../order/model/packaging';

@Component({
  selector: 'app-packaging',
  templateUrl: './packaging.component.html',
  styleUrls: ['./packaging.component.scss']
})
export class PackagingComponent implements OnInit {
  settings = {
    hideSubHeader: true,
    selectMode: 'multi',
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
      name: {
        title: "isim",
        type:"number",
        valuePrepareFunction: (cell,row) => {
          return row.item.name;
        },
        filter: false
      },
      color: {
        title: "Renk",
        type:"string",
        valuePrepareFunction: (cell,row) => {
          return row.item.color;
        },
        filter: false
      },
      floor: {
        title: "Zemin",
        type:"string",
        valuePrepareFunction: (cell,row) => {
          return row.item.floor;
        },
        filter: false
      },
      rope: {
        title: "İp",
        type:"string",
        valuePrepareFunction: (cell,row) => {
          return row.item.rope;
        },
        filter: false
      },
      pattern: {
        title: "Desen",
        type:"string",
        valuePrepareFunction: (cell,row) => {
          return row.item.pattern;
        },
        filter: false
      },
      strike: {
        title: "Vuruş",
        type:"string",
        valuePrepareFunction: (cell,row) => {
          return row.item.strike;
        },
        filter: false
      }
    },
    pager:
    {
      perPage: 10
    },
    mode:'external'
  };
  constructor(private packagingService:PackagingService) { }
  datas:Packaging[];
  ngOnInit() {
    this.getPackage();
  }
  getPackage(){
    this.packagingService.getData().subscribe(o=>{
      this.datas=o;
    });
  }
  selectedRows: any;
  onUserRowSelect(event) {
    this.selectedRows = event.data;
    this.orderid= this.selectedRows.id;
    this.id=this.selectedRows.order.statusId;
    console.log(event.data);
  }
  orderid:number;
  id:number;
  onClick() {
    // It will console all the selected rows
    console.log("seçilen satır statü", this.selectedRows.order.statusId);
    this.selectedRows.order.statusId =5;
    this.packagingService.updatePost(this.orderid,this.selectedRows.order.statusId).subscribe(
      data=>{this.datas=data;})
  }
}
