function validateCpf(cpf: string) {
    if(!cpf) return false;
    cpf = cpf.replace(/[\D]/g, "");
    if (cpf.length === 11) {
        try {
            let calculatedFirstDigit = 0,
                calculatedSecondDigit = 0,
                rest = 0;

            for (let i = 1; i < cpf.length - 1; i++) {
                const digit = parseInt(cpf.substring(i - 1, i));
                calculatedFirstDigit += (11 - i) * digit;
                calculatedSecondDigit += (12 - i) * digit;
            }

            rest = calculatedFirstDigit % 11;
            calculatedFirstDigit = rest <= 2 ? 0 : 11 - rest;

            rest = calculatedSecondDigit % 11;
            calculatedSecondDigit = rest <= 2 ? 0 : 11 - rest;

            const verificatorDigits = cpf.substring(cpf.length - 2);
            const calculatedResultVerificatorDigits = `${calculatedFirstDigit}${calculatedSecondDigit}`;
            return verificatorDigits === calculatedResultVerificatorDigits;
        } catch (e: any) {
            return false;
        }
    }
    return false;
}

export default {
    validateCpf,
};
