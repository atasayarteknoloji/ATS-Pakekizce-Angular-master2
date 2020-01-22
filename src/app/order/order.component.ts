import { Component, OnInit } from '@angular/core';
import { NeworderService } from './getNewOrder/new-order.service';
import { NewOrder } from './getNewOrder/new-order';
import { DatePipe } from '@angular/common';
import { UncomplateOrderService } from './getInprogressOrder/uncomplate-order.service';
import { UncomplateOrder } from './getInprogressOrder/uncomplate-order';
import { NeworderDetailService } from './getNewOrderDetail/new-order-detail.service';
import { NewOrderDetail } from './getNewOrderDetail/new-order-detail';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.sass']
})
export class OrderComponent implements OnInit {
  items = [
    {
      id: 1,
      text: "Yeni Sipariş"
    },
    {
      id: 2,
      text: "Tamamlanmış Sipariş"
    }
  ]
  constructor(private newOrderService: NeworderService,
    private newOrderDetailService: NeworderDetailService) { }
  newOrder: NewOrder[]
  newOrderDetail: NewOrderDetail[];
  isShow = false;
  deneme = true;
  deneme1=true;
  ngOnInit() {
  }
  toggleNew() {
    this.isShow = !this.isShow;
  }
  toggleInprogress() {
    this.deneme = !this.deneme;
  }
  toggleComplatedOrder(){
    this.deneme1 =!this.deneme1;
  }
  print(){
    window.print();
  }

}
