export default class Coupon {

	constructor (readonly code: string, readonly percentage: number, readonly expireAt: Date) {
		if(expireAt.getTime() < Date.now()) throw new Error("Um cupom expirado não pode ser aplicado");
	}

	calculateDiscount (total: number) {
		return (total * this.percentage)/100;
	}
}