const prompt = require("prompt-sync")()

let diaDaSemana
let diaValido = false

do {
  diaDaSemana = prompt("Qual é o dia da semana? ").toLowerCase()

  if (
    diaDaSemana === "segunda-feira" ||
    diaDaSemana === "terça-feira" ||
    diaDaSemana === "quarta-feira" ||
    diaDaSemana === "quinta-feira" ||
    diaDaSemana === "sexta-feira" ||
    diaDaSemana === "sábado" ||
    diaDaSemana === "domingo"
  ) {
    diaValido = true
  } else {
    console.log("Dia inválido! Digite novamente.")
  }
} while (!diaValido)

// OBJETO: matérias previstas para cada dia
const horario = {
  "segunda-feira": ["matemática", "física"],
  "terça-feira": ["português", "biologia"],
  "quarta-feira": ["química", "física"],
  "quinta-feira": ["matemática", "biologia"],
  "sexta-feira": ["português", "química"]
}

// ARRAY: acessando as matérias do dia pelo objeto
let materiasDoDia = horario[diaDaSemana] || []

// Verifica se é fim de semana
if (
  diaDaSemana === "sábado" ||
  diaDaSemana === "domingo"
) {
  console.log("Hoje é fim de semana! Aproveite para descansar.")
} else {

  // SORT: organiza as matérias em ordem alfabética
  materiasDoDia.sort()

  console.log(
    "Matérias previstas para hoje:",
    materiasDoDia.join(" e ")
  )

  let quantidade = Number(
    prompt("Quantas matérias você estudou hoje? ")
  )

  // WHILE: verifica se a quantidade é válida
  while (
    quantidade < 0 ||
    !Number.isInteger(quantidade)
  ) {
    console.log("Digite uma quantidade válida!")

    quantidade = Number(
      prompt("Quantas matérias você estudou hoje? ")
    )
  }

  // ARRAY: armazenará os objetos das matérias estudadas
  let estudadas = []

  // FOR: pergunta o nome de cada matéria estudada
  for (let i = 0; i < quantidade; i++) {

    let materia = prompt(
      "Qual matéria você estudou? "
    ).toLowerCase()

    // OBJETO: guarda informações de cada matéria
    let registro = {
      nome: materia,
      prevista: materiasDoDia.includes(materia)
    }

    // PUSH: adiciona o objeto ao array
    estudadas.push(registro)

    // IF/ELSE: verifica se a matéria estava prevista
    if (registro.prevista) {
      console.log(
        "Você estudou uma matéria prevista para hoje!"
      )
    } else {
      console.log(
        "Essa matéria não estava prevista para hoje."
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

  // FOR EACH: percorre as matérias estudadas
  console.log("\n===== MATÉRIAS ESTUDADAS =====")

  resumo.materiasEstudadas.forEach((materia) => {
    console.log(
      materia.nome,
      "- Prevista:",
      materia.prevista ? "Sim" : "Não"
    )
  })

  // RESULTADO FINAL
  console.log("\n===== RESULTADO DO DIA =====")

  console.log("Dia da semana:", resumo.dia)

  console.log(
    "Matérias previstas:",
    resumo.materiasPrevistas.join(" e ")
  )

  console.log(
    "Matérias informadas:",
    resumo.materiasEstudadas.length
  )

  console.log(
    "Matérias previstas que você estudou:",
    resumo.acertos
  )

  if (resumo.acertos === resumo.materiasPrevistas.length) {
    console.log(
      "Parabéns! Você estudou todas as matérias previstas!"
    )
  } else {
    console.log(
      "Você ainda pode estudar as matérias que faltaram!"
    )
  }
}
