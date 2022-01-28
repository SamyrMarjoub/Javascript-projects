const nome = document.querySelector('#input-nome')
const ul = document.querySelector('.ul1')
const ul2 = document.querySelector('.ul2')
const ul3 = document.querySelector('.ul3')
const ul4 = document.querySelector('.ul4')
const ul45 = document.querySelector('.ul4-5')
const ul5 = document.querySelector('.ul5')
const ul55 = document.querySelector('.ul5-5')
const ul56 = document.querySelector('.ul5-6')
const ul6 = document.querySelector('.ul6')
const ul66 = document.querySelector('.ul6-6')
const sobrenome = document.querySelector('#input-sobrenome')
const cpf = document.querySelector('#input-cpf')
const senha = document.querySelector('#input-senha')
const usuario = document.querySelector('#input-usuario')
const confirmarsenha = document.querySelector('#input-senhaconfirmar')
const butao = document.querySelector('#butao')

function ChecarCondicao() {
    if (nome.value.length === 0) {
        ul.style.display = 'block'
    } else {
        ul.style.display = 'none'
    }
    if (sobrenome.value.length === 0) {
        ul2.style.display = 'block'
    } else {
        ul2.style.display = 'none'
    }
    if (!validacaocpf()) {
        ul3.style.display = 'block'
    } else {
        ul3.style.display = 'none'
    }
    if (usuario.value.length < 6) {
        ul4.style.display = 'block'
    } else {
        ul4.style.display = 'none'
    }
    if (usuario.value.length === 0) {
        ul45.style.display = 'block'
    } else {
        ul45.style.display = 'none'
    }
    if (senha.value.length < 6) {
        ul55.style.display = 'block'
    } else {
        ul55.style.display = 'none'
    }
    if (senha.value.length === 0) {
        ul5.style.display = 'block'
    } else {
        ul5.style.display = 'none'
    }
    if (senha.value !== confirmarsenha.value) {
        ul56.style.display = 'block'
    } else {
        ul56.style.display = 'none'
    }
    if (confirmarsenha.value !== senha.value) {
        ul66.style.display = 'block'
    } else {
        ul66.style.display = 'none'
    }
    if (confirmarsenha.value.length === 0) {
        ul6.style.display = 'block'
    } else {
        ul6.style.display = 'none'
    }
}
//function sequencia() {
//return cpf.charAt(0).repeat(11) === cpf;
//}
function operacao1() {
    const arraycpf = Array.from(cpf.value).slice(0, -2)
    let contador = arraycpf.length + 1
    let total = 0

    for (const numeros of arraycpf) {
        total += contador * Number(numeros)
        contador--
    }
    const digito1 = 11 - (total % 11);
    if (digito1 == 10 || digito1 == 11) return String('0')
    else {
        return String(digito1)
    }
}
function operacao2() {
    const arraycpf2 = Array.from(cpf.value).slice(0, -1)
    let contador2 = arraycpf2.length + 1
    let total2 = 0
    for (const numeros2 of arraycpf2) {
        total2 += contador2 * Number(numeros2)
        contador2--
    }
    const digito2 = 11 - (total2 % 11);

    if (digito2 == 10 || digito2 == 11) return String('0')
    else {
        return String(digito2)
    }
}
function validacaocpf() {
    if (cpf.value[9] === operacao1() && cpf.value[10] === operacao2()) return true
    if (cpf.value.length !== 11) return false
    console.log(operacao1())
}
function iniciar() {
    ChecarCondicao();
}
butao.addEventListener('click', function (e) {
    e.preventDefault()
    iniciar();
})
document.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        iniciar()
        e.preventDefault();
    }
})
