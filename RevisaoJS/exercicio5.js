const notas = [3.0, 9.2, 5.9];


console.log("Primeira nota: " +notas[0]); 
console.log("Segunda nota = " +notas[1]); 
console.log("Terceira nota = " +notas[2]); 

let media = (notas[0] + notas[1] + notas[2]) / notas.length

console.log("A média é: " +media);

if (media >= 7){
    console.log("Você passou por média. Parabéns!!!!")
} else {
    console.log("Você foi reprovado. Precisa estadar mais!!!")
}