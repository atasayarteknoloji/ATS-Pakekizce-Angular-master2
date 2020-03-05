import { Component, OnInit } from '@angular/core';
import { UncomplateOrderService } from './uncomplate-order.service';
import { UncomplateOrder } from '../model/uncomplate-order';
import { DatePipe } from '@angular/common';
import { ButtonView1Component } from 'src/app/components/button-view/button-view1/button-view1.component';
import { LocalDataSource } from 'ng2-smart-table';

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
      },
      button:{
        title:'Detay',
        type:'custom',
        renderComponent:ButtonView1Component
      }
    },
    rowClassFunction: (row) => {
      return 'ocean-st-row';  //we need this to select the closest parent as the class used by smart-table isnt applied directly
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
  source: LocalDataSource = new LocalDataSource();

  ngOnInit() {
    this.getInprogressOrder();
  }
  getInprogressOrder() {
    this.uncomplateOrderService.getData().subscribe(o => {
      this.inprogressOrder = o;
      this.source.load(o);
    });
  }
  onSearch(query: string = '') {
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'id',
        search: query
      },
      {
        field: 'createTime',
        search: query
      },
      {
        field: 'clientCode',
        search: query
      },
      {
        field: 'statu',
        search: query
      }
    ], false);
  }
}
