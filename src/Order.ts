import Customer from './Customer';
import OrderItem from './OrderItem';
import Item from './Item';
import Validators from './Validators';
export default class Order {
    constructor(cpfCustomer: string, items: Item[]){
        if(!Validators.validateCpf(cpfCustomer)) throw new Error("O cpf deve ter um valor válido");
        
        this._customer = new Customer(cpfCustomer);
        
        this._items = [];
        let i = 0;
        for(let item of items) {
            this._items.push(new OrderItem(item, i++))
        };
    }
    
    _customer: Customer;
    _items: OrderItem[];
}