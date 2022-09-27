import { Router } from "express"
import isAuthenticated from "../../../middleware/isAuthenticated"
import ClientesController from "../controllers/ClientesController"

const ClientesRoutes = Router()
// cria um objeto controller
const controllerProduct = new ClientesController()

// está criada a rota para inserir um produto no banco de dados
ClientesRoutes.post('/', controllerProduct.create)

ClientesRoutes.get('/', 
    isAuthenticated, 
    controllerProduct.list)

ClientesRoutes.get('/:id', controllerProduct.show)

ClientesRoutes.delete('/:id', controllerProduct.delete)

ClientesRoutes.put('/:id', controllerProduct.update)

export default ClientesRoutes