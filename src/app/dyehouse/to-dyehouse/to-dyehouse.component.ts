import { Component, OnInit } from '@angular/core';
import { ToDyehouseService } from './to-dyehouse.service';
import { ToDyehouse } from './to-dyehouse';

@Component({
  selector: 'app-to-dyehouse',
  templateUrl: './to-dyehouse.component.html',
  styleUrls: ['./to-dyehouse.component.sass']
})
export class ToDyehouseComponent implements OnInit {

  constructor(private dyehouseService: ToDyehouseService) { }
  datas: ToDyehouse[];
  ngOnInit() {
    this.getdata();
  }
  getdata() {
    this.dyehouseService.getData().subscribe(o=>{
      this.datas =o;
    });
  }
  rowClicked(event) {
    console.log(event);
  }
}
