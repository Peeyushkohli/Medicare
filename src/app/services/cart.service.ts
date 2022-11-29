import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, reduce } from 'rxjs';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartDataList :any =[];
  medicineList:Cart[]=[];

  productList=new BehaviorSubject<any>([]);
  public search =new BehaviorSubject<string>("");
  items: Product[] = [];
  grandTotal:number;

  getProductData(){
    return this.productList.asObservable();
  }

  setProduct(product:any){

    this.cartDataList.push(...product);
    this.productList.next(product)
  }


  addToCart(product :any ) {
    this.cartDataList.push(product);
    this.productList.next(this.cartDataList)
    this.getTotalAmount();
    console.log(this.cartDataList);
    console.log(this.grandTotal);
  }

            
       

  getTotalAmount(){
    let grandTotal =0;
    this.cartDataList.map((a:any)=>{
      grandTotal+=a.total;
      
    })
  }

  get total(){

    return this.cartDataList?.reduce((sum,cartDataList

    )=> ({
        quantity :1,
        price:sum.price+this.cartDataList.quantity*this.cartDataList.price

    }),
    {quantity:1,price:0}
    ).price
}


  getItems() {
    return this.items;
  }


  itemsCount(){
    return this.cartDataList.length;
  }

  removeCartData(product:any){
    this.cartDataList.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.cartDataList.splice(index,1)
      }
    })
    this.productList.next(this.cartDataList);
  }
  clearCart() {
    this.cartDataList= [];
    this.productList.next(this.cartDataList);
  }



  constructor(private http :HttpClient) { }

  
      

      
    }
    


