import { Router } from "express"
import isAuthenticated from "../../../middleware/isAuthenticated"
import SorteiosController from "../controller/SorteiosController"


const SorteiosRouter = Router()

const controllerSorteios = new SorteiosController()


SorteiosRouter.post('/', controllerSorteios.create)

SorteiosRouter.get('/', 
    isAuthenticated, 
    controllerSorteios.list)

SorteiosRouter.get('/:id', controllerSorteios.show)

SorteiosRouter.delete('/:id', controllerSorteios.delete)

SorteiosRouter.put('/:id', controllerSorteios.update)

export default SorteiosRouter