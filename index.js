const matematica = true 
const portugues = false
const biologia = false
const quimica = false
const fisica = true 

//// o let será utilizado para que eu possa mudar o dia da semana
// e testar o código em diferentes dias

let dia_da_semana = "segunda-feira"

// Condicional para verificar se você estudou a materia ou não

//condicional que verifica o dia da semana e informa quais matérias você deve estudar no respectivo dia

if (dia_da_semana === "segunda-feira") {
    console.log("Hoje é segunda-feira, você deve estudar matemática e física")

    //nesse condicional, verificamos se você estudou matemática e física, caso tenha estudado, será exibido a mensagem 
    // "Você estudou matemática" ou "Você estudou física", 
    // caso não tenha estudado, será exibido a mensagem 
    // "Você não estudou matemática" ou "Você não estudou física"

            if (matematica&&fisica) {
        console.log("Você estudou matemática e física")
    } else {
            if (matematica) {
                console.log("Você estudou matemática")
            } else if (fisica) {
                console.log("Você estudou física")
            } else {
                console.log("Você não estudou matemática e física")
            }
    }

//=========================================================================================================
} else if (dia_da_semana === "terça-feira") {
    console.log("Hoje é terça-feira, você deve estudar português e biologia")

    //nesse condicional, verificamos se você estudou português e biologia

         if (portugues&&biologia) {
           console.log("Você estudou português e biologia")
           } else {
        console.log("Você não estudou português e biologia")
       }

///==========================================================================================================
} else if (dia_da_semana === "quarta-feira") {
    console.log("Hoje é quarta-feira, você deve estudar química e física")

    // nesse condicional, verificamos se você estudou química e física
    
          if (quimica&&fisica) {
                console.log("Você estudou química e física")
           } else {
                  console.log("Você não estudou química e física")
           }

///=========================================================================================================
} else if (dia_da_semana === "quinta-feira") {
    console.log("Hoje é quinta-feira, você deve estudar matemática e biologia")
    // nesse condicional, verificamos se você estudou matemática e biologia
    if (matematica&&biologia) {
        console.log("Você estudou matemática e biologia")
    } else {
        console.log("Você não estudou matemática e biologia")
    }

///=========================================================================================================
} else if (dia_da_semana === "sexta-feira") {
    console.log("Hoje é sexta-feira, você deve estudar português e química")
    // nesse condicional, verificamos se você estudou português e química
    if (portugues&&quimica) {
        console.log("Você estudou português e química")
    } else {
        console.log("Você não estudou português e química")
    }
}
 else {
    console.log("Hoje é fim de semana, aproveite para descansar!")
 }