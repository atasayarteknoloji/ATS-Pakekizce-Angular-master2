import { Component, OnInit } from '@angular/core';
import { PackagingService } from './packaging.service';
import { Packaging } from './packaging';

@Component({
  selector: 'app-packaging',
  templateUrl: './packaging.component.html',
  styleUrls: ['./packaging.component.scss']
})
export class PackagingComponent implements OnInit {
  settings = {
    hideSubHeader: true,
    actions: {
      position: 'right',
      columnTitle: 'Barkod',
      custom: [{
        name:'Barkod',
        title:'<ngx-barcode [bc-value]="GIZEM" [bc-element-type]="img" [bc-width]="1" [bc-height]="50" [bc-line-color]="#111111"></ngx-barcode>'
      }],
      add: false,
      edit: false,
      delete: false
    },
    columns: {
      item: {
        title: "isim",
        type:"number",
        valuePrepareFunction: (item) => {
          return item.name;
        },
        filter: false
      },
      color: {
        title: "Renk",
        type:"string",
        filter: false
      },
      floor: {
        title: "Zemin",
        type:"string",
        filter: false
      },
      rope: {
        title: "İp",
        type:"string",
        filter: false
      },
      pattern: {
        title: "Desen",
        type:"string",
        filter: false
      },
      strike: {
        title: "Vuruş",
        type:"string",
        filter: false
      }
    },
    pager:
    {
      perPage: 10
    },
    mode:'external'
  };
  constructor(private packagingService:PackagingService) { }
  datas:Packaging[];
  ngOnInit() {
    this.getPackage();
  }
  getPackage(){
    this.packagingService.getData().subscribe(o=>{
      this.datas=o;
    });
  }
}
