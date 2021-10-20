let dataEvento = new Date("12/19/2021");
let dataHoje = new Date("10/19/2021");
let idade = 15;
let participantes = ["Bruno", "Maria", "Fernando", "Ana"];
let nroParticipantes = participantes.length;
let palestrantes = ["Ricardo", "Joana", "Sergio"];
let nroPalestrantes = palestrantes.length;
let pessoa = new Boolean(false);     //variável para identificar se a pessoa é participante ou palestrante


console.log("Informe a data desejada");

console.log(dataEvento);

if (dataEvento < dataHoje) {
    console.log ("Data inválida!");
}

console.log("Informe sua idade: ");

if (idade < 18) {
    console.log ("Não é possível a inscrição de menor de 18 anos!");
}

console.log("Insira seu nome...");
console.log("Insira seu telefone");

console.log ("Você é participante ou palestrante?")

if (pessoa = false){
    if (nroParticipantes >= 100) {
        console.log ("Limite de participantes excedido");
        }
    else nroParticipantes = nroParticipantes + 1;
}
else {
    nroPalestrantes = nroPalestrantes + 1;
}

console.log ("Palestrantes: " + palestrantes);
console.log ("Participantes: " + participantes);





