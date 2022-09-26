import { getCustomRepository } from "typeorm"
import Promocoes from "../typeorm/entities/Promocoes"
import PromocoesRepository from "../typeorm/repositories/PromocoesRepository"

class ListPromocoesService{
    public async execute(): Promise<Promocoes[]>{
        let promocoesRepository = getCustomRepository(PromocoesRepository)
        let promocoes = await promocoesRepository.find()
        return promocoes
    }
}

export default ListPromocoesService