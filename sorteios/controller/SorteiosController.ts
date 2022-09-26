import { Request, Response } from "express"
import CreateSorteiosService from "../services/CreateSorteiosService"
import DeleteSorteiosService from "../services/DeleteSorteiosService"
import ListSorteiosService from "../services/LIstSorteiosService"
import ShowSorteiosService from "../services/ShowSorteioService"
import UpdateSorteiosService from "../services/UpdateSorteiosService"


class SorteiosController{
    public async create(request: Request, response: Response ): Promise<Response>{

        let {nomeSorteios, qtdSorteios} = request.body

        const object = new CreateSorteiosService()
        const newSorteios = await object.execute({nomeSorteios, qtdSorteios})
        
        return response.json(newSorteios)
    }

    public async list(request: Request, response: Response ): Promise<Response> {
        let listService = new ListSorteiosService()
        let sorteios = await listService.execute()
        return response.json(sorteios)
    }
    public async show(request: Request, response: Response): Promise<Response> {

        const {idSorteios} = request.params
        const showSorteiosService = new ShowSorteiosService()
        const sorteios = await showSorteiosService.execute({idSorteios})
        return response.json(sorteios) 

    }

    public async delete(request: Request, response: Response): Promise<Response> {
 
        const {idSorteios} = request.params
        const deleteSorteiosService = new DeleteSorteiosService()
        await deleteSorteiosService.execute(idSorteios)
        return response.json([])
    }

    public async update(request: Request, response: Response): Promise<Response> {
     
        const {idSorteios} = request.params
        const {nomeSorteios, qtdSorteios} = request.body
        const updateSorteiosService = new UpdateSorteiosService()
        const sorteiosUpdated = await 
            updateSorteiosService.execute({idSorteios,nomeSorteios, qtdSorteios})
        return response.json(sorteiosUpdated)
    }


}

export default SorteiosController