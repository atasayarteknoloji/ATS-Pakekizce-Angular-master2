import { Component, OnInit } from '@angular/core';
import { ToDyehouseService } from './to-dyehouse.service';
import { ToDyehouse } from './to-dyehouse';
import { ToDyehouseModule } from './to-dyehouse.module';

@Component({
  selector: 'app-to-dyehouse',
  templateUrl: './to-dyehouse.component.html',
  styleUrls: ['./to-dyehouse.component.sass']
})
export class ToDyehouseComponent implements OnInit {

  constructor(private dyehouseService: ToDyehouseService) { }
  settings = {
    selectMode: 'multi',
    actions: {
      columnTitle: 'Actions',
      add: false,
      edit: false, // true,
      delete: false, // true,
      custom: false
      
    },
    columns: {
      order: {
        title: 'Sipariş',
        type: 'string',
        filter: false

      },
      orderNo: {
        title: 'Sipariş ID',
        filter: false,
        type: 'number'
      },
      color: {
        title: 'Renk',
        type: 'string',
        filter: false
      },
    },
  };
  data: ToDyehouse[];
  ngOnInit() {
    this.getdata();
  }
  getdata() {
    this.data = this.dyehouseService.getData();
  }
  rowClicked(event) {
    console.log(event);
  }
}
