import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {AngularFireModule} from 'angularfire2'
import {AngularFireDatabaseModule} from 'angularfire2/database'
import {AngularFireAuthModule} from 'angularfire2/auth'
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { OrderSuccessfulComponent } from './order-successful/order-successful.component';
import {RouterModule} from '@angular/router';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthuuService } from './authuu.service';
import { AuthGaurdService } from './auth-gaurd.service';


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    LoginComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    OrderSuccessfulComponent,
    MyOrdersComponent,
    LogoutComponent,
    
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(
      [
        {path:'', component: HomeComponent },
        {path:'login', component: LoginComponent },
        {path:'checkout', component: CheckoutComponent, canActivate: [ AuthGaurdService ] },
        {path:'products', component: ProductsComponent },
        {path:'my/orders', component: MyOrdersComponent },
        {path:'shopping-cart', component: ShoppingCartComponent },
        
        {path:'order-successful', component: OrderSuccessfulComponent },
        {path:'admin/orders', component: AdminOrdersComponent },
        {path:'admin/products', component: AdminProductsComponent },
        {path:'logout', component: LogoutComponent }
      ]
    )
  ],
  providers: [AuthuuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
