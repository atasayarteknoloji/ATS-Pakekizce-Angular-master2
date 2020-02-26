import { Component, OnInit } from '@angular/core';
import { NeworderService } from './new-order.service';
import { NewOrder } from '../model/new-order';
import { Router, Routes, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { NewOrderDetail } from '../model/new-order-detail';
import { Barcode } from 'src/app/barcode/barcode';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LocalDataSource } from 'ng2-smart-table';
import { parse } from 'querystring';
import { NewOrderDetailComponent } from '../getNewOrderDetail/new-order-detail.component';
import { ButtonViewComponent } from 'src/app/components/button-view/button-view.component';


@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss'],
  providers: [DatePipe]
})
export class NewOrderComponent implements OnInit {
  filterText: string;
  newOrder: NewOrder[] = [];
  isShow = true;
  base64: string;
  barcode: string;
  value: string;
  display: boolean;
  form: FormGroup;
  statu = 1;
  source: LocalDataSource = new LocalDataSource();
  settings = {
    hideSubHeader: true,
    actions: false,
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
      detail: {
        title: "Detay",
        type: "custom",
        renderComponent: ButtonViewComponent
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
    private activatedRoute: ActivatedRoute,
    private datePipe: DatePipe,
    private newOrderDetail: NewOrderDetail,
    private formBuilder: FormBuilder) {
    this.getNewOrder();
  }

  ngOnInit() {
    console.log("init", this.source);
  }

  getNewOrder() {
    this.newOrderService.getData().subscribe(data => {
      this.newOrder = data;
      this.source.load(data);
      console.log(" this.newOrder", this.source);
    });
  }
  customRoute(e) {
    console.log('onUserRowSelect', e);

  }
  showDetail(newOrder) {
    this.isShow = !this.isShow;
  }
  generateBarcode() {
    if (this.barcode == '') {
      this.display = false;
      return;
    }
    else {
      this.value = this.barcode;
      this.display = true;
      this.newOrderService.postData(this.statu);
    }
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