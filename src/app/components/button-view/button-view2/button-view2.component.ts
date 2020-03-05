import { Component, OnInit, NgZone, ChangeDetectorRef, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-button-view2',
    templateUrl: './button-view2.component.html',
    styleUrls: ['./button-view2.component.scss']
})
export class ButtonView2Component implements OnInit {

    constructor(//private injiService: NeworderDetailService,
        public zone: NgZone,
        private ref: ChangeDetectorRef) { }

    ngOnInit() { }
    onClick(event) {
    }
}