import { getCustomRepository } from "typeorm"
import AppError from "../../../errors/AppError"
import BrindeCupom from "../typeorm/entitites/brindeCupom"
import BrindeCupomRepository from "../typeorm/repositories/brindeCupomRepository"

interface IRequest{
    idBrindeCupom: string
    nomeBrinde: string
    qtdpont: number
}

class UpdateBrindeCupomService{
    public async execute({idBrindeCupom,nomeBrinde, qtdpont}: IRequest): Promise<BrindeCupom>{
        const brindeCupomRepository = getCustomRepository(BrindeCupomRepository)

        const brindeCupomExist = await brindeCupomRepository.findOne(idBrindeCupom)
        if(!brindeCupomExist){
            throw new AppError('Brinde / Cupom não exsitente')
        }

        const nomeBrindeExiste = await brindeCupomRepository.findOne(nomeBrinde)
        if(nomeBrindeExiste){
            throw new AppError(' Nome do Brinde / cupom já existente')
        }

        brindeCupomExist.nomeBrinde = nomeBrinde
        brindeCupomExist.qtdpont = qtdpont
        await brindeCupomRepository.save(brindeCupomExist)
        return brindeCupomExist

    }
}

export default UpdateBrindeCupomService