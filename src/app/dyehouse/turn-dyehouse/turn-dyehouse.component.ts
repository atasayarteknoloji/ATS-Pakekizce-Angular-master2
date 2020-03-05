import { Component, OnInit } from '@angular/core';
import { TurnDyehouseService } from './turn-dyehouse.service';
import { TurnDyehouse } from '../../order/model/turn-dyehouse';

@Component({
  selector: 'app-turn-dyehouse',
  templateUrl: './turn-dyehouse.component.html',
  styleUrls: ['./turn-dyehouse.component.scss']
})
export class TurnDyehouseComponent implements OnInit {
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
      id: {
        title: "Sipariş Id",
        type:"number",
        filter: false
      },
      statusId: {
        title: "Statü",
        valuePrepareFunction: (cell,row) => {
          return  row.order.statusId;
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
    this.selectedRows.order.statusId =4;
    this.dyehouseService.updatePost(this.orderid,this.selectedRows.order.statusId).subscribe(
      data=>{this.datas=data;})
  }
}
