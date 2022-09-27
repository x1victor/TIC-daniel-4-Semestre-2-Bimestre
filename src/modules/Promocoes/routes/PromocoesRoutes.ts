import { Router } from "express"
import isAuthenticated from "../../../middleware/isAuthenticated"
import PromocoesController from "../controllers/PromocoesController"

const routerPromocoes = Router()

const controllerPromocoes = new PromocoesController()


routerPromocoes.post('/', controllerPromocoes.create)

routerPromocoes.get('/', 
    isAuthenticated, 
    controllerPromocoes.list)

routerPromocoes.get('/:id', controllerPromocoes.show)

routerPromocoes.delete('/:id', controllerPromocoes.delete)

routerPromocoes.put('/:id', controllerPromocoes.update)

export default routerPromocoes