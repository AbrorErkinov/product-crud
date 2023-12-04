import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditProductComponent } from './add-edit-product.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  declarations: [
    AddEditProductComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ButtonModule,
    DialogModule,
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule
  ],
  exports: [
    AddEditProductComponent
  ]
})
export class AddEditProductModule { }
