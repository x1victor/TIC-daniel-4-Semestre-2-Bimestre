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

class UpdateClientesService {
    public async execute({cpf,nome,senha,cep,sexo,email,estado,cidade,telefone,emprego,endereco,data_nascimento}:IRequest): Promise<Clientes> {
        const clientesRepository = getCustomRepository(ClientesRepository)

        const clientesExist = await clientesRepository.findOne(cpf)
        if(!clientesExist){
            throw new AppError('cliente não existe', 400)
        }

        const nomeExist = await clientesRepository.findByName(nome)
        if(nomeExist){
            throw new AppError('nome igual ao anterior',400)
        }

        clientesExist.nome = nome
        clientesExist.senha = senha
        clientesExist.cep = cep
        clientesExist.sexo= sexo
        clientesExist.email = email
        clientesExist.estado= estado
        clientesExist.cidade = cidade
        clientesExist.telefone = telefone
        clientesExist.emprego = emprego
        clientesExist.endereco = endereco
        clientesExist.data_nascimento = data_nascimento
        await clientesRepository.save(clientesExist)
        return clientesExist

    }
}

export default UpdateClientesService