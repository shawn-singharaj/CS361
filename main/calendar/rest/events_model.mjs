// Get the mongoose object
import mongoose from 'mongoose';
import 'dotenv/config';

let connection = undefined;
let Event = undefined;

/**
 * This function connects to the MongoDB server.
 */
async function connect(){
    try{
        await mongoose.connect(process.env.MONGODB_CONNECT_STRING, {
            dbName: 'events_db'
        });
        connection = mongoose.connection;
        Event = createModel();
        console.log("Successfully connected to MongoDB using Mongoose!");
    } catch(err){
        console.log(err);
        throw Error(`Could not connect to MongoDB ${err.message}`)
    }
};

function createModel(){
    // define schema
    const eventSchema = mongoose.Schema({
        date: {type: Date, required: true},
        type: {type: String, required: true},
        title: {type: String, required: true},
        description: {type: String, required: false},
        time_end: {type: Date, required: false},
        reoccuring_day: {type: String, required: false},
    });
    // compile and return model
    return mongoose.model("Event", eventSchema);
};

// create an event for database
async function createEvent(date, type, title, description, time_end, reoccuring_day){
    // create the new event object
    const event = new event({date : date, type : type, title : title, description : description, time_end: time_end, reoccuring_day: reoccuring_day});

    return event.save();
;}

// find a event by filters
const findEvent = async (filter) => {

    const query = Event.find(filter);
    return query.exec();
};

// find a event by its unique id
const findEventById = async (_id) => {

    try{ // find by id and return
        const event = await Event.findById(_id);
        return event;
    }
    catch(err){
        throw err;
    }
};

// update the event
async function updateEvent(_id, date, type, title, description, time_end, reoccuring_day){
        // update by id
        const updated = await Event.findByIdAndUpdate(
            _id,
            {date, type, title, description, time_end, reoccuring_day},
            {new: true}
        );
        return updated;
};

// delete one event by id
async function deleteEventById(_id){
    try{ 
        const deleted = await Event.deleteOne({_id});
        return deleted;
    }
    catch(err){
        throw err;
    }
};

export {connect, createEvent, findEvent, findEventById, updateEvent, deleteEventById};
