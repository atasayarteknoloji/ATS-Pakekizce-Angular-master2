import { Component, OnInit, Input } from '@angular/core';
import { NeworderDetailService } from './new-order-detail.service';
import { NewOrderDetail } from '../model/new-order-detail';

@Component({
  selector: 'app-new-order-detail',
  templateUrl: './new-order-detail.component.html',
  styleUrls: []
})
export class NewOrderDetailComponent implements OnInit {

  constructor(private detailService:NeworderDetailService) { }

  detail:NewOrderDetail[];
  ngOnInit() {
  }
  
  getNewOrder() {
    this.detailService.getData().subscribe(data => {
      this.detail = data;
    });
  }
}
