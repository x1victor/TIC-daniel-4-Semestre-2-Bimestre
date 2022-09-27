import { getCustomRepository } from "typeorm";
import Promocoes from "../typeorm/entities/Promocoes";
import PromocoesRepository from "../typeorm/repositories/PromocoesRepository";
import AppError from '../../../errors/AppError'
interface IRequest {
    name: string;
    valor: number;
}

class CreatePromocoesService{
    public async execute({name, valor}:IRequest): Promise<Promocoes>{

        const promocoesRepository = getCustomRepository(PromocoesRepository)

        const promocoesExist = await promocoesRepository.findByName(name);
        if (promocoesExist){
            throw new AppError('Já existe um produto com este nome')
        }

        const novo = promocoesRepository.create({
            name,valor
        })

        await promocoesRepository.save(novo)
        return novo
    }
}
export default CreatePromocoesService