import { Component, OnInit } from '@angular/core';
import { ProductServices } from 'src/app/services/product.services';
import { Product} from 'src/app/models/product'
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { CartService } from '../services/cart.service';
 

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {



  kproduct :Product = new Product;
  allKdata : Product[];
  submitted:boolean=false;
  formValue ! : FormGroup;
    productList :any;
   public filterCategory:any;
formModal: any;
data: any;
id: number;
searchKey :string="";

    constructor(private builder:FormBuilder,private service:ProductServices,private cartservice :CartService) { }

  ngOnInit(): void {

    this.formValue = this.builder.group({

      productname :[' '],
      category:[' ',Validators.required],
      availablequantity:[],
      price:[],
      imageUrl:['']})

      this.getKProducts()

    }

    
      

    getKProducts(){
      this.service.getProductsForUser().subscribe(res=>{
        this.productList=res;
        this.filterCategory=res;
        this.productList.forEach((a:any)=>{ 
          Object.assign(a,{quantity:1,total:a.price})
      });

    })
    this.cartservice.search.subscribe(val=>{

      this.searchKey=val;
    })
 

          
    }
    
    addToCart(item:any)
      {
        this.cartservice.addToCart(item);


      }

      filter(category:string){

        this.filterCategory=this.productList.filter((a:any)=>{

          if(a.category==category || category==''){
            return a;
          }
        })

      }
  
  
  }
