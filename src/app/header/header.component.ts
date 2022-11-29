import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { UserAuthService } from '../services/user-auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {
  totItemNumber:number=0;
  public searchTerm:string='';


  constructor(private cartService :CartService,private userAuthService:UserAuthService,public userService :UserService,private route:Router) { }

  ngOnInit(): void {
  }


  public isLoggedIn(){

return this.userAuthService.isLoggedIn();

this.cartService.getProductData().subscribe(res=>
  {this.totItemNumber=res.length;

 })

  }

  public logout(){
    this.userAuthService.clear();
    this.route.navigate(['/home']);

  }

  roleMatch(){
    return this.userService.roleMatch(true);
    
  }


  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value;
  
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  
}

}
