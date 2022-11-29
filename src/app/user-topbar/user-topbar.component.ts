import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-user-topbar',
  templateUrl: './user-topbar.component.html',
  styleUrls: ['./user-topbar.component.css']
})
export class UserTopbarComponent implements OnInit {

  totItemNumber:number=0;
    public searchTerm:string='';

  constructor(private cartService :CartService) { }

  ngOnInit(): void {

    



    this.cartService.getProductData().subscribe(res=>
      {this.totItemNumber=res.length;
  
     })
  
    }
  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value;
  
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  
  }


  }


