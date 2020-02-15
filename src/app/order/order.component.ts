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
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
 
  constructor(private newOrderService: NeworderService,
    private newOrderDetailService: NeworderDetailService) { }
  newOrder: NewOrder[]
  newOrderDetail: NewOrderDetail[];
  viewModel='toggleNew';

 
  isShow = false;
  deneme = true;
  deneme1=true;
  deneme2=true;
  ngOnInit() {
  }
  toggleNew() {
    this.isShow = false;
    this.deneme=true;
    this.deneme1=true;;
  }
  toggleInprogress() {
    this.deneme = false
    this.isShow=true;
    this.deneme1=true;
  }
  toggleComplatedOrder(){
    this.deneme1 =false;
    this.isShow=true;
    this.deneme=true;
  }
  toggledyehouse(){
    this.deneme2 =false;
    this.isShow=true;
    this.deneme=true;
    this.deneme1=true
  }
  print(){
    window.print();
  }

}
