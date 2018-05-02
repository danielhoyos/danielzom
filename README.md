# Danielzom

Danielzom es un idioma inventado para el [Curso de fundamentos de Javascript](https://platzi.com/js) de [Platzi](https://platzi.com), el mejor lugar de educación online.

##  Descripción del idioma

- Si la palabra original es un palíndromo ninguna de las reglas anteriores aplica, y se retorna la palabra original intercalando entre mayúsculas y minusculas.
- Si la palabra termina en 'ar', se le quita esos dos caracteres.
- Si la palabra comienza con 'z' se le agrega al final 'pe'.
- Si la palabra tiene 10 o más caracteres se corta a la mita y se le agréga un '-' en medio.

## Instalación
```
npm install danielzom
```

## Uso
```
import platzom from 'platzom'

danielzom("Programar") // Program
danielzom("Zorro") // Zorrope
danielzom("Zarpar") // Zarppe
danielzom("abecedario") // abece-dario
danielzom("sometemos") // SoMeTeMoS
```

## Créditos

- [Daniel Hoyos](http://twitter.com/danielhoyosdev)

## Licencia

[MIT](https://opensource.org/licenses/MIT)


