let num = [5, 8, 2, 9, 3]
num.push(7) // adicionar mais um valor//
num.sort() // colocar em ordem //
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(7) // saber em que posição está o valor //
if (pos == -1) { // se a posição for igual a -1, ou seja, nao existir //
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor pesquisado  está na posição ${pos}`)
}




