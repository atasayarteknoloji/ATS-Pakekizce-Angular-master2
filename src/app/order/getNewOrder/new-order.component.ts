import { Component, OnInit } from '@angular/core';
import { NeworderService } from './new-order.service';
import { NewOrder } from './new-order';
import { Router, Routes, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { NewOrderDetail } from '../getNewOrderDetail/new-order-detail';
import { Barcode } from 'src/app/barcode/barcode';


@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss'],
  providers: [DatePipe]
})
export class NewOrderComponent implements OnInit {
  

  constructor(private newOrderService: NeworderService,
    private activatedRoute: ActivatedRoute,
    private datePipe: DatePipe,
    private route: Router,
    private newOrderDetail: NewOrderDetail) { }
  deneme: NewOrder[];
  filterText: string;
  newOrder: NewOrder[];
  isShow = true;
  base64: string;
  barcode: Barcode[];
  ngOnInit() {
    this.getNewOrder();
    
  }
  getNewOrder() {
    this.newOrderService.getData().subscribe(o => {
      this.newOrder = o;
    });
  }
  customRoute(e) {
    console.log('onUserRowSelect', e);
    if (e.data.orderId === this.newOrderDetail.orderId) {

    }
  }
  showDetail(newOrder) {
    this.isShow = !this.isShow;
  }

}