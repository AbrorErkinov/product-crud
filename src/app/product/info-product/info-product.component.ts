import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-info-product',
  templateUrl: './info-product.component.html',
  styleUrls: ['./info-product.component.css']
})
export class InfoProductComponent {
  @Input() showInfoModal: boolean = true;
  @Input() getInfoProduct: any;
  @Output() closeInfoModal: EventEmitter<boolean> = new EventEmitter<boolean>()

  hideInfoModal(){
    this.closeInfoModal.emit(false)
  }

}
