let Number1;
let Number2;
let Resultado;


Number1 = new Number (prompt ("Insira a primeira nota: "))
Number2 = new Number (prompt ("Insira a segunda nota: "))

Resultado = Number1 + Number2

if (Resultado >= 6) {
    alert("Parabens, voce foi aprovado! :) Sua nota foi " + Resultado)
}
else  {
    alert("Po, deu ruim! :( Sua nota foi " + Resultado)
}
