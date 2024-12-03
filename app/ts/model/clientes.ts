class Clientes{

    private clientes: Array<Cliente>;

    constructor(){
        this.clientes = new Array<Cliente>();
        const cliente1 = new Cliente("Bruno Vinicius", "12345678911");
        const cliente2 = new Cliente("Caio Batista", "98765432199");
        this.clientes.push(cliente1,cliente2);
    }

    inserir(cliente: Cliente): void{
        this.clientes.push(cliente)
    }

    remover(cpf: string): void{
        const clienteRemover = this.pesquisar(cpf);
        if (clienteRemover){
            const indiceCliente = this.clientes.indexOf(clienteRemover);
            if(indiceCliente> -1){
                this.clientes.splice(indiceCliente, 1);
            }
        }
    }

    pesquisar(cpf:string): Cliente{
        const cli = this.clientes.find(
            conta => conta.cpf === cpf
        );
       if (cli){
            return cli
       } else{
        throw new Error('Cliente não cadastrado.')
       }
    }

    listar(): Array<Cliente>{
        return this.clientes;
    }
}