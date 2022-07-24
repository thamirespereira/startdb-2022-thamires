class Forca {

  chutar(letra) { }

  var palavraSecreta = ['a', 'b', 'a', 'c', 'a', 'x', 'i'];
  var letra = chute;
  var acertos =[];
  var erros =[];
  var errosMax = 6;
  var vidas = 6;
  var addAcertos = acertos.push();
  var addErros = erros.push();

if (letra && ){
		addAcertos;
		console.log("parabéns, você acertou!");
	} else{
		addErros; 
		vidas = vidas - 1; 
		console.log("você errou.");
	}

if (vidas > 0 && acertos === palavraSecreta) {
	console.log ("ganhou");
} 
	var letrasChutadas = acertos.concat(erros);
}
  
  buscarEstado() { return ["perdeu", "ganhou", "aguardando chute"].includes(jogo.buscarDadosDoJogo); } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      return {
          letrasChutadas: [], // Deve conter todas as letras chutadas
          vidas: 6, // Quantidade de vidas restantes
          palavra: [] // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}

module.exports = Forca;
