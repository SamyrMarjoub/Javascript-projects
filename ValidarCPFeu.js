class ValidarCPF {
    constructor(cpf) {
        Object.defineProperty(this, 'cpflimpo', {
            enumerable: true,
            configurable: false,
            writable: false,
            value: cpf.replace(/\D+/g, '')
        })
    }
    metodovalidar() {
        if (typeof this.cpflimpo !== 'string') return false
        if (this.cpflimpo.length !== 11) return false
        if (this.sequencia()) return false
        const condicao = this.Condicao()
        if (condicao == true) return true
    }
    sequencia() {
        return this.cpflimpo.charAt(0).repeat(11) === this.cpflimpo;
    }
    Conta() {
        const arraycpf = Array.from(this.cpflimpo).slice(0, -2)
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
    Conta2() {
        const arraycpf2 = Array.from(this.cpflimpo).slice(0, -1)
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
    Condicao() {
        if (this.cpflimpo[9] === this.Conta() && this.cpflimpo[10] === this.Conta2()) return true;
    }
}
let cpf = new ValidarCPF('448.256.260-25')
if (cpf.metodovalidar()) {
    console.log('CPF valido')
} else {
    console.log('cpf invalido')
}
//Código simples que escrevi agora enquanto estou aprendendo classes