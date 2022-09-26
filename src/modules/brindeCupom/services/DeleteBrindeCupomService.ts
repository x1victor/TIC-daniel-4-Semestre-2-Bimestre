import { getCustomRepository } from "typeorm"
import AppError from "../../../errors/AppError"
import BrindeCupomRepository from "../typeorm/repositories/brindeCupomRepository"

class DeleBrindeCupomService{
    public async execute(idBrindeCupom: string){
        const brindeCupomRepository = getCustomRepository(BrindeCupomRepository)
        
        const brindeCupomExist = await brindeCupomRepository.findOne(idBrindeCupom)
        if(!brindeCupomExist){
            throw new AppError('Brinde / cupom não existente', 400)
        }
        await brindeCupomRepository.remove(brindeCupomExist)
    }
}

export default DeleBrindeCupomService