import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NeworderDetailService } from './new-order-detail.service';
import { NewOrderDetail } from '../model/new-order-detail';

@Component({
  selector: 'app-new-order-detail',
  templateUrl: './new-order-detail.component.html',
  styleUrls: []
})
export class NewOrderDetailComponent implements OnInit {

  @Input() componentName: string;
  settings={
    hideSubHeader:true,
    actions:{
      position: 'right',
      add: false,
      edit: false,
      delete: false
    },
    columns:{
      id:{
        title:"id",
        type:"number"
      }
    }
  }
  constructor(private detailService:NeworderDetailService) { }

  detail:NewOrderDetail[];
  ngOnInit() {
    this.getNewOrder();
  }
  
  getNewOrder() {
    this.detailService.getData().subscribe(data => {
      this.detail = data;
    });
  }
  close(ref:any){
    console.log("internal close");
    this.detailService.removeComponent(ref);
    debugger;
    this.detailService.componentSubjects[this.componentName].next("value emitted from "+ref.componentName)
    debugger;
    //this.closeRow.emit();
    //this.onRemove.emit(this.ref);
  }

}
