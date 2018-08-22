let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Moon'

let schema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: 'No description'
    },
    galaxyId: {
        type: ObjectId,
        ref: 'Galaxy',
        required: true
      }
      
})
module.exports = mongoose.model(schemaName, schema)