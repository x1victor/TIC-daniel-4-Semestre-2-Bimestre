import { EntityRepository, Repository } from "typeorm";
import Product from "../../../products/typeorm/entities/Product";
import Sorteios from "../entities/sorteios";

@EntityRepository(Sorteios)
class SorteiosRepository extends Repository<Sorteios>{
    
    public async findByName(nomeSorteios: string): Promise<Sorteios | undefined>{
        // await - aguardar/esperar pelo resultado da busca
        let sorteios = await this.findOne({
            where: {
                nomeSorteios
            }
        })
        return sorteios
    }
}

export default SorteiosRepository