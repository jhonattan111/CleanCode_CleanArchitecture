export default class Item {
    constructor(
        readonly idItem: number,
        readonly description: string,
        readonly price: number,
        readonly altura: number,
        readonly largura: number,
        readonly profundidade: number,
		readonly peso: number
    ) {
		if(price < 0) throw new Error("O item não pode ser lançado com um preço negativo");
		if(altura <= 0) throw new Error("O item não pode ser lançado com uma altura negativo");
		if(largura <= 0) throw new Error("O item não pode ser lançado com uma largura negativa");
		if(profundidade <= 0) throw new Error("O item não pode ser lançado com uma profundidade negativa");
		if(peso <= 0) throw new Error("O item não pode ser lançado com um peso negativo");
	}
}
