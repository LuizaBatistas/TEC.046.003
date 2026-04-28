class Animal {
    constructor (apelido) {
        this.nome = apelido
    }
    falar(som) {
        console.log (som);
    }
}

    class Gato extends Animal {
        ronronar() {
        console.log (`O ${this.nome} está ronronando`)
    }
}

    class Cachorro extends Animal {
        abanarRabo() {
            console.log(`O ${this.nome} está feliz`)
        }
    }

    let Mia = new Gato ("Mia");
    let Junio = new Cachorro ("Junio");
    
    Mia.falar ("Miau!");
    Mia.ronronar();
    Junio.falar ("Au Au!");
    Junio.abanarRabo();

    class Tubarão extends Animal{
        cresceDentes() {
            console.log (`O ${this.nome} tem novos dentes`)
        }
    }

    let Kiki = new Tubarão ("Kiki");
    Kiki.falar ("Click Click");
    Kiki.cresceDentes();

    
    