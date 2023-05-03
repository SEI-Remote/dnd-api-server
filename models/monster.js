import mongoose from 'mongoose'

const Schema = mongoose.Schema

const monsterSchema = new Schema({
  index: String,
  name: String,
  description: String,
  charisma: Number,
  constitution: Number,
  dexterity: Number,
  intelligence: Number,
  strength: Number,
  wisdom: Number,
  image: String,
  size: String,
  type: String,
  subtype: String,
  alignments: String,
  armorClass: Array,
  hitPoints: Number,
  hitDice: String,
  hitPointsRoll: String,
  actions: Array,
  legendaryActions: Array,
  challengeRating: Number,
  conditionImmunities: Array,
  damageImmunities: Array,
  damageVulnerabilities: Array,
  forms: Array,
  languages: String,
  proficiencies: Array,
  reactions: Array,
  specialAbilities: Array,
  speed: Array,
  senses: Array,
  xp: Number,
}, {
  timestamps: true
})

const Monster = mongoose.model('Monster', monsterSchema)

export {
  Monster
}