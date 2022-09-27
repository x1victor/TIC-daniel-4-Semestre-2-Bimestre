import { EntityRepository, Repository } from "typeorm";
import Clientes from "../entities/Clientes";

@EntityRepository(Clientes)
class ClientesRepository extends Repository<Clientes> {
    public async findByName(cpf: string): Promise<Clientes | undefined> {
        let clientes = await this.findOne({
            where: { 
                cpf
            }
        })
        return clientes
    }
}

export default ClientesRepository