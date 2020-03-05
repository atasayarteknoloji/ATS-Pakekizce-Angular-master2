import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NeworderDetailService } from './new-order-detail.service';
import { NewOrderDetail } from '../model/new-order-detail';

@Component({
  selector: 'app-new-order-detail',
  templateUrl: './new-order-detail.component.html',
  styleUrls: ['./new-order-detail.component.scss']
})
export class NewOrderDetailComponent implements OnInit {
  settings={
    hideSubHeader:true,
    actions:{
      position: 'right',
      add: false,
      edit: false,
      delete: false
    },
    columns: {
      id: {
        title: "Sipariş Id",
        filter: false
      },
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
  }
  constructor(private detailService:NeworderDetailService) { }
  @Input() name: string;
   @Input() componentName: string;
  @Input() ref: any;
  @Output() onRemove = new EventEmitter<any>();
  detail:NewOrderDetail[];
  ngOnInit() {
    this.getNewOrder();
  }
  
  getNewOrder() {
    this.detailService.getData().subscribe(data => {
      this.detail = data;
    });
  }
   close(ref:any){
    console.log("internal close");
    this.detailService.removeComponent(ref);
    this.detailService.componentSubjects[this.componentName].next("value emitted from "+ref.componentName)

  }

}
