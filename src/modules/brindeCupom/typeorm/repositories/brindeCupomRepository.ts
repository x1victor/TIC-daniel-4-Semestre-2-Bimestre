import { EntityRepository, Repository } from "typeorm";
import BrindeCupom from "../entitites/brindeCupom";


@EntityRepository(BrindeCupom)
class BrindeCupomRepository extends Repository <BrindeCupom>{
    public async findByName(nomeBrinde: string): Promise<BrindeCupom | undefined> {
        let brindecupom = await this.findOne({
            where:{
                nomeBrinde
            }
        })
        return brindecupom
    }
}

export default BrindeCupomRepository