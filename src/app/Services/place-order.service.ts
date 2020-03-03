import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../Models/order';

@Injectable({
  providedIn: 'root'
})
export class PlaceOrderService {
  url:string='http://localhost:3000/order'

  constructor(private httpClient:HttpClient) { }

  getAllOrders(): Observable<Order[]>{
    return this.httpClient.get<Order[]>(this.url);
  }
  onSubmit(placeOrder: Order): Observable<Order>{
    return this.httpClient.post<Order>(this.url , placeOrder);
  }
}
