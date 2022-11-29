import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../models/product';
import { ProductServices } from '../services/product.services';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  kproduct: Product=new Product

  submitted:boolean=false;
  formValue! :FormGroup;

  constructor(private builder:FormBuilder,private service:ProductServices) { }

  ngOnInit(): void {
  
    this.formValue = this.builder.group({

      productname :[' ',Validators.required],
      category:[' ',Validators.required],
      availablequantity:[],
      price:[],
      imageUrl:[''],
      description:[''],
      seller:[''],
      expiry:['']

    })
  }
      get form() {
        return this.formValue.controls;
      }
        onSubmit()
        {
          this.submitted=true
          if(this.formValue.invalid)
          return
          else {
            this.service.addProduct(this.kproduct).subscribe(x=>console.log(x));
            window.alert("Product added sucessfully")
          }

        }

        addKProduct(){
          this.kproduct.productname=this.formValue.value.productname
          this.kproduct.category=this.formValue.value.category
          this.kproduct.availablequantity=this.formValue.value.availablequantity
          this.kproduct.price=this.formValue.value.price
          this.kproduct.imageUrl=this.formValue.value.imageUrl
          this.kproduct.description=this.formValue.value.description
          this.kproduct.seller=this.formValue.value.seller
          this.kproduct.expiry=this.formValue.value.expiry

          this.service.addProduct(this.kproduct).subscribe(res=>{console.log(res);
          alert("Product Added "),
          err=>{
            alert("Some thing went wrong!")
          }
          })
        }
      }

