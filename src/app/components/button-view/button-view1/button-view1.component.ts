import { Component, OnInit, NgZone, ChangeDetectorRef, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { inprogressOrderDetailService } from 'src/app/order/get-inprogress-order-detail/get-inprogress-order.service';
import { UncomplateOrderComponent } from 'src/app/order/getInprogressOrder/uncomplate-order.component';

@Component({
    selector: 'app-button-view1',
    templateUrl: './button-view1.component.html',
    styleUrls: ['./button-view1.component.scss']
})
export class ButtonView1Component implements OnInit {

    constructor(private injiService: inprogressOrderDetailService,
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
            this.expanededComp = this.injiService.appendComponent(UncomplateOrderComponent, this.rowData, closestParent);
            //this.renderValue = "Close";
            this.isOpen = true;
          }
        }
      }