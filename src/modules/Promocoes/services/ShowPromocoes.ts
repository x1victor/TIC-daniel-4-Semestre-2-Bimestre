import { getCustomRepository } from "typeorm";
import AppError from "../../../errors/AppError";
import Promocoes from "../typeorm/entities/Promocoes";
import PromocoesRepository from "../typeorm/repositories/PromocoesRepository";

interface IRequest{
    idPromocao: string
}

class ShowPromocoesService{
    public async execute({idPromocao}: IRequest): Promise<Promocoes> {

        let promocoesRepository = getCustomRepository(PromocoesRepository)

        let promocoes = await promocoesRepository.findOne(idPromocao)
        
        if(!promocoes){
            throw new AppError('Promoção não existe')
        }
        return promocoes
    }
}
export default ShowPromocoesService
