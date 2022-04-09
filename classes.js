function Product(name, price) {
    this.name = name;
    this.price = price;
}
  
function Food(name, price,category) {
    Product.call(this, name, price);
    this.category = category;
}

class Milk extends Food{
    constructor(price,company){
        super('Milk',price,'Dairy');
        this.company=company;
    }
    packets(){
        console.info("This is the Milk of "+this.company+" Company");
    }
}

var x=new Food('Chicken',10,'Meat'),y=new Milk(15,'Amul');
console.info(x); console.info(y); y.packets();