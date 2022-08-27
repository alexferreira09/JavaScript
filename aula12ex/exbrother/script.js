function calcular() {
    let msg = window.document.getElementById('msg')
    let tn1 = window.document.getElementById('nota1')
    let tn2 = window.document.getElementById('nota2')
    let n1 = Number(tn1.value)
    let n2 = Number(tn2.value)
    let media = (n1 + n2) /2 
    if ( media < 5) {
        document.body.style.background = 'red'
        msg.innerHTML = `Sua média foi de ${media} pontos.<br> REPROVADO ANIMAL!`
    } else if (media >= 5 && media < 7) {
        document.body.style.background = 'gray'
        msg.innerHTML = `Sua média foi de ${media} pontos.<br> RECUPERAÇÂO. ESTUDE MAIS!`
    } else {
        document.body.style.background = 'green'
        msg.innerHTML = `Sua média foi de ${media} pontos.<br> APROVADO PARABÉNS!!`
    }
        
      
}
