import { getCustomRepository } from "typeorm";
import AppError from "../../../errors/AppError";
import Sorteios from "../typeorm/entities/sorteios";
import SorteiosRepository from "../typeorm/properies/sorteiosRepository";

interface IRequest {
    nomeSorteios: string
    qtdSorteios: number
    
}

class CreateSorteiosService {
    public async execute({nomeSorteios,qtdSorteios}: IRequest): Promise<Sorteios> {

        const sorteiosRepository = getCustomRepository(SorteiosRepository)

        const sorteiosExit = await sorteiosRepository.findByName(nomeSorteios)
        if (sorteiosExit){
            throw new AppError('Já existe um sorteio com o mesmo nome')
        }

        const novo = sorteiosRepository.create({
            nomeSorteios, qtdSorteios
        })

        await sorteiosRepository.save(novo)
        return novo
    }
}

export default CreateSorteiosService