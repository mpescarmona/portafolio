import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductsService {
  products:any[] = [];
  filtered_products:any[] = [];
  products_loaded: boolean = false;
  filtered_loaded: boolean = false;

  constructor( private http:Http ) {
    // console.log("constructor start");
      this.getProducts();
      // console.log("constructor stop");
  }

  public getProducts() {
    // console.log("getProducts start");
    let promise = new Promise( (resolve, reject) => {
      this.products_loaded = false;
      this.http.get("https://portafolio-eeb80.firebaseio.com/productos_idx.json")
      .subscribe(data => {
        this.products = data.json();
        this.products_loaded = true;
        resolve();
      });
    });
    // console.log("getProducts stop");

    return promise;
  }

  public getProductById( id:string ) {
      return this.http.get("https://portafolio-eeb80.firebaseio.com/productos/" + id + ".json");
  }

  public findProductsByText(searchText:string) {
    // console.log("findProductsByText start");

    this.filtered_loaded = false;

    // console.log("this.products.length: " + this.products.length);

    if(this.products.length === 0) {
      // console.log("busco productos");
      this.getProducts().then( () => {
          this.filterProducts(searchText);
      });
    } else {
      // console.log("NO busco productos");
      this.filterProducts(searchText);
    }

    this.filtered_loaded = true;
    // console.log("findProductsByText stop");
  }

  private filterProducts(searchText:string) {
    // console.log("filterProducts start");
    this.filtered_products = [];

    this.products.forEach(product => {
      if(this.matchesIgnoreCase(product.categoria, searchText) ||
         this.matchesIgnoreCase(product.titulo, searchText)) {
        this.filtered_products.push(product);
      }
    });
    // console.log("filterProducts stop. Found: " + this.filtered_products.length + " products");
  }

  private matchesIgnoreCase(text:string, searchText:string) {
    // console.log("matchesIgnoreCase start. Text[%s], searchString[%s]", text, searchText);
    const result:boolean = text.toLowerCase().indexOf(searchText.toLowerCase()) >= 0;
    // console.log("matchesIgnoreCase stop. Found[%s]", result);
    return result;
  }

  public findProductsByName( searchText:string ) {
      this.filtered_loaded = false;
      this.getProducts();
      // return this.http.get("https://portafolio-eeb80.firebaseio.com/productos.json?orderBy=\"producto\"&startAt=\"" + searchText + "\"");
      return this.http.get("https://portafolio-eeb80.firebaseio.com/productos.json")
      .subscribe(data => {
        const filtered:any [] = [];
        for (let key in data.json()) {
          if(data.json()[key].producto.toLowerCase().indexOf(searchText.toLowerCase()) !== -1) {
            filtered.push(key);
          }
        };

        const aux:any[] = [];
        this.products.forEach((item, index) => {
          const pos: number = filtered.indexOf(item.cod);
          if(pos !== -1) {
            aux.push(item);
          }
        });

        this.products = aux;
        this.filtered_loaded = true;
      });
  }

  public findProductsByCategory( searchText:string ) {
    return this.http.get("https://portafolio-eeb80.firebaseio.com/productos.json?orderBy=\"categoria\"&startAt=\"" + searchText + "\"");
  }
}
