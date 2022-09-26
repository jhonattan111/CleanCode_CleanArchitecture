import Coupon from "../src/Coupon";
import Item from "../src/Item";
import Order from "../src/Order";

const items = {
    guitarra: new Item(1, "Guitarra", 1000, 10, 100, 20, 5),
    amplificador: new Item(2, "Amplificador", 5000, 20, 30, 30, 20),
    cabo: new Item(3, "Cabo", 30, 10, 20, 10, 1),
}

test("Não deve criar um pedido com CPF inválido", function () {
    expect(() => new Order("111.111.111-11")).toThrow(
        new Error("Cpf inválido")
    );
});

test("Deve criar um pedido sem itens", function () {
    const order = new Order("317.153.361-86");
    const total = order.getTotal();
    expect(total).toBe(0);
});

test("Deve criar um pedido com 3 itens", function () {
    const order = new Order("317.153.361-86");
    order.addItem(items.guitarra, 1);
    order.addItem(items.amplificador, 1);
    order.addItem(items.cabo, 3);
    const total = order.getTotal();
    expect(total).toBe(6090);
});

test("Deve criar um pedido com 3 itens com cupom de desconto", function () {
    const order = new Order("317.153.361-86");
    order.addItem(items.guitarra, 1);
    order.addItem(items.amplificador, 1);
    order.addItem(items.cabo, 3);
    order.addCoupon(new Coupon("VALE20", 20, new Date(2023, 4, 1)));
    const total = order.getTotal();
    expect(total).toBe(4872);
});

test("Não deve criar um pedido com cupom inválido", function () {
    const order = new Order("317.153.361-86");
    expect(() =>
        order.addCoupon(new Coupon("VALE20", 20, new Date(2021, 4, 1)))
    ).toThrowError("Um cupom expirado não pode ser aplicado");
});

test("Não Deve criar um pedido com unidade negativa", function () {
    const order = new Order("317.153.361-86");
    expect(() => order.addItem(items.guitarra, -1)).toThrowError(
        "Um item não pode ser adicionado com uma quantidade negativa"
    );
});

test("Deve criar um pedido com 3 itens, atualizando a quantidade de itens repetidos", function () {
    const order = new Order("317.153.361-86");
    order.addItem(items.guitarra, 1);
    order.addItem(items.amplificador, 1);
    order.addItem(items.cabo, 3);
    order.addItem(items.cabo, 4);
    expect(order.getTotal()).toBe(6210);
    expect(order).toEqual({
        cpf: {
            value: "317.153.361-86",
        },
        orderItems: [
            {
                depth: 20,
                height: 100,
                idItem: 1,
                price: 1000,
                quantity: 1,
                weight: 5,
                width: 10,
            },
            {
                depth: 30,
                height: 30,
                idItem: 2,
                price: 5000,
                quantity: 1,
                weight: 20,
                width: 20,
            },
            {
                depth: 10,
                height: 20,
                idItem: 3,
                price: 30,
                quantity: 7,
                weight: 1,
                width: 10,
            },
        ],
    });
});

test("Deve lançar um erro ao criar um pedido com 4 itens, incluindo o mesmo item com um preço diferente e quantidade negativa", function () {
    const order = new Order("317.153.361-86");
    order.addItem(items.amplificador, 1);
    order.addItem(items.guitarra, 1);
    order.addItem(items.cabo, 3);
    expect(() => order.addItem(items.cabo, -10)).toThrowError(
        "Um item não pode ser adicionado com uma quantidade negativa"
    );
});