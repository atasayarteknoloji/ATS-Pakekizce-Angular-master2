import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { endpoints } from 'src/app/shared/endpoints';
import { Packaging } from './packaging';

@Injectable({
  providedIn: 'root'
})
export class NeworderService {


  constructor(private http:HttpClient) { }
  
  getData() {
    return this.http.get<Packaging[]>(endpoints.ticket.getOrder.path);
  }
}