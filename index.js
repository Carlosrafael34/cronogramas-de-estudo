const prompt = require("prompt-sync")()

let diaDaSemana
let diaValido = false

do {
  diaDaSemana = prompt("Qual e o dia da semana? ").toLowerCase()

  if (
    diaDaSemana === "segunda-feira" ||
    diaDaSemana === "terca-feira" ||
    diaDaSemana === "quarta-feira" ||
    diaDaSemana === "quinta-feira" ||
    diaDaSemana === "sexta-feira" ||
    diaDaSemana === "sabado" ||
    diaDaSemana === "domingo"
  ) {
    diaValido = true
  } else {
    console.log("Dia invalido! Digite novamente.")
  }
} while (!diaValido)

// OBJETO: materias previstas para cada dia
const horario = {
  "segunda-feira": ["matematica", "fisica"],
  "terca-feira": ["portugues", "biologia"],
  "quarta-feira": ["quimica", "fisica"],
  "quinta-feira": ["matematica", "biologia"],
  "sexta-feira": ["portugues", "quimica"]
}

// ARRAY: acessando as materias do dia pelo objeto
let materiasDoDia = horario[diaDaSemana] || []

// Verifica se e fim de semana
if (
  diaDaSemana === "sabado" ||
  diaDaSemana === "domingo"
) {
  console.log("Hoje e fim de semana! Aproveite para descansar.")
} else {

  // SORT: organiza as materias em ordem alfabetica
  materiasDoDia.sort()

  console.log(
    "Materias previstas para hoje:",
    materiasDoDia.join(" e ")
  )

  let quantidade = Number(
    prompt("Quantas materias voce estudou hoje? ")
  )

  // WHILE: verifica se a quantidade e valida
  while (
    quantidade < 0 ||
    !Number.isInteger(quantidade)
  ) {
    console.log("Digite uma quantidade valida!")

    quantidade = Number(
      prompt("Quantas materias voce estudou hoje? ")
    )
  }

  // ARRAY: armazenara os objetos das materias estudadas
  let estudadas = []

  // FOR: pergunta o nome de cada materia estudada
  for (let i = 0; i < quantidade; i++) {

    let materia = prompt(
      "Qual materia voce estudou? "
    ).toLowerCase()

    // OBJETO: guarda informacoes de cada materia
    let registro = {
      nome: materia,
      prevista: materiasDoDia.includes(materia)
    }

    // PUSH: adiciona o objeto ao array
    estudadas.push(registro)

    // IF/ELSE: verifica se a materia estava prevista
    if (registro.prevista) {
      console.log(
        "Voce estudou uma materia prevista para hoje!"
      )
    } else {
      console.log(
        "Essa materia nao estava prevista para hoje."
      )
    }
  }

  // Verifica o resultado dos estudos
  let acertos = 0

  for (let i = 0; i < estudadas.length; i++) {

    if (estudadas[i].prevista) {
      acertos++
    }
  }

  // OBJETO: guarda o resumo do dia
  let resumo = {
    dia: diaDaSemana,
    materiasPrevistas: materiasDoDia,
    materiasEstudadas: estudadas,
    acertos: acertos
  }

  // FOR EACH: percorre as materias estudadas
  console.log("\n===== MATERIAS ESTUDADAS =====")

  resumo.materiasEstudadas.forEach((materia) => {
    console.log(
      materia.nome,
      "- Prevista:",
      materia.prevista ? "Sim" : "Nao"
    )
  })

  // RESULTADO FINAL
  console.log("\n===== RESULTADO DO DIA =====")

  console.log("Dia da semana:", resumo.dia)

  console.log(
    "Materias previstas:",
    resumo.materiasPrevistas.join(" e ")
  )

  console.log(
    "Materias informadas:",
    resumo.materiasEstudadas.length
  )

  console.log(
    "Materias previstas que voce estudou:",
    resumo.acertos
  )

  if (resumo.acertos === resumo.materiasPrevistas.length) {
    console.log(
      "Parabens! Voce estudou todas as materias previstas!"
    )
  } else {
    console.log(
      "Voce ainda pode estudar as materias que faltaram!"
    )
  }

  // ==========================================

  // ==========================================

  // FUNCTION: verifica se todas as materias previstas foram estudadas
  function verificarEstudos(acertos, totalPrevistas) {

    if (acertos === totalPrevistas) {
      return "Meta de estudos concluida!"
    } else {
      return "Meta de estudos ainda nao concluida."
    }
  }

  // FUNCTION: calcula quantas materias faltaram
  function calcularMateriasFaltantes(totalPrevistas, acertos) {
    return totalPrevistas - acertos
  }

  // Chamando as funcoes e passando parametros
  console.log("\n===== FUNCOES - AULA 13 =====")

  console.log(
    verificarEstudos(
      resumo.acertos,
      resumo.materiasPrevistas.length
    )
  )

  console.log(
    "Materias que faltaram:",
    calcularMateriasFaltantes(
      resumo.materiasPrevistas.length,
      resumo.acertos
    )
  )

  // ==========================================
  
  // ==========================================

  // ARROW FUNCTION: calcula o percentual de aproveitamento
  const calcularPercentual = (acertos, total) => {
    if (total === 0) {
      return 0
    }

    return (acertos / total) * 100
  }

  // ARROW FUNCTION: classifica o desempenho
  const classificarDesempenho = (percentual) => {

    if (percentual === 100) {
      return "Excelente! Voce cumpriu toda a meta!"
    }

    if (percentual >= 50) {
      return "Bom trabalho! Voce esta no caminho certo."
    }

    return "Continue se dedicando aos estudos!"
  }

  // ==========================================
  // FUNCAO DENTRO DE OUTRA FUNCAO
  // ==========================================

  const exibirDesempenho = (resumo) => {

    // Variavel local: so existe dentro desta funcao
    const percentual = calcularPercentual(
      resumo.acertos,
      resumo.materiasPrevistas.length
    )

    // Chamando outra funcao dentro desta funcao
    const mensagem = classificarDesempenho(percentual)

    console.log("\n===== DESEMPENHO FINAL =====")

    console.log(
      "Aproveitamento:",
      percentual.toFixed(1) + "%"
    )

    console.log(mensagem)
  }

  // Chamando a funcao e passando o objeto resumo
  exibirDesempenho(resumo)

}
