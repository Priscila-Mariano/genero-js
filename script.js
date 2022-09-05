function verificar() {

   var data = new Date()

   var ano = data.getFullYear ()

   var fano = document.getElementById('txtano')

   var res = document.querySelector('div#res')

   if (fano.value.lenght == 0 || fano.value > ano) {

    window.alert('[ERRO] Verifique os dados e tente novamente!');

    } else {
        var fsex = document.getElementsByName('radsex')

        var idade = ano - Number(fano.value)

        //res.innerHTML = `Idade calculada: ${idade}` - TESTE DA FUNÇÃO
        
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')

        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src' , './imagens/foto-bebe-menino.png')
            
            } else if (idade < 32) {
                //JOVEM
                img.setAttribute('src' , './imagens/foto-homem-jovem.png')

            } else if  (idade < 50) {
                //ADULTO
                img.setAttribute('src' , './imagens/foto-homem.png')

            } else {
                //IDOSO
                img.setAttribute('src' , './imagens/foto-idoso-homem.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src' , './imagens/foto-bebe-menina.png')

            } else if (idade < 32) {
                //JOVEM
                img.setAttribute('src' , './imagens/foto-mulher-jovem.png')

            } else if  (idade < 50) {
                //ADULTO
                img.setAttribute('src' , './imagens/foto-mulher.png')

            } else {
                //IDOSO
                img.setAttribute('src' , './imagens/foto-idosa-mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}

