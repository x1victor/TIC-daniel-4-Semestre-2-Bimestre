import { getCustomRepository } from "typeorm"
import AppError from "../../../errors/AppError"
import BrindeCupom from "../typeorm/entitites/brindeCupom"
import BrindeCupomRepository from "../typeorm/repositories/brindeCupomRepository"


interface IRequest {
    idBrindeCupom: string
}

class ShowBrindeCupom {
    public async execute({idBrindeCupom}: IRequest): Promise<BrindeCupom> {
        let brindeCupomRepository = getCustomRepository(BrindeCupomRepository)

        let brindeCupom = await brindeCupomRepository.findOne(idBrindeCupom)
        if(!brindeCupom){
            throw new AppError("Brinde / Cupom inesistente.")
        }
        return brindecupom
    }
}

export default ShowBrindeCupom
