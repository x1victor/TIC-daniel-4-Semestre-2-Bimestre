import { getCustomRepository } from "typeorm"
import AppError from "../../../errors/AppError"
import Promocoes from "../typeorm/entities/Promocoes"
import PromocoesRepository from "../typeorm/repositories/PromocoesRepository"

interface IRequest {
    idPromocao: string
    name: string
    valor: number
    
}

class UpdatePromocoesService{
    public async execute({idPromocao,name,valor}: IRequest): Promise<Promocoes>{
        const promocoesRepository = getCustomRepository(PromocoesRepository)

        const promocoesExist = await promocoesRepository.findOne(idPromocao)
        if(!promocoesExist){
            throw new AppError('promoção inexistente')
        }

        const nameExist = await promocoesRepository.findByName(name)
        if(nameExist){
            throw new AppError('nome já está em uso', 400)
        }

        promocoesExist.name = name
        promocoesExist.valor = valor
        await promocoesRepository.save(promocoesExist)
        return promocoesExist
    }
}

export default UpdatePromocoesService