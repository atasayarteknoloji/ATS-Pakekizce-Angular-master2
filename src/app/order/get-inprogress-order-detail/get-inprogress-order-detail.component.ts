import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { inprogressOrderDetailService } from './get-inprogress-order.service';
import { NewOrderDetail } from '../model/new-order-detail';

@Component({
  selector: 'app-get-inprogress-order-detail',
  templateUrl: './get-inprogress-order-detail.component.html',
  styleUrls: ['./get-inprogress-order-detail.component.scss']
})
export class GetInprogressOrderDetailComponent implements OnInit {
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
  constructor(private detailService:inprogressOrderDetailService) { }
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