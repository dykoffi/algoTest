const calculatrice = require("./calco");

describe('Test de toutes les operations', () => {
    it('Test addition, correct', () => {
        expect(calculatrice(1,2,"+")).toBe(3)
    });

    it('Test soustraction, correct', () => {
        expect(calculatrice(1,2,"-")).toBe(-1)
    });

    it('Test avec des parametres chaines, incorrect', () => {
        expect(calculatrice("fe","ol","-")).toBe(NaN)
    });

    it('Test multiplication, correct', () => {
        expect(calculatrice(9,2,"x")).toBe(18)
    });

    it('Test division, correct', () => {
        expect(calculatrice(9,2,"/")).toBe(4.50)
    });

    it('Test division avec denominateur null, incorrect', () => {
        expect(calculatrice(9,0,"/")).toBe(Infinity)
    });

    it('Test avec opoerateur inconnu, incorrect', () => {
        expect(calculatrice(9,2,"e")).toBe(null)
    });   
});