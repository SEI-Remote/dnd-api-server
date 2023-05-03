import { Router } from 'express'
import * as spellsCtrl from '../controllers/spells.js'

const router = Router()

router.get('/', spellsCtrl.index)
router.get('/:spellId', spellsCtrl.show)

export { router }
