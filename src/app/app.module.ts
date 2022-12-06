import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SliderComponent } from './component/slider/slider.component';
import { AllProductsComponent } from './component/all-products/all-products.component';
import { ModernProductsComponent } from './component/all-products/modern-products/modern-products.component';
import { LastProductsComponent } from './component/all-products/last-products/last-products.component';
import { LargeProductCardComponent } from './component/all-products/large-product-card/large-product-card.component';
import { ProductsDataService } from './service/products-data.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    SliderComponent,
    AllProductsComponent,
    ModernProductsComponent,
    LastProductsComponent,
    LargeProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [
    ProductsDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
