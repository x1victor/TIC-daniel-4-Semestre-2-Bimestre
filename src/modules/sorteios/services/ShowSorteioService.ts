import { getCustomRepository } from "typeorm";

import AppError from '../../../errors/AppError'
import Sorteios from "../typeorm/entities/sorteios";
import SorteiosRepository from "../typeorm/properies/sorteiosRepository";

interface IRequest {
    idSorteios: string
}

class ShowSorteiosService {

    public async execute({idSorteios}: IRequest): Promise<Sorteios> {
        let sorteiosRepository = getCustomRepository(SorteiosRepository)
        let sorteios = await sorteiosRepository.findOne(idSorteios)
        if (!sorteios) {
            throw new AppError('Produto não existe')
        }
        return sorteios
    }
}

export default ShowSorteiosService