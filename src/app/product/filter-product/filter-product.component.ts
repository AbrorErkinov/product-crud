import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-filter-product',
  templateUrl: './filter-product.component.html',
  styleUrls: ['./filter-product.component.css']
})
export class FilterProductComponent implements OnInit{
  selectedCategory: string = '';
  categories: string[] = [];
  @Output() selectCategory: EventEmitter<string> = new EventEmitter<string>();

  constructor(private productService: ProductService){ }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.productService.getCategories().subscribe(
      response => this.categories = response
    )
  }

  onChangeCategory($event: any){
    this.selectCategory.emit($event.value)
  }
}
