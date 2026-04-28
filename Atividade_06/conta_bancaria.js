class contabancaria {
    constructor (titular, saldo) {
        this.titular = titular;
        this.saldo = saldo; 
    }

    verSaldo () {
        console.log (` Olá ${this.titular}, seu saldo atual é R$ ${this.saldo}`)
    }

    sacar(valor) {
        this.saldo -=valor;
    }
}

let contaDaLuiza = new contabancaria("Luiza", 16000)
contaDaLuiza.verSaldo()
contaDaLuiza.sacar(100)
contaDaLuiza.verSaldo()
