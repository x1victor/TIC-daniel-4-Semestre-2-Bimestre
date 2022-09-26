import { getCustomRepository } from "typeorm";
import AppError from '../../../errors/AppError'
import SorteiosRepository from "../typeorm/properies/sorteiosRepository";

class DeleteSorteiosService {

    public async execute(id: string) {

        const sorteiosRepository = getCustomRepository(SorteiosRepository)
        const sorteiosExist = await sorteiosRepository.findOne(id)
        if (!sorteiosExist){
            throw new AppError('Produto não existe', 400)
        }
        await sorteiosRepository.remove(sorteiosExist)
    }   
}

export default DeleteSorteiosService