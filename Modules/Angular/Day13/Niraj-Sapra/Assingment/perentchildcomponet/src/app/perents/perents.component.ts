import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perents',
  templateUrl: './perents.component.html'
})
export class PerentsComponent implements OnInit {
  products = [];
  title = 'Products';
  constructor() { }
  ngOnInit() {
    this.products = this.getProducts();
    this.students = this.getStudnets();
}
getProducts() {
    return [
        { 'id': '1', 'title': 'Screw Driver', 'price': 400, 'stock': 11 },
        { 'id': '2', 'title': 'Nut Volt', 'price': 200, 'stock': 5 },
        { 'id': '3', 'title': 'Resistor', 'price': 78, 'stock': 45 },
        { 'id': '4', 'title': 'Tractor', 'price': 20000, 'stock': 1 },
        { 'id': '5', 'title': 'Roller', 'price': 62, 'stock': 15 },
    ];
}  
displayCounter(count) {
    console.log(count);
}
productToUpdate: any;
changeStockValue(p) {
    this.productToUpdate = this.products.find(this.findProducts, [p.id]);
    this.productToUpdate.stock = this.productToUpdate.stock + p.updatdstockvalue;
}
findProducts(p) {
    return p.id === this[0];
}
//student data
    students = [];
    studenttitle = 'StudentED TABLE';
    getStudnets(){
        return [
            { 'id': '1', 'name': 'Screw Driver', 'dateofbirth': '21-08-1999', 'stock': 11 },
            { 'id': '2', 'name': 'Nut Volt', 'dateofbirth': '21-08-1999', 'stock': 5 },
            { 'id': '3', 'name': 'Resistor', 'dateofbirth': '21-08-1999', 'stock': 45 },
            { 'id': '4', 'name': 'Tractor', 'dateofbirth': '21-08-1999', 'stock': 1 },
            { 'id': '5', 'name': 'Roller', 'dateofbirth': '21-08-1999', 'stock': 15 }
        ];  
    }
    studentToUpdate: any;
    changestudentname(p) {
        console.log("woking"+ p.name);
        this.studentToUpdate = this.students.find(this.findstudent, [p.id]);
        this.studentToUpdate.name = p.name ;
    }
    findstudent(p) {
        return p.id === this[0];
    }

}