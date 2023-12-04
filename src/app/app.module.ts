import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { HomeComponent } from './home/home.component';
import {Routes, RouterModule} from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';

const appRoutes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'product', component: ProductComponent},
  { path: 'cart', component: CartComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        AppRoutingModule,
        MenubarModule,
        ProductModule,
        CartComponent
    ]
})
export class AppModule { }

