import { Router } from "express"
import isAuthenticated from "../../../middleware/isAuthenticated"
import PromocoesController from "../controllers/PromocoesController"

const routerPromocoes = Router()
// cria um objeto controller
const controllerPromocoes = new PromocoesController()

// está criada a rota para inserir um produto no banco de dados
routerPromocoes.post('/', controllerPromocoes.create)

routerPromocoes.get('/', 
    isAuthenticated, 
    controllerPromocoes.list)

routerPromocoes.get('/:id', controllerPromocoes.show)

routerPromocoes.delete('/:id', controllerPromocoes.delete)

routerPromocoes.put('/:id', controllerPromocoes.update)

export default routerPromocoes