import { Component, OnInit } from '@angular/core';
import { NeworderService } from './new-order.service';
import { NewOrder } from './new-order';
import { Router, Routes, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { NewOrderDetail } from '../getNewOrderDetail/new-order-detail';
import { Barcode } from 'src/app/barcode/barcode';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LocalDataSource } from 'ng2-smart-table';
import { parse } from 'querystring';


@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss'],
  providers: [DatePipe]
})
export class NewOrderComponent implements OnInit {
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
      order: {
        title: "Cari Kodu",
        valuePrepareFunction: (order) => {
          return order.client.clientCode;
        },
        filter: false
      },
      statu: {
        title: "Statü",
        valuePrepareFunction: (statu:any) => {
          return statu.statu;
        },
        filter: false
      }
    },
    pager:
    {
      perPage: 10
    },
    mode:'external'
  };
  constructor(private newOrderService: NeworderService,
    private activatedRoute: ActivatedRoute,
    private datePipe: DatePipe,
    private newOrderDetail: NewOrderDetail,
    private formBuilder: FormBuilder) {
    this.source = new LocalDataSource(this.newOrder)
  }
  filterText: string;
  newOrder: NewOrder[];
  isShow = true;
  base64: string;
  barcode: string;
  value: string;
  display: boolean;
  form: FormGroup;
  statu = 1;
  source: LocalDataSource;
  ngOnInit() {
    this.getNewOrder();
  }

  getNewOrder() {
    this.newOrderService.getData().subscribe(data => {
      this.newOrder = data;
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