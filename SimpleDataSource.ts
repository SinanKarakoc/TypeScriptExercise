import { Product } from "./Product";

export class SimpleDataSource{
    
    private products: Array<Product>;

    constructor(){
        this.products=new Array<Product>(
            new Product(1,"Telefon 1","Telefon",1000),
            new Product(2,"Telefon 2","Telefon",1200),
            new Product(3,"Telefon 3","Telefon",1230),
            new Product(4,"Telefon 4","Telefon",1234),
            new Product(5,"Telefon 5","Telefon",4321)
        );
    }

    getProducts(): Product[]{
        return this.products;
    }
}
// let p = new SimpleDataSource();