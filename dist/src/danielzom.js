'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = danielzom;

function danielzom(str) {
    var translation = str;

    // Si la palabra original es un palíndromo ninguna de las reglas anteriores aplica,
    // y se retorna la palabra original intercalando entre mayúsculas y minusculas.
    var reverse = function reverse(str) {
        return str.split('').reverse().join('');
    };

    function minMay(str) {
        var translation = '';
        var capitalize = true;

        for (var i = 0; i < str.length; i++) {
            var char = str.charAt(i);
            translation += capitalize ? char.toUpperCase() : char.toLowerCase();
            capitalize = !capitalize;
        }

        return translation;
    }

    if (str.toLowerCase() === reverse(str.toLowerCase())) {
        return minMay(str);
    }

    // Si la palabra termina en 'ar', se le quita esos dos caracteres
    if (str.toLowerCase().endsWith('ar')) {
        translation = str.slice(0, -2);
    }

    // Si la palabra comienza con 'z' se le agrega al final 'pe'
    if (str.toLowerCase().startsWith('z')) {
        translation += 'pe';
    }

    // Si la palabra tiene 10 o más caracteres se corta a la mitar y se le agréga un '-' en medio.
    var tamString = str.length;

    if (tamString >= 10) {
        var firstHalf = str.slice(0, Math.round(tamString / 2));
        var secondHalf = str.slice(Math.round(tamString / 2), tamString);
        translation = firstHalf + '-' + secondHalf;
    }

    return translation;
}