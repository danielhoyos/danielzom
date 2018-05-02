const expect = require('chai').expect;
const danielzom = require("../").default;

describe("Prueba danielzom", function() {
    it("Si la palabra termina en 'ar', se le quita esos dos caracteres", function() {
        const translate = danielzom('Programar');
        expect(translate).to.equal('Program');
    });

    it("Si la palabra comienza con 'z' se le agrega al final 'pe'", function() {
        const translate = danielzom("zorro");
        const translate2 = danielzom("zarpar");

        expect(translate).to.equal("zorrope");
        expect(translate2).to.equal("zarppe");
    });

    it("Si la palabra tiene 10 o más caracteres se corta a la mitar y se le agréga un '-' en medio.", function() {
        const translate = danielzom("abecedario");

        expect(translate).to.equal("abece-dario");
    });

    it("Si la palabra original es un palíndromo ninguna de las reglas anteriores aplica, y se retorna la palabra original intercalando entre mayúsculas y minusculas", function() {
        const translate = danielzom("sometemos");

        expect(translate).to.equal("SoMeTeMoS");
    });
});