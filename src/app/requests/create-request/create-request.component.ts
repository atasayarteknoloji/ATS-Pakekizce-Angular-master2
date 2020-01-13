import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.sass']
})
export class CreateRequestComponent implements OnInit {

  constructor() {
    console.log('create request')
  }

  ngOnInit() {
  }

}
