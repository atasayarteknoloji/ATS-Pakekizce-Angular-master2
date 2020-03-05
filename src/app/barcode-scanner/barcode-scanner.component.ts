import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barcode-scanner',
  templateUrl: './barcode-scanner.component.html',
  styleUrls: ['./barcode-scanner.component.scss']
})
export class BarcodeScannerComponent {
  barcodes =[];

  constructor() { }
  addBarcode(newBarcode: string) {
    if (newBarcode) {
      this.barcodes.push(newBarcode);
    }
  }
}
