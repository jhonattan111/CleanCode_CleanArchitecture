import Coupon from "./Coupon";
import Cpf from "./Cpf";
import Item from "./Item";
import OrderItem from "./OrderItem";

export default class Order {
	cpf: Cpf;
	orderItems: OrderItem[];
	coupon?: Coupon;

	constructor (cpf: string) {
		this.cpf = new Cpf(cpf);
		this.orderItems = [];
	}

	private checkIfExists (item: Item) {
		for(const orderItem of this.orderItems)
			if(orderItem.idItem === item.idItem && orderItem.price === item.price) return true;

		return false;
	}
	
	addItem (item: Item, quantity: number) {
		if(quantity < 0) throw new Error("Um item não pode ser adicionado com uma quantidade negativa");

		if(this.checkIfExists(item))
			this.orderItems.find(e => e.idItem == item.idItem)?.updateQuantity(quantity);
		else
			this.orderItems.push(new OrderItem(item.idItem, item.price, quantity, item.width, item.height, item.depth, item.weight));
	}

	addCoupon (coupon: Coupon) {
		this.coupon = coupon;
	}

	getTotal () {
		let total = this.orderItems.reduce((total, orderItem) => {
			total += orderItem.getTotal();
			return total;
		}, 0);

		if (this.coupon) {
			total -= this.coupon.calculateDiscount(total);
		}
		
		return total;
	}
}