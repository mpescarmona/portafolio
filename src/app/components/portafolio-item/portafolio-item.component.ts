import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-portafolio-item',
  templateUrl: './portafolio-item.component.html',
  styles: []
})
export class PortafolioItemComponent {
  product: any = undefined;
  id:any = undefined;

  constructor(private route:ActivatedRoute,
              private _productService:ProductsService) {

    route.params.subscribe( params => {
      _productService.getProductById(params['id'])
        .subscribe( response =>  {
          this.id = params['id'];
          this.product = response.json();
        });
    });
  }
}
