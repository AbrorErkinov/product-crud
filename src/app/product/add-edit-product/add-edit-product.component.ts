import { ProductService } from './../product.service';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css'],
})
export class AddEditProductComponent implements OnChanges {
  @Input() displayAddEditModal: boolean = true;
  @Input() selectedProduct: any = null;
  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() clickAddEdit: EventEmitter<any> = new EventEmitter<any>();
  modalType = 'Add Product';

  productForm = this.fb.group({
    title: ['', Validators.required],
    price: [0, Validators.required],
    description: ['', Validators.required],
    category: ['', Validators.required],
    image: ['', Validators.required],
    isDeleted: [false]
  });

  constructor(
    private fb: FormBuilder,
    private productService: ProductService
  ) {}

  ngOnChanges(): void {
    if (this.selectedProduct) {
      this.productForm.patchValue(this.selectedProduct);
      this.modalType = 'Edit Product';
    } else {
      this.productForm.reset();
      this.modalType = 'Add Product';
    }
  }

  closeModal() {
    this.clickClose.emit(true);
    this.productForm.reset();
  }

  addEditProduct() {
    this.productService
      .addEditProduct(this.productForm.value, this.selectedProduct)
      .subscribe((response) => {
        this.clickAddEdit.emit(response);
        this.closeModal();
      });
  }
}
