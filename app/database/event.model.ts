import { Document, Schema, model } from 'mongoose';

export interface IEvent extends Document{
    title : string;
    slug : string;
    description : string;
    overview : string;
    image : string;
    venue : string;
    location : string;
    date : string;
    time : string;
    mode : string;
    audience : string;
    agenda : string[];
    organizer : string;
    tags : string[];
    createdAt : Date;
    updatedAt : Date;
}
const EventSchema = new Schema<IEvent>(
    {
        title:{
            type:String,
            required:[true,'Title is required'],
            trim :true,
            maxLength:[100,'Title cannot exceed 100 characters']
        },
        slug:{
            type:String,
            required:[true,'Slug is required'],
            unique:true,
            lowercase:true,
            trim:true,
      
        },
        description:{
            type:String,
            required:[true,'Description is required'],
            trim:true,
            maxLength:[1000,'Description cannot exceed 1000 characters']
        },
        overview:{
            type:String,
            required:[true,'Overview is required'],
            trim:true,
            maxLength:[500,'Overview cannot exceed 500 characters']
        },
        image:{
            type:String,
            required:[true,'Image URL is required'],
            trim:true
        },
        venue:{
            type:String,
            required:[true,'Venue  is required'],
            trim:true
        },
        location:{
            type:String,
            required:[true,'Location is required'],
            trim:true
        },
        date:{
            type:String,
            required:[true,'Date is required'],
        },
        time:{
            type:String,
            required:[true,'Time is required'],
        },
        mode:{
            type:String,
            required:[true,'Mode is required'],
            enum:{
                values:['online','offline','hybrid'],
                message:'Mode must be either online, offline, or hybrid'
            }
        },
        audience:{
            type:String,
            required:[true,'Audience is required'],
            trim:true
        },
        agenda:{
            type:[String],
            required:[true,'Agenda is required'],
            validate:{
                validator:(v: string[]) => Array.isArray(v) && v.length > 0,
                message:'At least one agenda item is required'
            }
        },
        organizer:{
            type:String,
            required:[true,'Organizer is required'],
            trim:true
        },
        tags:{
            type:[String],
            required:[true,'Tags are required'],
            validate:{
                validator:(v: string[]) => Array.isArray(v) && v.length > 0,
                message:'At least one tag is required'
            },
        },
    },
    {
        timestamps:true,
    }
);

export default model<IEvent>('Event', EventSchema);