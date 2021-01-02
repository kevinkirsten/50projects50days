const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('show-nav'))
close.addEventListener('click', () => container.classList.remove('show-nav'))

if(embaixo == 'impressora')
{
    pegarDe(baixo)
    darPara(cima)
}
else if(embaixo == 'triturador')
{
    if(meuItem != 'vazio')
    {
        pegar(esquerda)
        pegar(direita)
        darPara(baixo)
    }
}
else if(embaixo == 'buraco')
{
    if(itemEsquerda >= 50)
    {
        pegarDe(esquerda)
    }
    else
    }
    {
        pegarDe(direita)
    }
}
else
{
    pegarDe(baixo)
}

