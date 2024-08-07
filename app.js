alert('Boas vindas ao numero secreto');
let numeroSecreto = 29;
let chute = prompt('Escolha um número entre 1 e 30');

// se chute for igual ao número secreto
if(chute == numeroSecreto) {
    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto}`);

} else {
    if(chute>numeroSecreto)  
        alert(`O número secreto é menor que ${chute}`);
} else  {
alert(`O número secreto é maior que ${chute}`);
}
