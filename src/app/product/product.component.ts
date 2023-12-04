import { ConfirmationService } from 'primeng/api';
import { Product } from './product';
import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/data/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  displayAddEditModal = false;
  selectedProduct: any = null;
  visibility: boolean = true;
  selectedInfoProduct: any = null;
  checked: boolean = false;
  selectedDeleteProduct: number[] = [];
  buyProductsDetails: any[] = [];


  constructor(
    private productService: ProductService,
    private confirmationService: ConfirmationService,
    // private dataService: DataService

  ) {}

  ngOnInit() {

    this.getProductList();
    // this.productService.setProducts();
  }



  getProductList(category?: string) {
    this.productService.getProduct(category || '').subscribe((response) => {
      this.products = response;
    });
  }

  hideAddModal(event: boolean) {
    this.displayAddEditModal = !event;
  }

  saveOrUpdateProductToList(newData: any) {
    if (this.selectedProduct && newData.id === this.selectedProduct.id) {
      const productIndex = this.products.findIndex(
        (data) => data.id === newData.id
      );
      this.products[productIndex] = newData;
    } else {
      this.products.unshift(newData);
    }
  }

  showAddEditModal(product?: Product) {
    this.displayAddEditModal = true;
    if (product) {
      this.selectedProduct = product;
    } else {
      this.selectedProduct = null;
    }
  }

  deleteProduct(product: Product, event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure that you want to delete a product?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.productService.deleteProduct(product.id).subscribe((response) => {
          this.products = this.products.filter(
            (data) => data.id !== product.id
          );
        });
      },
      reject: () => {},
    });
  }

  showDialog(product: Product) {
    this.visibility = false;
    this.selectedInfoProduct = product;
  }

  hideModalInfo(event: boolean) {
    this.visibility = !event;
  }

  getProdcutByCategory(category: string) {
    this.getProductList(category);
  }

  deleteProducts(deletedProductArr: number[]) {
    console.log(deletedProductArr);

    deletedProductArr.forEach((x) =>
      this.productService.deleteProduct(x).subscribe({
        next: (d) => {
          this.products = this.products.filter((product) =>
            deletedProductArr.every((data) => data.valueOf() !== product.id)
          );
        },
        error: (d) => {
          console.log('error');
        },
        complete: () => {
          console.log('complete');
        },
      })
    );
  }

  buyProducts(selectedBuyProduct: number[]) {
    this.products.forEach((data) => {
      selectedBuyProduct.forEach((p) => {
        if (data.id === p) {
          this.buyProductsDetails.push(data)
        }
      });
    });
    console.log(this.buyProductsDetails);
  }

  // deleteProducts(ids: number[]){
  //   console.log(ids);
  //     this.products = this.products.filter(x =>
  //       ids.every(data => data.valueOf() !== x.id)
  //     )
  // }
}
