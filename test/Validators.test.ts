import Validators from "../src/Validators";

test("Should validate the number of cpf and return true", function () {
    const cpf = '14708543760';
    expect(Validators.validateCpf(cpf)).toBe(true);
});

test("Should validate the number of cpf and return false", function () {
    const cpf = '14708543779';
    expect(Validators.validateCpf(cpf)).toBe(false);
});

test("Should validate the number of cpf with .- and return true", function () {
    const cpf = '147.085.437-60';
    expect(Validators.validateCpf(cpf)).toBe(true);
});

test("Should validate the number of cpf with .- and return false", function () {
    const cpf = '147.085.437-79';
    expect(Validators.validateCpf(cpf)).toBe(false);
});