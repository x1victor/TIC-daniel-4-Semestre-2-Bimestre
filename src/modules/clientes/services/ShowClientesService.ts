import { getCustomRepository } from "typeorm"
import AppError from "../../../errors/AppError"
import Clientes from "../typeorm/entities/Clientes"
import ClientesRepository from "../typeorm/repositories/ClientesRepository"

interface IRequest{
    cpf: string
}

class ShowClientesServices{
    public async execute({cpf}: IRequest): Promise<Clientes> {
        let clientesRepository = getCustomRepository(ClientesRepository)

        let clientes = await clientesRepository.findOne(cpf)
        if(!clientes) {
            throw new AppError('Cliente inexistente')
        }
        return clientes
    }
}

export default ShowClientesServices