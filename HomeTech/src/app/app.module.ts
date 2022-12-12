import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Injectable } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/cart/home/home.component';
import { PaymentComponent } from './components/cart/payment/payment.component';
import { SuccessComponent } from './components/cart/success/success.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    LoginComponent,
    CartComponent,
    HomeComponent,
    PaymentComponent,
    SuccessComponent,
    HeaderComponent,
    ProductsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule






  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
@Injectable({providedIn: 'root'})
export class ServiceNameService {
  constructor(private httpClient: HttpClient) { }

}
