import { getCustomRepository } from "typeorm";
import AppError from "../../../errors/AppError";
import PromocoesRepository from "../typeorm/repositories/PromocoesRepository";

class DeletePromocoesService {
    public async execute(idPromocao: string){
        const promocoesRepository = getCustomRepository(PromocoesRepository)
        
        const promocoesExists = await promocoesRepository.findOne(idPromocao)
        if(!promocoesExists){
            throw new AppError('Produto não existe', 400)
        }
        await promocoesRepository.remove(promocoesExists)
    }

   
}
export default DeletePromocoesService