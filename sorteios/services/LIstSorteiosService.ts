import { getCustomRepository } from "typeorm";
import Sorteios from "../typeorm/entities/sorteios";
import SorteiosRepository from "../typeorm/properies/sorteiosRepository";



class ListSorteiosService {

    public async execute(): Promise<Sorteios[]> {
        let sorteiosRepository = getCustomRepository(SorteiosRepository)
        let sorteios = await sorteiosRepository.find();
        return sorteios
    }
}

export default ListSorteiosService