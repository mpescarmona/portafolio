import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  prod:any[] = [];

  constructor(private route:ActivatedRoute,
              public _productService:ProductsService) {

    route.params.subscribe( params => {
      // _productService.findProductsByName(params['searchWord']);
      _productService.findProductsByText(params['searchWord']);
    });

  }

}
