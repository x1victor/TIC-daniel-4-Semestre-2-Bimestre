import { Request, Response } from "express";
import CreateBrindeCupomService from "../services/CreateBrindeCupomService";
import DeleteBrindeCupomService from "../services/DeleteBrindeCupomService";
import ListBrindeCupomService from "../services/ListPBrindeCupomService";
import ShowBrindeCupomService from "../services/ShowBrindeCupomService";
import UpdateBrindeCupomService from "../services/UpdateBrindeCupomService";

class BrindeCupomController{

    public async create(request: Request, response: Response): Promise<Response> {
        let {nomeBrinde, qtdpont,} = request.body

        const object = new
        CreateBrindeCupomService()

        const newBrindeCupom = await object.execute({nomeBrinde, qtdpont})
        return response.json(newBrindeCupom)
    }
    public async list(request: Request, response: Response): Promise<Response> {
        let listService = new
        ListBrindeCupomService()
        let brindeCupom = await listService.execute()
        return response.json(brindeCupom)
    }
    public async show(request: Request, response: Response): Promise<Response> {
        const {idBrindeCupom} = request.params
        const showBrindeCupomService = new ShowBrindeCupomService()
        const brindeCupom = await showBrindeCupomService.execute({idBrindeCupom})

    }

    public async delete(request: Request, response: Response): Promise<Response> {
        // recupera id do produto
        const {idBrindeCupom} = request.params
        const deleteBrindeCupomService = new DeleteBrindeCupomService()
        await deleteBrindeCupomService.execute(idBrindeCupom)
        return response.json([])
    }

    public async update(request: Request, response: Response): Promise<Response> {
        // recupera id, name, price, quantity do produto
        const {idBrindeCupom} = request.params
        const {nomeBrinde,qtdpont} = request.body
        const updateBrindeCupomService = new UpdateBrindeCupomService()
        const brindeCupomUpdated = await 
            updateBrindeCupomService.execute({idBrindeCupom,nomeBrinde, qtdpont})
        return response.json(brindeCupomUpdated)
    }
}

export default BrindeCupomController