import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminComponent } from './admin/admin.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserTopbarComponent } from './user-topbar/user-topbar.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './_auth/auth.guard';

const routes: Routes = [
  {path: '' ,component :HomeComponent},
  {path: 'home' ,component :HomeComponent},
  {path: 'admin' ,component :AdminComponent ,canActivate:[AuthGuard],data:{roles:['Admin']}},
  {path: 'user' ,component :UserComponent,canActivate:[AuthGuard],data:{roles:['User']}},
  {path: 'login' ,component :LoginComponent},
  {path: 'forbidden' ,component :ForbiddenComponent},
  {path: 'sign-in',component:SignInComponent},
  {path : 'add', component:AddProductComponent},
  {path  : 'cart',component :ShoppingCartComponent},
  {path: 'topbar',component:UserTopbarComponent},
  {path:'order' ,component:OrderComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
