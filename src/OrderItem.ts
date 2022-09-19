import { readBuilderProgram } from "typescript";
import Item from './Item';

export default class OrderItem {
    constructor(item: Item, order: number) {
        this._id = item._id;
        this._description = item._description;
        this._price = item._price;
        this._quantity = item._quantity;
        this._order = order;
    }

    _order: number;
    _id: number;
    _description: string;
    _price: number;
    _quantity: number;
}