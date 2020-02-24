import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ComplatedOrder } from '../model/complated-order';
import { ComplatedOrderService } from './complated-order.service';

@Component({
  selector: 'app-complated-order',
  templateUrl: './complated-order.component.html',
  styleUrls: ['./complated-order.component.scss'],
  providers: [DatePipe]
})
export class ComplatedOrderComponent implements OnInit {
  settings = {
    hideSubHeader: true,
    actions: {
      position: 'right',
      columnTitle: '',
      custom: [
        {
          name: 'deleteAction',
          title: '<i class="fa fa-eye" title="Detay"></i>'
        }
      ],
      add: false,
      edit: false,
      delete: false
    },
    columns: {
      id: {
        title: "Sipariş Id",
        filter: false
      },
      createTime: {
        title: "Oluşturulma Tarihi",
        type: "Date",
        valuePrepareFunction: (createTime) => {
          return this.datePipe.transform(new Date(createTime), 'dd MM yyyy hh:mm');
        },
        filter: false
      },
      client: {
        title: "Cari Kodu",
        valuePrepareFunction: (client) => {
          return client.clientCode;
        },
        filter: false
      },
      statusId: {
        title: "Statü",
        filter: false
      }
    },
    pager:
    {
      perPage: 10
    },
    mode:'external'
  };
  constructor(private datePipe: DatePipe,
    private complatedOrderService:ComplatedOrderService) { }
  complatedOrder:ComplatedOrder[];
  ngOnInit() {
    this.getComplatedOrder();
  }
  getComplatedOrder() {
    this.complatedOrderService.getData().subscribe(data => {
      this.complatedOrder = data;
    });
  }
}
