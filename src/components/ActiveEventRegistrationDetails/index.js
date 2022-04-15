import './index.css'

const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {getEventRegistrationStatus} = props

  const renderInitialPage = () => (
    <div className="initial-container">
      <p className="paragraph">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  const renderYetToRegisterPage = () => (
    <div className="yet-to-register">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        className="yet-to-register-image"
        alt="yet to register"
      />
      <p className="yet-to-register-text">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall in love wth this beautiful art
        form.
      </p>
      <div>
        <button type="button" className="register-button">
          Register Here
        </button>
      </div>
    </div>
  )

  const renderRegisteredPage = () => (
    <div className="registered-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        className="registered-logo"
        alt="registered"
      />
      <h1 className="registered-heading">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderRegistrationClosedPage = () => (
    <div className="registration-closed-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        className="registrations-closed-image"
        alt="registrations closed"
      />
      <h1 className="registrations-text">Registrations Are Closed Now!</h1>
      <p className="registrations">
        Stay tuned. We will reopen the Registrations soon!
      </p>
    </div>
  )

  const renderActiveEvent = () => {
    switch (getEventRegistrationStatus) {
      case registrationStatus.registered:
        return renderRegisteredPage()
      case registrationStatus.yetToRegister:
        return renderYetToRegisterPage()

      case registrationStatus.registrationsClosed:
        return renderRegistrationClosedPage()

      default:
        return renderInitialPage()
    }
  }

  return (
    <div className="active-registrations-container">{renderActiveEvent()}</div>
  )
}

export default ActiveEventRegistrationDetails
