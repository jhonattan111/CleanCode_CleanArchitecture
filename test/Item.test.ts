import Item from "../src/Item";

const items = {
    guitarra: new Item(1, "Guitarra", 1000, 10, 100, 20, 5),
    amplificador: new Item(2, "Amplificador", 5000, 20, 30, 30, 20),
    cabo: new Item(3, "Cabo", 30, 10, 20, 10, 1),
}

test("Deve criar um item", function () {
    let item = items.guitarra;
    expect(item).toEqual({
        depth: 20,
        description: "Guitarra",
        height: 100,
        idItem: 1,
        price: 1000,
        weight: 5,
        width: 10,
    });
});
