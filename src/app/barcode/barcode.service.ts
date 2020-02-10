import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { endpoints } from '../shared/endpoints';
import { Barcode } from './barcode';

@Injectable({
  providedIn: 'root'
})
export class BarcodeService {

  constructor(private http:HttpClient) { }
  getData() {
    return this.http.get<Barcode[]>(endpoints.ticket.getOrder.path);
  }
}
