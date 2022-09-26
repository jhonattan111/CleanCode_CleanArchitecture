import OrderItem from "./OrderItem";

export default class Shipping {    
    constructor(readonly cep: string) {

    }

    MIN_TAX = 10;

    calculateShipping(orderItem: OrderItem[]) {
        let shippingValue = 0;

        let tes = orderItem[0].quantity

        return shippingValue < this.MIN_TAX ? this.MIN_TAX : shippingValue;
    }
}
