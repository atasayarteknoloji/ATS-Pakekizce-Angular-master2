import { Component, OnInit } from '@angular/core';
import { NewOrderDetail } from './new-order-detail';
import { NeworderDetailService } from './new-order-detail.service';

@Component({
  selector: 'app-new-order-detail',
  templateUrl: './new-order-detail.component.html',
  styleUrls: []
})
export class NewOrderDetailComponent implements OnInit {

  constructor(private newOrderDetailService:NeworderDetailService) { }
  settings = {
    columns: {
      orderId:{
        title:'Sipariş Id',
        type:'string'
      },
      itemId: {
        title: 'Ürün Id',
        type: 'number',
      },
      itemName: {
        title: 'Ürün Adı',
        type: 'string',
      },
      quantity:{
        title:'Miktar',
        type:'number'
      },
      itemUnit:{
        title:'Ürün Birimi',
        type:'string'
      }
    },
  };
  newOrderDetail:NewOrderDetail[];
  ngOnInit() {
    this.getNewOrderDetail();
  }
  getNewOrderDetail(){
    this.newOrderDetailService.getData().subscribe(o=> {
      this.newOrderDetail = o;
    })
  }

}
