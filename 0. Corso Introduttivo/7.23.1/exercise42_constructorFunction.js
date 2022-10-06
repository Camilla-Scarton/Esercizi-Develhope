function Smartphone(brand, name, price) {
    this.brand = brand;
    this.name = name;
    this.price = price;
}

let phone1 = new Smartphone("Un brand", "Un nome", 243627);
let phone2 = new Smartphone("Un altro brand", "Un altro nome", 0);

// console.log(phone1); <- La stampa è extra, ma funziona:
// console.log(phone2);    phone1 e phone2 sono effettivamente diversi