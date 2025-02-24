let cpf = "120.648.599.00";
let cpfarray = cpf.replaceAll(".", "").split('');

function calcularDigito(cpf, mult) {
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += Number(cpf[i]) * mult[i];
    }
    console.log("A soma é: "+ soma)
    let resto = soma % 11;
    if (resto < 2) {
        return 0;
    } else {
        return 11 - resto;
    }
}

let multPrimeiroDigito = [10, 9, 8, 7, 6, 5, 4, 3, 2];
let primeiroDigito = calcularDigito(cpfarray, multPrimeiroDigito);
console.log("Primeiro dígito: " + primeiroDigito); 

let multSegundoDigito = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];  
let segundoDigito = calcularDigito(cpfarray, multSegundoDigito);
console.log("Segundo dígito: " + segundoDigito);
