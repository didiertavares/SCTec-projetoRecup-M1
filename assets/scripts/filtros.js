//  ELEGIBILIDADE REGIONAL (UF & remotas)

export function elegibilidadeVaga(a, b){
    console.log('candidato e vaga são do mesmo estado?')
    if (a.estado === b.estado) return true
    console.log('candidato aceita vaga remotas && vaga.modalidade === remoto? ')
    if (a.aceitaVagasRemotas && b.modalidade === "Remoto") return true
    else return false
}

