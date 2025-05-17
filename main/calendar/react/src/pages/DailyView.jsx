import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DailyTable from '../components/DailyTable';

// placeholders until rest api implemented
const events = {
    Monday: [{ title: 'Meeting', time: '10:00 AM' }],
    Wednesday: [{ title: 'Gym', time: '6:00 PM' }, { title: 'Call Mom', time: '8:00 PM' }],
    Friday: [{ title: 'Project Due', time: '11:59 PM' }],
  };

function DailyView(){
    const { day } = useParams();

    const todaysEvents = events[day] || [];

    return(
        <>
            <h2>Daily View</h2>
            <DailyTable dayOfWeek={day} events={events.Monday}/>
        </>
    );
}

export default DailyView;