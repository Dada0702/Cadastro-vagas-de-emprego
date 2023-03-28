const vagas = []

// primeira função de lista de vagas

function listarVagas () {

    const vagasEmTexto = vagas.reduce ((textoFinal, vaga, indice) => {
        textoFinal += indice + " . "
        textoFinal += vaga.nome
        textoFinal += " ( " + vaga.candidatos.length + "candidatos )\n"
        return textoFinal
    } , "")

    alert(vagasEmTexto)

}

// função de adicionar nova vaga

function novaVaga() {
    const nome = prompt("Informe um nome para a vaga: ")
    const descricao = prompt("Informe a descrição da vaga: ")
    const dataLimite = prompt("Informe a dataLimite (dd/mm/aaaa) para a vaga: ")

    const confirmacao = confirm(
        "Deseja criar uma nova vaga com esssas informações ? \n" +
        "Nome: " + nome + "\n Descrição: " + descricao + "\nData Limite: " + dataLimite
    )

    if(confirmacao) {
        const novaVaga = { nome, descricao, dataLimite, candidatos: [] }
        vagas.push(novaVaga)
        alert("Vaga criada com sucesso !!")
    }

}

//Função para exibir uma vaga

function exibirVaga() {
    const indice = prompt("Informe o índice da vaga que deseja exibir: ")
    const vaga = vagas[indice]

    const candidatosEmTexto = vaga.candidatos.reduce((textoFinal, candidato) => textoFinal +  "\n - " + candidato, "")

    alert(
        "Vaga nº " + indice +
        "\nNome: " + vaga.nome + 
        "\nDescrição: " + vaga.descricao + 
        "\nData Limite: " + vaga.dataLimite + 
        "\nQuantidade de candidatos: " + vaga.candidatos.length + 
        "\nCandidatos Inscritos: " + candidatosEmTexto
    )
}

//Função Increvcer um candidato na vaga

function inscreverCandidato () {
    const candidato = prompt("Informe o nome do(a) candidato(a):")
    const indice = prompt("Informe o índice da vaga para a qual o(a) candidato(a) deseja se inscrever:")
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Deseja inscrever o candidato " + candidato + "na vaga " + indice + "?\n" + 
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    )

    if(confirmacao){
        vaga.candidatos.push(candidato)
        alert (
            "Inscrição realizada!"
        )
    }
}

//função excluir uma vaga 

function excluirVaga() {
    const indice = prompt("Informe o índice da vaga que deseja excluir:")
    const vaga = vagas[indice]
  
    const confirmacao = confirm(
      "Tem certeza que deseja excluir a vaga " + indice + "?\n" +
      "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    )
  
    if (confirmacao) {
      vagas.splice(indice, 1)
      alert("Vaga excluída.")
    }
  }

  //Exibir menu

  function exibirMenu() {
    const opcao = prompt(
      "Cadastro de Vagas de Emprego" +
      "\n\nEscolha uma das opções" +
      "\n1. Listar vagas disponíveis" +
      "\n2. Criar uma nova vaga" +
      "\n3. Visualizar uma vaga" +
      "\n4. Inscrever um(a) candidato(a)" +
      "\n5. Excluir uma vaga" +
      "\n6. Sair"
    )
  
    return opcao
  }

  //Executar o codigo

  function executar() {
  let opcao = ""

  do {
    opcao = exibirMenu()

    switch (opcao) {
      case "1":
        listarVagas()
        break
      case "2":
        novaVaga()
        break
      case "3":
        exibirVaga()
        break
      case "4":
        inscreverCandidato()
        break
      case "5":
        excluirVaga()
      case "6":
        alert("Saindo...")
        break
      default:
        alert("Opção inválida.")
    }

  } while (opcao !== "6");
}

executar()