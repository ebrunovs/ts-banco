class ClienteEspecial extends Cliente {
    constructor(nome, cpf, conta = null) {
        super(nome, cpf, conta);
        this.dependentes = new Array();
    }
    inserirDependente(dependente) {
        this.dependentes.push(dependente);
    }
    removerDependente(cpf) {
        const indiceDependente = this.dependentes.findIndex(dependente => dependente.cpf === cpf);
        if (indiceDependente > -1) {
            this.dependentes.splice(indiceDependente, 1);
        }
    }
    listarDependentes() {
        this.dependentes.forEach(dependente => {
            console.log(dependente.toString());
        });
    }
    toString() {
        return super.toString() + `, Dependentes: ${this.dependentes.length}`;
    }
}
