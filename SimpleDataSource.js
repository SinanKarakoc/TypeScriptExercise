"use strict";
exports.__esModule = true;
exports.SimpleDataSource = void 0;
var Product_1 = require("./Product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new Product_1.Product(1, "Telefon 1", "Telefon", 1000), new Product_1.Product(2, "Telefon 2", "Telefon", 1200), new Product_1.Product(3, "Telefon 3", "Telefon", 1230), new Product_1.Product(4, "Telefon 4", "Telefon", 1234), new Product_1.Product(5, "Telefon 5", "Telefon", 4321));
    }
    SimpleDataSource.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
// let p = new SimpleDataSource();
