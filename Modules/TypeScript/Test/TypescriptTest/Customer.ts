import { ICustomer } from "./ICustomer";
import { newCustomers } from "./Customers";

export class Customer implements ICustomer
{
    public CustomerName;
    public CustomerContact;
    public CustomerId ;
    public CustomerAddress;
    public CustomerIdentity;

    constructor(id: number,contact : string, name : string, address : string, Identity : string)
    {
        this.CustomerId = id;
        this.CustomerName = name;
        this.CustomerAddress = address;
        this.CustomerContact = contact;
        this.CustomerIdentity = Identity;
    }
  
    CustomerFind(Id : number | string, Contact : string):boolean
    {
        if(typeof(Id) == 'number')
        {
            if(newCustomers.filter(s=>s.CustomerId == Id && s.CustomerContact == Contact))
            {
                return true;
            }
            else{
                return false;
            }
            
        }
        else if(typeof(Id) == 'string')
        {
            if(newCustomers.filter(s => s.CustomerName == Id && s.CustomerContact == Contact))
                return true;
            else
                return false;
        }
        else
        {
            return false;
        }
    }
    
}