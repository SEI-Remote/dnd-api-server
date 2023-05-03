import 'dotenv/config.js'
import express from 'express'
import logger from 'morgan'
import cors from 'cors'

import './config/database.js'

import { router as spellsRouter } from './routes/spells.js'
import { router as monstersRouter } from './routes/monsters.js'

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/spells', spellsRouter)
app.use('/api/monsters', monstersRouter)

app.use(function (req, res, next) {
  res.status(404).json({ err: 'Not found' })
})

app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({ err: err.message })
})

export { app }
