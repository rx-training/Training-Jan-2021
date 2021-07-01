import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from 'src/app/Models/City';
import { ClassOrder, Order, OrderAll } from 'src/app/Models/ClassOrder';
import { Seller } from 'src/app/Models/Seller';
import { User, UserAddress } from 'src/app/Models/User';
import { Product } from 'src/app/Product';
import { CityService } from 'src/app/Services/city.service';
import { LoginService } from 'src/app/Services/login.service';
import { OrderService } from 'src/app/Services/order.service';
import { PlaceOrderService } from 'src/app/Services/place-order.service';
import { SellerService } from 'src/app/Services/seller.service';
import { UserAddressService } from 'src/app/Services/user-address.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  Address: UserAddress = {
    addressType: '',
    userAddressFullName: '',
    userAdressContact: '',
    userCityId: 0,
    userAddressDetail: '',
    userId: 0
  };
  CityId = '';
  cities: City[] = [];
  addressForm = new FormGroup({});
  constructor(private cityService: CityService, private fb: FormBuilder, private sellerService: SellerService, private placedService: PlaceOrderService, private userAddService: UserAddressService, private loginService: LoginService, private router: Router, private route: ActivatedRoute, private orderService: OrderService) {

  }
  Form() {
    this.addressForm = this.fb.group({
      Name: ['', Validators.compose([Validators.required])],
      AddressType: ['', Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z]+$")])],
      Contact: ['', Validators.compose([Validators.required, Validators.minLength(13), Validators.maxLength(13), Validators.pattern("^[+][0-9][0-9][1-9][0-9]*$")])],
      Address: ['', Validators.compose([Validators.required])],
      CityId: [0, Validators.compose([Validators.required])]
    });
  }
  get AddressUserName() {
    return this.addressForm.get('Name') as FormControl;
  }
  get AddressType() {
    return this.addressForm.get('AddressType') as FormControl;
  }
  get AddressContact() {
    return this.addressForm.get('Contact') as FormControl;
  }
  get AddressDetail() {
    return this.addressForm.get('Address') as FormControl;
  }
  get AddressCity() {
    return this.addressForm.get('CityId') as FormControl;
  }

  ngOnInit(): void {
    this.Form();
    this.getData();
    this.cityService.GetAll().subscribe(data => {
      this.cities = data;
    });
    this.getAddress();
  }
  user: User = { userFirstName: '', userMiddleName: '', userLastName: '', userContactNo: '', userEmail: '', userLogIn: '', userPassword: '' }
  products: Product[] = [];
  orders: Order[] = [];
  Bill: number = 0;
  AddressId = 0;
  map = new Map();
  sellers: Seller[] = [];
  flags: boolean[] = [];
  sellersId: Seller[] = [];
  orderAll: OrderAll[] = [];
  orderA: OrderAll = {
    sellerId: 0,
    productId: 0,
    userId: 0,
    bill: 0,
    quantity: 0,
    orderId: 0
  }

  getData() {
    this.map.clear();
    this.loginService.GetUserDataByLogin(localStorage.getItem("UserName") as string).subscribe(data => {
      this.user = data;
      this.Bill = 0;
      this.orderAll = [];
      this.flags = [];

      this.orderService.GetOrdersByUser(this.user.userId as number).subscribe(dt => {
        this.orders = dt;

      });
      this.orderService.GetProductByUser(this.user.userId as number).subscribe(dt => {
        this.products = dt;
        for (let index = 0; index < this.products.length; index++) {
          this.sellers = [];
          this.sellerService.GetSellerByProduct(this.products[index].productId).subscribe(datas => {
            this.sellers = datas;
            if (datas.length == 0) {
              this.flags[index] = true;
            }
            else {
              this.sellersId[index] = this.sellers[0];
              this.flags[index] = false;
              this.orderA.sellerId = this.sellers[0].sellerId as number;
              this.orderA.orderId = this.orders[index].orderId;
              this.orderA.orderedDate = this.orders[index].orderedDate;
              this.orderA.bill = this.orders[index].bill;
              this.orderA.quantity = this.orders[index].quantity;
              this.orderA.productId = this.orders[index].productId;
              this.orderA.userId = this.orders[index].userId;
              this.Address.userId = this.orders[index].userId;
              this.Bill += this.orders[index].bill;
              this.orderAll.push(this.orderA);
              this.orderA = {
                sellerId: 0,
                productId: 0,
                userId: 0,
                bill: 0,
                quantity: 0,
                orderId: 0
              }
            }
            this.map.set(index, this.sellers);
            this.sellers = [];
          });
        }
        console.log(this.map);
        console.log(this.orderAll)
        this.sellersId.length = this.products.length;
      });
    });
  }
  addresses: UserAddress[] = [];
  check(id: number | undefined) {
    this.AddressId = id as number;
  }
  getAddress() {
    this.loginService.GetUserDataByLogin(localStorage.getItem("UserName") as string).subscribe(data => {
      this.user = data;
      this.userAddService.GetAddressByUser(this.user.userId as number).subscribe(dt => {
        this.addresses = dt;
      });
    });
  }
  cancelOrder(id: number) {
    this.orderService.DeleteOrder(id).subscribe(data => {
      if (data == true) {
        this.getData();
        alert("Order is cancelled successfully...");
      }
      else {
        alert("Order is not cancelled...");
      }
    });
  }
  imgPath(str : string)
  {
    if(str.startsWith('assets'))
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  PlaceOrder(l: Order) {
    if (this.AddressId == 0) {
      alert("Please choose shiping address...");
    }
    else {
      this.placedService.PlaceOrder(l, this.AddressId).subscribe(data => {
        if (data == 0) {
          alert("Order is not placed...");
        }
        else {
          this.orderService.DeleteOrder(l.orderId as number).subscribe(data => {
            this.getData();
          });

          alert("Order is placed successfully and order id : " + data);
        }
      });
    }
  }
  placeOrders() {
    console.log(this.orderAll);
    if (this.AddressId == 0) {
      alert("Please choose one address...");
    }
    else {
      this.orderAll.forEach(element => {
        this.placedService.PlaceOrders(element, this.AddressId).subscribe(data => {
          if (data == false) {
            alert("Your order is not placed...");
          }
        });
      });
      alert("Order is placed successfully...");
      this.getData();
      // this.placedService.PlaceOrders(this.orderAll, this.AddressId).subscribe(data=>{
      //   console.log(data);
      //   if(data == true)
      //   {
      //     alert("Your order is placed successfully...");
      //   }
      //   else
      //   {
      //     alert("Order is not placed...");
      //   }
      // });
    }

  }
  clsOrder: ClassOrder = {
    ProductId: 0,
    Quantity: 0,
    UserId: 0
  }
  placeFlag = false;
  update(OId: number, productID: number, id: number) {
    this.placeFlag = true;
    this.clsOrder.ProductId = productID;
    this.clsOrder.Quantity = id;
    this.loginService.GetUserDataByLogin(localStorage.getItem("UserName") as string).subscribe(data => {
      this.user = data;
      this.clsOrder.UserId = this.user.userId as number;
      this.orderService.UpdateOrder(OId, this.clsOrder).subscribe(data => {
        this.getData();
      });
    });
    this.placeFlag = false;
  }
  deleteOrder(id: number) {
    this.orderService.DeleteOrder(id).subscribe(data => {
      if (data == true) {
        this.getData();
        alert("Order is cancelled...");
      }
      else {
        alert("order is not cancelled, try it after some time...");
      }
    })
  }
  AddAddress() {
    this.cityService.GetIdByCityName(this.CityId).subscribe(data => {
      this.Address.userCityId = data;
      this.userAddService.AddAddress(this.Address).subscribe(dt=>{
        if(dt==0)
        {
          alert("Address is not added...");
        }
        else
        {
          alert("Address is added successfully...");
          this.getAddress();
          this.ResetAddress();
        }

      });
    });
  }
  ResetAddress() {
    this.Address.userCityId = 0;
    this.Address.userAddressFullName = '';
    this.Address.userAddressDetail = '';
    this.Address.addressType = '';
    this.Address.userAdressContact = '';
  }
}
