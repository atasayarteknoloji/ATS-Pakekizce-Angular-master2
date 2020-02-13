import { Component, OnInit } from '@angular/core';
import { PackagingService } from './packaging.service';
import { Packaging } from './packaging';

@Component({
  selector: 'app-packaging',
  templateUrl: './packaging.component.html',
  styleUrls: ['./packaging.component.sass']
})
export class PackagingComponent implements OnInit {

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
