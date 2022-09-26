import { getCustomRepository } from "typeorm";
import BrindeCupom from "../typeorm/entitites/brindeCupom";
import BrindeCupomRepository from "../typeorm/repositories/brindeCupomRepository";

class ListBrindeCupomService{

    public async execute(): Promise<BrindeCupom[]>{
        let brindeCupomRepository = getCustomRepository(BrindeCupomRepository)

        let brindeCupom = await brindeCupomRepository.find();
        return brindeCupom
    }
}
export default ListBrindeCupomService