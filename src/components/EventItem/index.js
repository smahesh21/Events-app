import './index.css'

const EventItem = props => {
  const {eachEvent, setEventId} = props
  const {imageUrl, name, location, id} = eachEvent

  const onClickkedEvent = () => {
    setEventId(id)
  }

  return (
    <li className="event-card">
      <button type="button" className="image-button" onClick={onClickkedEvent}>
        <img src={imageUrl} className="image-url" alt="event" />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
