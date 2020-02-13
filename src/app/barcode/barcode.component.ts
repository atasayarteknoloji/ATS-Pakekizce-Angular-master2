import { Component, OnInit } from '@angular/core';
import { BarcodeService } from './barcode.service';
import { Barcode } from './barcode';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.component.html',
  styleUrls: ['./barcode.component.sass']
})
export class BarcodeComponent implements OnInit {

  constructor(private barcodeService:BarcodeService) { }
  datas:Barcode[];
  value="";
  ngOnInit() {}
  get values():string[]{
    return this.value.split('\n');
  }
}
