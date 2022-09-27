import { Request, Response } from "express";
import CreateClientesService from "../services/CreateClientesService";
import DeleteClientesService from "../services/DeleteClientesService";
import ListClientesService from "../services/ListClientesService";
import ShowClientesService from "../services/ShowClientesService";
import UpdateClientesService from "../services/UpdateClientesService";

class ClientesController{
    public async create(request: Request, response: Response ): Promise<Response>{
        let{cpf,nome, senha, cep, sexo, email, estado, cidade, telefone,emprego,endereco,data_nascimento}= request.body

        const object = new CreateClientesService()
        const newClientes = await object.execute({cpf,nome, senha, cep, sexo, email, estado, cidade, telefone,emprego,endereco,data_nascimento})

        return response.json(newClientes)
    }

    public async list(request: Request, response: Response): Promise<Response> {
        let listService = new ListClientesService()
        let clientes = await listService.execute()
        return response.json(clientes)
    }

    public async show(request: Request, response: Response): Promise<Response> {

        const {cpf} = request.params
        const showClientesService = new ShowClientesService()
        const clientes = await showClientesService.execute({cpf})
        return response.json(clientes)
    }

    public async delete(request: Request, response: Response): Promise<Response> {

        const{cpf} = request.params
        const deleteClientesService = new DeleteClientesService()
        await deleteClientesService.execute(cpf)
        return response.json([])
    }

    public async update(request: Request, response: Response): Promise<Response> {

        const{cpf} = request.params
        const{nome, senha, cep, sexo, email, estado, cidade, telefone,emprego,endereco,data_nascimento} = request.body
        
        const updateClientesService = new UpdateClientesService()
        const clientesUpdated = await updateClientesService.execute({cpf,nome, senha, cep, sexo, email, estado, cidade, telefone,emprego,endereco,data_nascimento})
        return response.json(clientesUpdated)
    }
}

export default ClientesController