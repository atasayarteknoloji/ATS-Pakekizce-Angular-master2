import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { endpoints } from 'src/app/shared/endpoints';
import { Print } from './print';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PrintService {
  constructor(private http:HttpClient) { }
  getData() {
    return this.http.get<Print[]>(endpoints.ticket.getOrder.path);
  }
}
