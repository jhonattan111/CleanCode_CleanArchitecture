export default class Item {
    constructor( id: number, description: string, price: number, quantity: number) {
        this._id = id;
        this._description = description;
        this._price = price;
        this._quantity = quantity;
    }
    
    _id: number;
    _description: string;
    _price: number;
    _quantity: number;
}