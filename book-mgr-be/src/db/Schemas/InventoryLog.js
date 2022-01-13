const mongoose = require('mongoose')
const {getMeta,preSave} = require('./helpers')

const InventoryLogSchema = new mongoose.Schema({
      type:String,
      num:Number,
      user:String, 

    meta: getMeta(),//元信息，创建的事件和修改的事件   
})

InventoryLogSchema.pre('save',preSave);

mongoose.model('InventoryLog',InventoryLogSchema)//第一个参数为名字，第二个参数传递给它的参数 