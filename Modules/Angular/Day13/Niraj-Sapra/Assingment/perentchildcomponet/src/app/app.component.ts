import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'perentchildcomponet';
  students = [];
  constructor() { }
  ngOnInit() {
    this.students = this.getStudents();
}
getStudents() {
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
    this.productToUpdate = this.students.find(this.findProducts, [p.id]);
    this.productToUpdate.price = this.productToUpdate.stock + p.updatdstockvalue;
}
findProducts(p) {
    return p.id === this[0];
}
}
