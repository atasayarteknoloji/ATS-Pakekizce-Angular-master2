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
      itemId: {
        title: 'Ürün Id',
        type: 'number',
      },
      itemName: {
        title: 'Ürün Adı',
        type: 'string',
      },
      lineType: {
        title: 'Kalem Tipi',
        type: 'string',
      },
      isThereBarcode: {
        title: 'Barkod var mı?',
        type: 'boolean',
      },
      itemStatu: {
        title: 'Ürün Statü',
        type: 'number',
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
