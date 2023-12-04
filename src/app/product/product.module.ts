import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http"
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { DialogModule } from 'primeng/dialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationService } from 'primeng/api';


import { ProductComponent } from './product.component';
import { AddEditProductModule } from './add-edit-product/add-edit-product.module';
import { InfoProductComponent } from './info-product/info-product.component';
import { MenubarModule } from 'primeng/menubar';
import { FilterProductComponent } from './filter-product/filter-product.component';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { CartComponent } from '../cart/cart.component';



@NgModule({
  declarations: [
    ProductComponent,
    InfoProductComponent,
    FilterProductComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    PaginatorModule,
    DialogModule,
    BrowserAnimationsModule,
    AddEditProductModule,
    ConfirmPopupModule,
    MenubarModule,
    DropdownModule,
    CheckboxModule,
    CartComponent
  ],
  providers: [ConfirmationService],
  exports: [ProductComponent]
})
export class ProductModule { }


