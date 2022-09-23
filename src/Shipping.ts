export default class Shipping {    
    constructor(readonly cep: string) {

    }

    MIN_TAX = 10;

    calculateShipping() {
        let shippingValue = 0;

        return shippingValue < this.MIN_TAX ? this.MIN_TAX : shippingValue;
    }
}
