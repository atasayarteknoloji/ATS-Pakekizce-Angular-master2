import { Component, OnInit, NgZone, ChangeDetectorRef, Input } from '@angular/core';
import { NeworderDetailService } from 'src/app/order/getNewOrderDetail/new-order-detail.service';
import { NewOrderComponent } from 'src/app/order/getNewOrder/new-order.component';
import { NewOrderDetailComponent } from 'src/app/order/getNewOrderDetail/new-order-detail.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-button-view',
  templateUrl: './button-view.component.html',
  styleUrls: ['./button-view.component.scss']
})
export class ButtonViewComponent implements OnInit {

  constructor(private injiService: NeworderDetailService,
    public zone: NgZone,
    private ref: ChangeDetectorRef) { }

  @Input() value: string | number;
  @Input() rowData: any;
  isOpen: boolean = false;
  expanededComp: any = null;
  renderValue: string;


  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
    this.injiService.componentSubjects[this.rowData.componentName] = new Subject();
    this.injiService.componentSubjects[this.rowData.componentName].subscribe(() => {
      debugger;

      this.injiService.removeComponent(this.expanededComp);
      this.expanededComp = null;
      //this.renderValue = this.value.toString().toUpperCase(); //"Open";
      this.isOpen = false;
      //firing the change detection manually
      this.ref.markForCheck();
    });
  }
  onClick(event) {
    console.log("toggle");
    if(this.isOpen){
      this.injiService.removeComponent(this.expanededComp);
      this.expanededComp = null;
      //this.renderValue = this.value.toString().toUpperCase(); //"Open";
      this.isOpen = false;
    }else{
      const closestParent = event.target.closest("tr.ocean-st-row");
      this.expanededComp = this.injiService.appendComponent(NewOrderDetailComponent, this.rowData, closestParent);
      //this.renderValue = "Close";
      this.isOpen = true;
    }
  }
}