import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import WeeklyTable from '../components/WeeklyTable';

function WeeklyView () {
    

    return(
        <>
            <h2>Weekly View</h2>
            <WeeklyTable></WeeklyTable>
        </>
    );
}

//            <WeeklyTable events={events} onDelete={onDelete}></WeeklyTable>


export default WeeklyView;