const mongoose=require('mongoose')
const Schema=mongoose.Schema;

const TreesSchema=new Schema(
    {
        school: {
            type: Schema.Types.ObjectId,
            ref: "School",
          },
        name:{
            type:String,
            required: [true, "Please enter name"],
        },
        type: {
            type: String,
            required: [true, "Please enter type"],
        },
        latitude: {
            type: String,
            required: [true, "Please enter latitude"],
        },
        longitude:{
            type:String,
            required: [true, "Please enter longitude"],
        },
        no_of_trees:{
            type:Number,
            required: [true, "Please enter number of trees"],
        },
        
    },
    { 
        toJSON:{ 
            virtuals:true
        },
        toObject:{ 
            virtuals:true
        },
        timestamps: true
     }
);

const Tree =  mongoose.model('Trees', TreesSchema);

module.exports = Tree;