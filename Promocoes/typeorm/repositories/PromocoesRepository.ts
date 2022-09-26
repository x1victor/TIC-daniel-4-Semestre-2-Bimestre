import { EntityRepository, Repository } from "typeorm";
import Promocoes from "../entities/Promocoes";

@EntityRepository(Promocoes)
class PromocoesRepository extends Repository<Promocoes>{
    
    public async findByName(name: string): Promise<Promocoes | undefined>{
        let promocoes = await this.findOne({
            where: {
                name
            }
        })
        return promocoes
    }
}
export default PromocoesRepository;
