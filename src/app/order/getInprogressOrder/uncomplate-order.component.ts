import { Component, OnInit } from '@angular/core';
import { UncomplateOrderService } from './uncomplate-order.service';
import { UncomplateOrder } from './uncomplate-order';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-uncomplate-order',
  templateUrl: './uncomplate-order.component.html',
  styleUrls: ['./uncomplate-order.component.scss'],
  providers: [DatePipe]
})
export class UncomplateOrderComponent implements OnInit {


  constructor(
    private uncomplateOrderService: UncomplateOrderService,
    private datePipe: DatePipe
  ) { }

  inprogressOrder: UncomplateOrder[]
  isShow = true;

  ngOnInit() {
    this.getInprogressOrder();
  }
  getInprogressOrder() {
    this.uncomplateOrderService.getData().subscribe(o => {
      this.inprogressOrder = o;
    });
  }
  customRoute(e) {
    console.log('onUserRowSelect', e);
  }
  showDetail(newOrder) {
    if(this.inprogressOrder== newOrder){
      this.isShow = !this.isShow;
    }
    
  }
}
