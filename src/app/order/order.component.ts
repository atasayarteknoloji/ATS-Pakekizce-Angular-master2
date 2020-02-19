import { Component, OnInit } from '@angular/core';
import { NeworderService } from './getNewOrder/new-order.service';
import { NewOrder } from './getNewOrder/new-order';
import { NeworderDetailService } from './getNewOrderDetail/new-order-detail.service';
import { NewOrderDetail } from './getNewOrderDetail/new-order-detail';
import { PrintService } from '../components/print/print.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {


  isNewOrder = true;
  isProgressOrder = false;
  isCompletedOrder = false;

  newOrder: NewOrder[]
  newOrderDetail: NewOrderDetail[];
  viewModel = 'toggleNew';
  isShow = false;
  deneme = true;
  deneme1 = true;
  deneme2 = true;

  constructor(private newOrderService: NeworderService,
    private newOrderDetailService: NeworderDetailService) {
  }

  ngOnInit() {
  }

  toggleNew() {
    this.isShow = false;
    this.deneme = true;
    this.deneme1 = true;
    this.isNewOrder = true;
    this.isProgressOrder = false;
    this.isCompletedOrder = false;
  }

  toggleInprogress() {
    this.deneme = false
    this.isShow = true;
    this.deneme1 = true;
    this.isProgressOrder = true;
    this.isNewOrder = false;
    this.isCompletedOrder = false;
  }

  toggleComplatedOrder() {
    this.deneme1 = false;
    this.isShow = true;
    this.deneme = true;
    this.isCompletedOrder = true;
    this.isProgressOrder = false;
    this.isNewOrder = false;
  }

  toggledyehouse() {
    this.deneme2 = false;
    this.isShow = true;
    this.deneme = true;
    this.deneme1 = true;
  }


}
