import { Router } from "express"
import isAuthenticated from "../../../middleware/isAuthenticated"
import BrindeCupomController from "../controllers/brindeCupomController"

const routerBrindeCupom = Router()
// cria um objeto controller
const controllerBrindeCupom = new BrindeCupomController()

// está criada a rota para inserir um produto no banco de dados
routerBrindeCupom.post('/', controllerBrindeCupom.create)

routerBrindeCupom.get('/', 
    isAuthenticated, 
    controllerBrindeCupom.list)

routerBrindeCupom.get('/:id', controllerBrindeCupom.show)

routerBrindeCupom.delete('/:id', controllerBrindeCupom.delete)

routerBrindeCupom.put('/:id', controllerBrindeCupom.update)

export default routerBrindeCupom