// ===== Analisando código =====
// Aqui é declarada as váriaveis utilizadas
let num = document.getElementById('fnum') //captura o número
let lista = document.getElementById('flista') //captura a lista
let res = document.getElementById('res') // captura a área de resultado
let valores = [] // cria o Array dos valores

function isNumero(n){                         //Aqui é criada uma função com o parâmetro (n)  
  if (Number(n) >= 1 && Number(n) <= 100) {   //Aqui verifica se o n é um número que está entre 1 e 100, convertendo ele diretamente na condição e não em uma variável
    return true                               //Retorno se verdadeiro
  } else {
    return false                              //Retorno se falso
  }
}

function inLista(n, l){                      //Aqui é criada uma função com o parâmetro (n, l)
  if(l.indexOf(Number(n)) != -1){            //Aqui verifica se o número já existe dentro da lista
    return true                              //Retorno se verdadeiro
  } else {
    return false                             //Retorno se falso
  }
}

function adicionar(){                                             //Aqui é criada a função para adicionar o valor dentro do select e do array
  if(isNumero(num.value) && !inLista(num.value, valores)){        //Aqui é criado um if para chamar as funções criadas acima, indicando os parâmetros das mesmas
    valores.push(Number(num.value))                                //!inLista(num.value, valores) indicam os parâmetros para (n, l) da função acima
    let item = document.createElement('option')                   //Após isso, é criado valores para retorno verdadeiro e falso
    item.text = `Valor ${num.value} adicionado.`
    lista.appendChild(item)  
    res.innerHTML = ''                                     
  } else {                                                        
    window.alert('Valor inválido ou já encontrado na lista.')
  }
  num.value = ''
  num.focus()
}

function finalizar() {
  if (valores.legth == 0){
    window.alert('Adicione valores antes de finalizar!')
  } else {
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for (let pos in valores){
      soma += valores[pos]
      if (valores[pos] > maior)
        maior = valores[pos]
      if (valores[pos] < menor)
        menor = valores[pos]
    }
    media = soma / tot
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.`
    res.innerHTML += `<p>A média dos valores digitados é ${media}.`
  }
}