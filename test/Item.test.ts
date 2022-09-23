import Item from "../src/Item";

test("Deve criar um item", function () {
    let item = new Item(1, "Coca-Cola 2L", 8.99);
    expect(item).toEqual({
        idItem: 1,
        description: "Coca-Cola 2L",
        price: 8.99
    });
});
