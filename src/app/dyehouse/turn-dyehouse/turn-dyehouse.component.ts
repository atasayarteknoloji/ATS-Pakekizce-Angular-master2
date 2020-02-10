import { Component, OnInit } from '@angular/core';
import { TurnDyehouseService } from './turn-dyehouse.service';
import { TurnDyehouse } from './turn-dyehouse';

@Component({
  selector: 'app-turn-dyehouse',
  templateUrl: './turn-dyehouse.component.html',
  styleUrls: ['./turn-dyehouse.component.sass']
})
export class TurnDyehouseComponent implements OnInit {

  constructor(private dyehouseService: TurnDyehouseService) { }
  datas: TurnDyehouse[];
  checked: false;
  ngOnInit() {
    this.getdata();
  }
  getdata() {
    this.dyehouseService.getData().subscribe(o => {
      this.datas = o;
    });
  }
  toggleVisibility(e){
    this.checked= e.target.checked;
  }
}
