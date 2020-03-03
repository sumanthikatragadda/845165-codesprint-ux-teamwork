import { Component, OnInit } from '@angular/core';
import { Order } from '../Models/order';

import { PlaceOrderService } from '../Services/place-order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vieworder',
  templateUrl: './vieworder.component.html',
  styleUrls: ['./vieworder.component.css']
})
export class VieworderComponent implements OnInit {
  orders:Order[];
  constructor(private placeOrderService:PlaceOrderService,private router: Router){

  }

  ngOnInit() {
    this.placeOrderService.getAllOrders().subscribe(data => {
      this.orders=data;
    
  })

}
}
