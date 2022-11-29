import { Component, OnInit } from '@angular/core';

import { FormBuilder,FormGroup,FormControl } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { Router } from '@angular/router';
import { isNgContainer } from '@angular/compiler';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})


export class ShoppingCartComponent implements OnInit {
  allKdata : any;
  products :any =[];
  allProducts:number=0;
  gt:any = 0;
constructor(private route:Router,private formBuilder:FormBuilder,public cartservice:CartService){}
  
  
    


  ngOnInit(): void {

    this.ViewCart() ;
    this.cartservice.getProductData().subscribe(res=>
      {
        this.products=res;
        this.gt=this.cartservice.getTotalAmount();
        return this.gt;
    });

    
  }
hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhjh
    emptyCart(item:any){
      this.cartservice.removeCartData(item);

      this.ViewCart();
    }

    emptyAllCart(){
      this.cartservice.clearCart();
      this.route.navigate(['cart'])
    }

    ViewCart(){


     


        this.cartservice.getProductData().subscribe(res=>{
          this.allKdata=res;})
      
        }

          inc(p){

            if(p.quantity !=5){
              p.quantity+=1;
            }
          }

          dec(p){

            if(p.quantity !=1){
              p.quantity-=1;
            }
          }

          get total(){

            return this.allKdata?.reduce((sum,product
        
            )=> ({
                quantity :1,
                price:sum.price+this.allKdata.quantity*this.allKdata.price
        
            }),
            {quantity:1,price:0}
            ).price
        }
        


        
            }
