import mongoose from 'mongoose'

const Schema = mongoose.Schema

const spellSchema = new Schema({
  index: String,
  name: String,
  description: String,
  higherLevel: String,
  range: String,
  components: [String],
  material: String,
  ritual: Boolean,
  duration: String,
  concentration: Boolean,
  castingTime: String,
  level: Number,
  attackType: String,
  damageType: String,
  school: String,
  classes: [String],
  subclasses: [String],
  areaOfEffectType: String,
  areaOfEffectSize: Number,
  dcType: String,
  dcSuccess: String,
  dcDescription: String,
}, {
  timestamps: true
})

const Spell = mongoose.model('Spell', spellSchema)

export {
  Spell
}
