let nome = prompt("Coloque o seu nome");
let responderQuestionario = prompt("Coloque o número correspondente a sua respostas." +
    "\n" + "Quer Iniciar o teste? " + "\n" + "1. Sim " + "\n" + "2. Não");

let exibeNome = document.querySelector("#nome").innerHTML = "Olá, " + nome + "!";

if (responderQuestionario == 1) {

    let primeiraPergunta = prompt("Qual é o nome da mãe de Sam e Dean?" + "\n" + "1. Mary Winchester" +
        "\n" + "2. Rowena MacLeod" + "\n" + "3. Jody Mills");
    if (primeiraPergunta == 1) {
        let primeiraCorreta = document.getElementById("primeiraCorreta")
        primeiraCorreta.innerHTML = "Resposta 1";

    } else {
        let primeiraIncorreta = document.getElementById("primeiraIncorreta")
        primeiraIncorreta.innerHTML = "Resposta 1";
    }

    let segundaPergunta = prompt("Em Game Of Thrones qual personagem é conhecida como a Mãe dos dragões?" + "\n" + "1. Arya Stark" + "\n" +
        "2. Daenerys Targaryen" + "\n" + "3. Cersei Lannister");

    if (segundaPergunta == 2) {
        let segundaCorreta = document.getElementById("segundaCorreta")
        segundaCorreta.innerHTML = "Resposta 2";

    } else {
        let segundaIncorreta = document.getElementById("segundaIncorreta")
        segundaIncorreta.innerHTML = "Resposta 2";
    }

    let terceiraPergunta = prompt("Em Sabrina, qual é o nome das Irmãs Estranhas? " +
        "\n" + "1. Prudence, Dorcas e Agatha" + "\n" + "2. Rosalind, Susie e Prudence" + "\n" + "3. Zelda, Hilda e Dorcas.");

    if (terceiraPergunta == 1) {
        let terceiraCorreta = document.getElementById("terceiraCorreta")
        terceiraCorreta.innerHTML = "Resposta 3"

    } else {
        let terceiraIncorreta = document.getElementById("terceiraIncorreta")
        terceiraIncorreta.innerHTML = "Resposta 3";
    }

} else {
    alert("Questionário Encerrado")
    window.close();
}