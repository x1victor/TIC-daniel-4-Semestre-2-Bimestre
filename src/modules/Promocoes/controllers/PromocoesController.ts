import { Request, Response } from "express"
import CreatePromocoesService from "../services/CreatePromocoesService"
import DeletePromocoesService from "../services/DeletePromocoesService"
import ListPromocoesService from "../services/ListPromocoesService"
import ShowPromocoesService from "../services/ShowPromocoes"
import UpdatePromocoesService from "../services/UpdatePromocoes"

class PromocoesCrontroller{
    public async create(request: Request, response: Response ): Promise<Response>{
        let {name, valor} = request.body

        const object = new CreatePromocoesService()
        const newPromocoes = await object.execute({name, valor})

        return response.json(newPromocoes)
    }
    public async list(request: Request, response: Response ): Promise<Response> {
        let listService = new ListPromocoesService()
        let Promocoes = await listService.execute()
        return response.json(Promocoes)
    }
    public async show(request: Request, response: Response): Promise<Response> {
  
        const {idPromocao} = request.params
        const showPromocoesService = new ShowPromocoesService()
        const promocoes = await showPromocoesService.execute({idPromocao})
        return response.json(promocoes)
    }
    public async delete(request: Request, response: Response): Promise<Response> {

        const {idPromocao} = request.params
        const deletePromocoesService = new DeletePromocoesService()
        await deletePromocoesService.execute(idPromocao)
        return response.json([])
    }

    public async update(request: Request, response: Response): Promise<Response> {

        const {idPromocao} = request.params
        const {name, valor} = request.body
        const updatePromocoesService = new UpdatePromocoesService()
        const PromocoesUpdated = await 
            updatePromocoesService.execute({idPromocao, name, valor})
        return response.json(PromocoesUpdated)
    }
}

export default PromocoesCrontroller