import { Product } from "./Product";
import { ProductService } from "./ProductService";

let _productService = new ProductService();
let result;

//result = _productService.getProducts();
result = _productService.getById(2);

let p = new Product();
p.name= "Telefon 6";
p.category="Telefon";
p.price = 100;
//_productService.saveProduct(p);
_productService.deleteProduct(result);

result = _productService.getProducts();
console.log(result);