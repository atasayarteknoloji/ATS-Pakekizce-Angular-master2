import { Component, OnInit } from '@angular/core';
import { PrintService } from './print.service';
import { Print } from './print';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent implements OnInit {

  constructor(private printService:PrintService) { }
  datas:Print[];
  ngOnInit() {this.getData();
  }
  getData() {
    this.printService.getData().subscribe(data => {
      this.datas = data;
    });
  }
  print(){
    window.print();
  }
}
