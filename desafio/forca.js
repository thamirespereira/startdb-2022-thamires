class Forca {

  chutar(letra) { }

  var letra = chute;
  var vidas = 6;
 
  var acertos = {
      length: 0,

      addAcertos: function addAcertos(letra) {
          [].push.call(this, letra);
    }
};

 var erros = {
    length: 0,

    addErros: function addErros(letra) {
        [].push.call(this, letra);
    }
};


if (erros){
	vidas - 1;
	console.log(vidas);
} 
	var letrasChutadas = acertos.concat(erros);
	var palavras = acertos;
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
