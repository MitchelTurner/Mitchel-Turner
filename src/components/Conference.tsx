import { conferenceEvents } from '../data/site'

export default function Conference() {
  return (
    <section className="block" id="conference">
      <h2 className="label">Southeast Conference</h2>
      <p className="note">
        The 68th annual meeting, in Ketchikan. These are the sessions I’m following through the
        fall and winter.
      </p>
      <ol className="events">
        {conferenceEvents.map((event) => (
          <li key={event.id} className="event">
            <p className="when">{event.when}</p>
            <h3>{event.title}</h3>
            <p>{event.body}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
