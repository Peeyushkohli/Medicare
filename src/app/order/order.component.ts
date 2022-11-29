import { getLocaleDayNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../services/cart.service';
import { UserAuthService } from '../services/user-auth.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private cartservice : CartService ,private userservice :UserAuthService) { }
  
  Logged !:any;
  cartLength:number=0;
  allKdata : any;
  products :any =[];
  allProducts:any;
  grandTot:number=0;
  checkoutForm=this.formBuilder.group({
    name:' ',
    address:' ',
    mobileno: ''
  });


  ngOnInit(): void {

    this.cartservice.getProductData().subscribe(res=>
      {
        this.products=res;
        this.cartLength=res.length;

        this.allProducts=this.cartservice.getTotalAmount();
    })
  }
  
  onSubmit(): void {
    // Process checkout data here
    //this.items = this.cartservice.clearCart();
    //console.warn('Your order has been submitted', this.checkoutForm.value);
    //this.checkoutForm.reset();
  }
  
  
    


}




        






  


