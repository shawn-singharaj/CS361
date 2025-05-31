import 'dotenv/config';
import express from 'express';
import asyncHandler from 'express-async-handler';
import * as events from './events_model.mjs';

const app = express();
app.use(express.json())

const PORT = process.env.PORT;

app.listen(PORT, async () => {
    await events.connect(false)
    console.log(`Server listening on port ${PORT}...`);
});

// create event
app.post("/events", asyncHandler(async (req, res) => {
    const {date, type, title, description, time_end, reoccuring_day} = req.body;

    // required parameters
    if(!date || !type || !title){
        return res.status(400).json({message: "Error: Incomplete Request"})
    }

    // create event
    const Event = await events.createEvent(date, type, title, description, time_end, reoccuring_day);
    res.status(201).json(Event);
}));

// get all events
app.get("/events", asyncHandler(async (req, res) =>{
    const all_Events = await events.findEvent();

    res.status(200).json(all_Events);
}));

// get certain event
app.get("/events/:id", asyncHandler(async(req, res) => {
    const _id = req.params.id;

    if(_id){
        const Event = await events.findEventById(_id);
        if(Event){
            res.status(200).json(Event);
        }
        else{
            res.status(404).json({message: "Error: Not Found"});
        }
    }
}));

// update event by id
app.put("/events/:id", asyncHandler(async (req, res) => {
    const _id = req.params.id;
    const {date, type, title, description, time_end, reoccuring_day} = req.body;

     // required parameters
    if(!date || !type || !title){
        return res.status(400).json({message: "Error: Incomplete Request"})
    }

    if(_id){
        const UpdatedEvent = await events.updateEvent(_id, date, type, title, description, time_end, reoccuring_day);
        if(UpdatedEvent){
            res.status(200).json(UpdatedEvent);
        }
        else{
            res.status(404).json({message: "Error: Not Found"});
        }
    }
}));

// delete event
app.delete("/events/:id", asyncHandler(async (req, res) => {
    const _id = req.params.id;
    const deleted = await events.deleteEventById(_id);


    if(deleted.deletedCount == 1){
        res.status(204).json(deleted);
    }
    else{
        return res.status(404).json({message: "Error: Not Found"});
    }
}));