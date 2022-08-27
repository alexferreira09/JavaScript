function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'
        msg.innerHTML = `Agora são ${hora} horas. <br> <strong>Bom dia!</strong>`
    } else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
        msg.innerHTML = `Agora são ${hora} horas. <br> <strong>Boa tarde!</strong>`
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#515154'
        msg.innerHTML = `Agora são ${hora} horas. <br> <strong>Boa noite!</strong>`
    }
}
