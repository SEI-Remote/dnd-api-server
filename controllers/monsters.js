import { Monster } from "../models/monster.js"

function index(req, res) {
  Monster.find({})
  .select('name index')
  .then(monsters => {
    res.json(monsters)
  })
  .catch(err => {
    res.status(500).json(err)
  })
}

function show(req, res) {
  Monster.findById(req.params.monsterId)
  .then(monster => {
    res.json(monster)
  })
  .catch(err => {
    res.status(500).json(err)
  })
}


export {
  index,
  show
}