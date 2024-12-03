class ClienteEspecial extends Cliente {
    
   private dependentes: Array<Cliente>;
   constructor(nome: string, cpf: string, conta: Conta = null) {
       super(nome, cpf, conta);
       this.dependentes = new Array<Cliente>();
   }
   inserirDependente(dependente: Cliente): void {
       this.dependentes.push(dependente);
   }
   removerDependente(cpf: string): void {
       const indiceDependente = this.dependentes.findIndex(
           dependente => dependente.cpf === cpf
       );
       if (indiceDependente > -1) {
           this.dependentes.splice(indiceDependente, 1);
       }
   }
   listarDependentes(): void {
       this.dependentes.forEach(dependente => {
           console.log(dependente.toString());
       });
   }
   toString(): string {
       return super.toString() + `, Dependentes: ${this.dependentes.length}`;
   }
}