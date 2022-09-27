import { getCustomRepository } from "typeorm";
import Clientes from "../typeorm/entities/Clientes";
import ClientesRepository from "../typeorm/repositories/ClientesRepository";

class ListClientesService {

    public async execute(): Promise<Clientes[]> {
        let clientesRepository = getCustomRepository(ClientesRepository)
        let clientes = await clientesRepository.find();
        return clientes
    }
}

export default ListClientesService