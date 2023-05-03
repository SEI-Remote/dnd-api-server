import { Spell } from "../models/spell.js"

function index(req, res) {
  Spell.find({})
  .select('name index')
  .then(spells => {
    res.json(spells)
  })
  .catch(err => {
    res.status(500).json(err)
  })
}

function show(req, res) {
  Spell.findById(req.params.spellId)
  .then(spell => {
    res.json(spell)
  })
  .catch(err => {
    res.status(500).json(err)
  })
}


export {
  index,
  show
}