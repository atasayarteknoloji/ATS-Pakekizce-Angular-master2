import { Component, OnInit } from '@angular/core';
import { UncomplateOrderService } from './uncomplate-order.service';
import { UncomplateOrder } from '../model/uncomplate-order';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-uncomplate-order',
  templateUrl: './uncomplate-order.component.html',
  styleUrls: ['./uncomplate-order.component.scss'],
  providers: [DatePipe]
})
export class UncomplateOrderComponent implements OnInit {
  settings = {
    hideSubHeader: true,
    actions: {
      position: 'right',
      columnTitle: '',
      custom: [
        {
          name: 'reminderAction',
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
  constructor(
    private uncomplateOrderService: UncomplateOrderService,
    private datePipe: DatePipe) { }

  inprogressOrder: UncomplateOrder[] =[];
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
  showDetail() {
  }
}
