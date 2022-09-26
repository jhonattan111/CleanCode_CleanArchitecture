export default class OrderItem {
    constructor(
        readonly idItem: number,
        readonly price: number,
        quantity: number,
        readonly width: number,
        readonly height: number,
        readonly depth: number,
        readonly weight: number
    ) {
        this.quantity = quantity;
    }

    quantity: number;

    getTotal() {
        return this.price * this.quantity;
    }

    updateQuantity(quantity: number) {
        this.quantity += quantity;
    }
}
