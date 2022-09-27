import { getCustomRepository } from "typeorm";
import AppError from "../../../errors/AppError";
import BrindeCupom from "../typeorm/entitites/brindeCupom";
import BrindeCupomRepository from "../typeorm/repositories/brindeCupomRepository";

interface IRequest{
    nomeBrinde: string;
    qtdpont: number;
}

class CreateBrindeCupomService {
    public async execute({nomeBrinde,qtdpont}: IRequest): Promise<BrindeCupom> {

        const brindeCupomRepository = getCustomRepository(BrindeCupomRepository)

        const brindeCupomExist = await brindeCupomRepository.findByName(nomeBrinde);

        if(brindeCupomExist){
            throw new AppError('Brinde / Cupom já existente')
        }

        const novo = brindeCupomRepository.create({
            nomeBrinde, qtdpont
        })

        await brindeCupomRepository.save(novo)
        return novo
    }
}

export default CreateBrindeCupomService