const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slugify = require('slugify');


const CategorySchema = new Schema({
 name: { type: String, uniqe: true,required:true },
 slug: {type: String, unique:true}

})

CategorySchema.pre('validate',function(next){
    this.slug = slugify(this.name, {
        lower: true,
        strict : true
    });
    next();
})

const MyCategoryModel = mongoose.model('Category', CategorySchema);
module.exports = MyCategoryModel;