function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')
   if (fano.value.length == 1 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
   } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement ('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 15) {
                //Criança
                img.setAttribute('src', 'criança-m.jpg')
            } else if (idade <= 29){
                //Jovem
                img.setAttribute('src', 'jovem-m.jpg')
            } else if (idade < 60){
                //Adulto
                img.setAttribute('src', 'adulto.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'iidoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 15) {
                //Criança
                img.setAttribute('src', 'criança-f.jpg')
            } else if (idade <= 29){
                //Jovem
                img.setAttribute('src', 'jovem-f.jpg')
            } else if (idade < 60){
                //Adulto
                img.setAttribute('src', 'adulta.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
   }
}