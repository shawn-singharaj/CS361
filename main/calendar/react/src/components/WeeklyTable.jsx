import EventItem from './EventItem';
import { Link } from 'react-router-dom';
import '../App.css';

// take acct for dates not just days 
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const events = {
    Monday: [{ title: 'Meeting', time: '10:00 AM' }],
    Wednesday: [{ title: 'Gym', time: '6:00 PM' }, { title: 'Call Mom', time: '8:00 PM' }],
    Friday: [{ title: 'Project Due', time: '11:59 PM' }],
  };

  //{ events, onDelete }
function WeeklyTable (){

    return(
        <table className="weekly-table">
            <thead>
                <tr>{daysOfWeek.map(day => (
                <th key={day}>
                    <Link to={`/daily-view/${day.toLowerCase()}`}>
                    <button type="button">{day}</button>
                    </Link>
                </th>
                ))}
                </tr>
            </thead>
            <tbody>
                <tr>
                {daysOfWeek.map(day => (
                    <td key={day}>
                    {(events[day] || []).map((event, index) => (
                        <EventItem key={index} title={event.title} time={event.time} />
                    ))}
                    </td>
                ))}
                </tr>
            </tbody>
        </table>
    );
}

export default WeeklyTable;