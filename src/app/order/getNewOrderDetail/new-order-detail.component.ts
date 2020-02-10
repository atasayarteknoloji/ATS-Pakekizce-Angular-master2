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
