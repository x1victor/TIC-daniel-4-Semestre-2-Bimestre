import { getCustomRepository } from "typeorm";
import AppError from "../../../errors/AppError";
import Clientes from "../typeorm/entities/Clientes";
import ClientesRepository from "../typeorm/repositories/ClientesRepository";

interface IRequest{
    cpf: string;
    nome: string;
    senha: string;
    cep: string;
    sexo: boolean;
    email: string;
    estado:string;
    cidade:string;
    telefone: string;
    emprego: string;
    endereco: string;
    data_nascimento: Date;
}
    class CreateClientesService{
    public async execute({cpf,nome,senha,cep,email,estado,cidade,telefone,emprego,endereco,data_nascimento}: IRequest): Promise<Clientes> {

        const clientesRepository = getCustomRepository(ClientesRepository)

        const clientesExist = await clientesRepository.findByName(cpf);
        if(clientesExist){
            throw new AppError('ja existe um cliente com esse CPF')
        }

        const novo = clientesRepository.create({
            cpf,nome,senha,cep,email,estado,cidade,telefone,emprego,endereco,data_nascimento
        })

        await clientesRepository.save(novo)
        return novo
    }
}

export default CreateClientesService