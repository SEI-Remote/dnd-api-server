import { Router } from 'express'
import * as monstersCtrl from '../controllers/monsters.js'

const router = Router()

router.get('/', monstersCtrl.index)
router.get('/:monsterId', monstersCtrl.show)

export { router }
