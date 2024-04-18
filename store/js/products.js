// const product1 = {
//     nombre: "celular",
//     precio: 100000,
//     stock: 2
// }

// product1.id = "id123";
// product1["foto"] = "https://i.postimg.cc/Jn2C5W84/galaxy1.webp";

// console.log(product1.id);
// console.log(product1.foto);

class Product {
    constructor(id, title, price, stock, images, onsale, supplier) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.images = images;
        this.onsale = onsale;
        this._supplier = supplier;
    }
    get getSupplier() {
        return this._supplier;
    }
    set setSupplier(newName) {
        this._supplier = newName;
    }
    sellUnits(units) {
        this.stock = this.stock - units;
    }
}

const prod1 = new Product("01230", "Mouse", 20);
const prod2 = new Product("19403", "Laptop", 1000, 5, "https://static8.depositphotos.com/1338574/829/i/450/depositphotos_8299228-stock-photo-laptop-with-blue-graphics.jpg", true);
const prod3 = new Product("206789", "Monitor", 600, 10, "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/LG_L194WT-SF_LCD_monitor.jpg/1200px-LG_L194WT-SF_LCD_monitor.jpg", false);

console.log(prod1);
console.log(prod2);
console.log(prod3);

console.log(`Propiedad title de prod2 ${prod2.title}`);
console.log(`Propiedad onsale de prod3 ${prod3.onsale}`);

const prod4 = new Product("209056", "Microphone", 50, 10, "https://promart.vteximg.com.br/arquivos/ids/7859611-1000-1000/140272.jpg?v=638446832276430000", true, "HP");
prod4.setSupplier = "LENOVO";
console.log(prod4.getSupplier);

const prod5 = new Product("210234", "Audifonos", 55, 12, "wadad", true, "SONY");
prod5.sellUnits(10);
console.log(prod5.stock);
prod5.sellUnits(5);
console.log(prod5);



