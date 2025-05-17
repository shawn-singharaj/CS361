import EventItem from './EventItem';
import '../App.css';

export default function DailyTable ({events, dayOfWeek}){
    // add click on event to edit and add event button
    return(
        <table className="daily-table">
            <thead>
                <tr>
                    <th key={dayOfWeek}>{dayOfWeek}</th>
                </tr>
            </thead>
            <tbody>
                {events.map((eventI, index) => (
                    <tr key={index}>
                        <td>
                            <EventItem title={eventI.title} time={eventI.time}/>
                        </td>
                    </tr>
                    ))               
                    }
            </tbody>

        </table>
    
    )

}