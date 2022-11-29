import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../models/product';
import { ProductServices } from '../services/product.services';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  product :Product = new Product;
  allKdata : Product[];
  submitted:boolean=false;
  formValue ! : FormGroup;

formModal: any;
data: any;
id: number;
showAdd !:boolean;
showBtn !:boolean;
display = "none";

requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

  constructor(private builder:FormBuilder,private service:ProductServices) { }

  ngOnInit(): void {
    this.formValue = this.builder.group({

      productname :[' '],
      category:[' ',Validators.required],
      availablequantity:[],
      price:[],
      imageUrl:[''],
      description:[''],
      seller:[''],
      expiry:[''],
    
    
    
    })

      this.getMProducts()

    



    }

    clickAddKProduct(){
      this.formValue.reset();
      this.showAdd=true;
      this.showBtn=false;

    }

    addKProduct(){
      this.showAdd=true;
      this.product.productname=this.formValue.value.productname
      this.product.category=this.formValue.value.category
      this.product.availablequantity=this.formValue.value.availablequantity
      this.product.price=this.formValue.value.price
      this.product.imageUrl=this.formValue.value.imageUrl
      this.product.description=this.formValue.value.description
      this.product.seller=this.formValue.value.seller
      this.product.expiry=this.formValue.value.expiry


      this.service.addProduct(this.product,).subscribe(res=>{console.log(res);
      alert("Product Added "); 
      this.formValue.reset();
      this.getMProducts();
      },
      err=>{
        alert("Some thing went wrong!")
      }
      
      )
  
}

       getMProducts(){
      this.service.getProductsForUser().subscribe(res=>{
       this.allKdata=res;})
}

delKproduct(id:any){
  this.service.deleteProduct(id).subscribe(res=> {console.log(res);
    alert("Data Deleted");
    console.log("Delete Product")
    
    this.getMProducts();

  })
}

onEditKProduct(data:any){
  this.showAdd=false;
      this.showBtn=true;
  this.product.id=data.id;
   this.formValue.controls['productname'].setValue(data.productname);
   this.formValue.controls['category'].setValue(data.category);
   this.formValue.controls['availablequantity'].setValue(data.availablequantity);
   this.formValue.controls['price'].setValue(data.price);
   this.formValue.controls['imageUrl'].setValue(data.imageUrl);
   this.formValue.controls['description'].setValue(data.description);
   this.formValue.controls['seller'].setValue(data.seller);
   this.formValue.controls['expiry'].setValue(data.expiry);
  
  
}

updateKProduct(){

  this.product.productname=this.formValue.value.productname
this.product.category=this.formValue.value.category
this.product.availablequantity=this.formValue.value.availablequantity
this.product.price=this.formValue.value.price
this.product.imageUrl=this.formValue.value.imageUrl
this.product.description=this.formValue.value.description
this.product.seller=this.formValue.value.seller
this.product.expiry=this.formValue.value.expiry

  this.service.updateProduct(this.product, this.product.id).subscribe(res=>{console.log(res);
    alert("Product Updated Successfully");

    let ref =document.getElementById('clear');
    ref ?.click();
    this.formValue.reset();
    this.getMProducts();
  })


  }


  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }



  
}



  











