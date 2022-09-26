import Item from "../src/Item";
import Order from "../src/Order";

const items = {
    guitarra: new Item(1, "Guitarra", 1000, 10, 100, 20, 5),
    amplificador: new Item(2, "Amplificador", 5000, 20, 30, 30, 20),
    cabo: new Item(3, "Cabo", 30, 10, 20, 10, 1),
}

test("", function() {
    const order = new Order("317.153.361-86");
    order.addItem(items.guitarra, 1);
    order.addItem(items.amplificador, 1);
    order.addItem(items.cabo, 3);
});