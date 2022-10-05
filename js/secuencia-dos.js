let nombre = prompt(`¿Cuál es tu nombre?`);
for (let i = 1; i <= 3; i++) {
    if (!isNaN(nombre)) {
        nombre = prompt(`Pregunté ¿cuál es tu nombre?
        (tienes 3 intentos y llevas ${i})`);
    }
}

alert(`Hola ${nombre}!!!
Bienvenido a la Casa de cambio ByM Nacionales`);

let divisa;
do {
    divisa = prompt(`Elija una divisa para comprar/vender (escribe 'exit' para saltar este paso)
- dolares
- euros
- libras`);
    switch (divisa) {
        case `dolares`:
            alert(`${nombre} elegiste ${divisa}`);
            break;
        case `euros`:
            alert(`${nombre} elegiste ${divisa}`);
            break;
        case `libras`:
            alert(`${nombre} elegiste ${divisa}`);
            break;
        default:
            alert(`${nombre} por favor elija una de las monedas mencionadas anteriormente"`);
    }
} while (divisa != `exit`);

let dinero = parseFloat(prompt(`¿Cuánto dinero vas a cambiar ${nombre}? 
A ver que podés cambiar (que sea un valor desde 0  hasta 99999)`));

while (Number.isNaN(dinero) || dinero > 99999) {
    dinero = parseFloat(prompt(`${nombre} pregunte ¿cuánto dinero vas a cambiar?
(que sea un valor entre 0 y 99999)`));
}

alert(`Vas a cambiar $${dinero}  ${nombre} continua a la pagina HOME para terminar la conversion. Saludos!`)