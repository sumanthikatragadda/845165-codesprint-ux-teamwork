import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Order } from '../Models/order';
import { PlaceOrderService } from '../Services/place-order.service';


@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent implements OnInit {
  giftcardform:FormGroup;
  submitted=false;
  orders:Order;
  
  constructor(private builder:FormBuilder ,private service:PlaceOrderService ) { }

  ngOnInit() 
  {
    this.giftcardform=this.builder.group({
      inr:['',Validators.required],
      paisa:['',[Validators.required,Validators.pattern('^[0-9]{1,2}$')]],
      firstname:['',[Validators.required,Validators.pattern('^[A-Z-a-z]{3,20}$')]],
      lastname:['',[Validators.required,Validators.pattern('^[A-Z-a-z]{3,20}$')]],
      streetaddress:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      country:['',Validators.required],
      pincode:['',[Validators.required,Validators.pattern('^[0-9]{6}$')]],
      bfirstname:['',[Validators.required,Validators.pattern('^[A-Z-a-z]{3,20}$')]],
      blastname:['',[Validators.required,Validators.pattern('^[A-Z-a-z]{3,20}$')]],
      phoneno:['',Validators.required],
      emailid:['',[Validators.required,Validators.email]]
      
      });

  }
  get f() { return this.giftcardform.controls; }

  onSubmit() {
      
    this.submitted=true;
   // alert("starting of fun");
    if(this.giftcardform.valid)
    {
      alert('Success!!\n\n')
    }
   // alert("end of");
  this.orders=new Order();
this.orders.inr=Number(this.giftcardform.value["inr"]);
this.orders.paisa=Number(this.giftcardform.value["paisa"]);
this.orders.firstname=this.giftcardform.value["firstname"];
this.orders.lastname=this.giftcardform.value["lastname"];
this.orders.streetaddress=this.giftcardform.value["streetaddress"];
this.orders.city=this.giftcardform.value["city"];
this.orders.state=this.giftcardform.value["state"];
this.orders.country=this.giftcardform.value["country"];
this.orders.pincode=this.giftcardform.value["pincode"];
this.orders.state=this.giftcardform.value["state"];
this.orders.bfirstname=this.giftcardform.value["bfirstname"];
this.orders.blastname=this.giftcardform.value["blastname"];
this.orders.phoneno=this.giftcardform.value["phoneno"];
this.orders.emailid=this.giftcardform.value["emailid"];

this.service.onSubmit(this.orders).subscribe(res=>{
  this.orders=res;
  console.log(this.orders);
})
//alert("prevs of order")
  //alert('Order placed Successfully');
}
   

  onReset() {
    
      this.submitted = false;
      this.giftcardform.reset();
  }
      
}
 


