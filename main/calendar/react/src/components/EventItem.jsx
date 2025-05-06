export default function EventItem({ title, time }) {
    return (
      <div className="event-item">
        <strong>{title}</strong><br />
        <span>{time}</span>
      </div>
    );
  }