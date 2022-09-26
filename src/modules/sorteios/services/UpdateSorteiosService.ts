import { getCustomRepository } from "typeorm"
import AppError from "../../../errors/AppError"
import Sorteios from "../typeorm/entities/sorteios"
import SorteiosRepository from "../typeorm/properies/sorteiosRepository"


//cria um tipo de dado
interface IRequest {
    idSorteios: string
    nomeSorteios: string
    qtdSorteios: number
}

class UpdateSorteiosService {

    public async execute({idSorteios, nomeSorteios, qtdSorteios}: IRequest): Promise<Sorteios> {
        const sorteiosRepository = getCustomRepository(SorteiosRepository)
        // verifica se o produto existe
        const sorteiosExist = await sorteiosRepository.findOne(idSorteios)
        if (!sorteiosExist){
            // sai do método
            throw new AppError('Sorteio não existe', 400)
        }
        // verifica se o nome alterado já existe no BD
        const nomeSorteiosExist = await sorteiosRepository.findByName(nomeSorteios)
        if (nomeSorteiosExist){
            // sai do método
            throw new AppError('Nome do sorteio já existe', 400)
        }
        // vamos atualizar
        sorteiosExist.nomeSorteios = nomeSorteios
        sorteiosExist.qtdSorteios = qtdSorteios
        await sorteiosRepository.save(sorteiosExist)
        return sorteiosExist
    }
}

export default UpdateSorteiosService