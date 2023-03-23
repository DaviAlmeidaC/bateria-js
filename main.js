//nome do arquivo principal sempre sera main, e o js é uma linguagem case sensitive
//alert('ola mundo');aparece uma caixinha na hora de recarregar com um alerta escrito oq esta dentro do parenteses 
function tocaSom (idAudio) {//tem que ter um () quando se é uma função. ( ) é um paramentro
   
    const elemento = document.querySelector(idAudio).play();//ele esta selecionando um som, mas so tem como ele selecionar dps que o html estiver carregado, por isso que é importando botar o js no final do body quando o js for usar o body
    
    if(elemento === null){
        alert('Tecla não cadastrada')
    }

    if(elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }
    

}//o idaudio é uma especie de função a onde o que for escrito dentro desse paramentro, ira mudar todo o resto

// document.querySelector('.tecla_pom').onclick = tocaSomPom;aqui com o document, eu estou selecionando todo o documento, e com o querySelector eu irei selecionar uma tag especifica, class e etc do meu documento. e o onclick é uma tqag do html, ele pode ser usado no js tambem para selecionar uma ação de um determinado item
const lista = document.querySelectorAll('.tecla');//forma de armazenar coisas dentro de uma variavel local

let cont = 0;//let é o nome da tag a onde pode se criar uma variavel

//enquant=tradução
/*while (cont < lista.length){//eu acessei a const e com a tag length, eu acessei todos os numeors, entao nao preciso saber quantos tem
    
    const tecla = lista[cont];//fiz uma variavel a onde recebe todas essas indormações para substuir na parte de baixo
    const instrumento = tecla.classList[1];//lista[cont].classList[1];//eu criei uma constant com o nome instru, que recebe a constante lista a onde tem um queryselector com a posição contada, com a tag classlista slecionando o 1
    
    //template string. serve para aparecer tudo
    const idAudio = `#som_${instrumento}`



    tecla.onclick = function (){//usando a variavel, eu selecionei uma coisa especifica dentro da variavel
        tocaSom(idAudio);
    }
    
    cont= cont + 1;

    console.log(cont);//tag para escrever

}*/

for(let cont=0; cont<lista.length; cont++){

    const tecla = lista[cont];//fiz uma variavel a onde recebe todas essas indormações para substuir na parte de baixo
    const instrumento = tecla.classList[1];//lista[cont].classList[1];//eu criei uma constant com o nome instru, que recebe a constante lista a onde tem um queryselector com a posição contada, com a tag classlista slecionando o 1
    const idAudio = `#som_${instrumento}`;//template string. serve para aparecer tudo

    tecla.onclick = function (){//usando a variavel, eu selecionei uma coisa especifica dentro da variavel
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(invate){//one key down quer dizer quando a tecla esta precionada ou estar para baixo
        if(invate.code === 'Space' || invate.code === 'Enter'){
        tecla.classList.add('ativa');
        }

        else{
            alert('Tecla não cadastrada')
        }
            
        

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
