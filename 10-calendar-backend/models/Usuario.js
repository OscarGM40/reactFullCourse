
const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  name:{type:String, required:true},
  email:{type:String, required:true},
  password:{type:String, required:true},
},{
  timestamps:true,
  collection:'usuarios',
  toJSON:{
    transform:(doc, ret) => {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
      delete ret.password;
    }
  }
});

UsuarioSchema.set('versionKey', 'version');

module.exports = mongoose.model('Usuario',UsuarioSchema);