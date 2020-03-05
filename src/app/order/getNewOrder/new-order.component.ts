import { Component, OnInit, ApplicationRef, Input, ChangeDetectorRef } from '@angular/core';
import { NeworderService } from './new-order.service';
import { NewOrder } from '../model/new-order';
import { DatePipe } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LocalDataSource } from 'ng2-smart-table';
import { ButtonViewComponent } from 'src/app/components/button-view//button-view/button-view.component';
import { NeworderDetailService } from '../getNewOrderDetail/new-order-detail.service';


@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss'],
  providers: [DatePipe]
})
export class NewOrderComponent implements OnInit {

  newOrder: NewOrder[] = [];
  source: LocalDataSource = new LocalDataSource();

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
        renderComponent:ButtonViewComponent
      }
    },
    rowClassFunction: (row) => {
      return 'ocean-st-row';  //we need this to select the closest parent as the class used by smart-table isnt applied directly
    },
    pager:
    {
      perPage: 10
    },
    mode: 'external'
  };
  constructor(private newOrderService: NeworderService,
    private datePipe: DatePipe,
    private newOrderDetailService: NeworderDetailService,
    private formBuilder: FormBuilder) {
    this.getNewOrder();
  }

  ngOnInit() {}

  getNewOrder() {
    this.newOrderService.getData().subscribe(data => {
      this.newOrder = data;
      this.source.load(data);
      console.log(" this.newOrder", this.source);
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
  onCustomAction(event) {
    
  }
}