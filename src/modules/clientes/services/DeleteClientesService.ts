import { getCustomRepository } from "typeorm"
import AppError from "../../../errors/AppError"
import ClientesRepository from "../typeorm/repositories/ClientesRepository"

class DeleteClientesService{

    public async execute(cpf: string) {

        const clientesRepository = getCustomRepository(ClientesRepository)
        const clientesExist = await clientesRepository.findOne(cpf)
        if (!clientesExist){
            throw new AppError('cliente não existe', 400)
        }
        await clientesRepository.remove(clientesExist)
    }   
}

export default DeleteClientesService