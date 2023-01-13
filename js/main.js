const equipamentos = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
controle.forEach((elemento)=>{
    elemento.addEventListener('click',(evento)=>{
        atualizaEstatistica(evento.target.dataset.peca, evento.target.dataset.controle, evento.target.parentNode);
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        evento.preventDefault();//impede que a pagine recarregue
    })
})

function manipulaDados(operacao, controle){
    const peca = controle.querySelector("[data-contador]");
    if(operacao==="-"){
        if(confereQuantidade(peca.value)){
            peca.value= parseInt(peca.value) - 1;
        }
    }else{
        peca.value= parseInt(peca.value) + 1;
    }
}

function atualizaEstatistica(equipamento, operacao, controle){
    const peca = controle.querySelector("[data-contador]");
    if(operacao==="-"){
        if(confereQuantidade(peca.value)) {
            estatisticas.forEach((elemento) => {
                elemento.textContent = parseInt(elemento.textContent) - equipamentos[equipamento][elemento.dataset.estatistica]
            })
        }
    }else{
        estatisticas.forEach((elemento)=>{
            elemento.textContent = parseInt(elemento.textContent) + equipamentos[equipamento][elemento.dataset.estatistica]
        })
    }
}

function confereQuantidade(valor){
    if(valor>0){
        return true;
    }else{
        return false;
    }
}

