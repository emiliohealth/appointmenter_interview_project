import React from "react";

class Appointments extends React.Component {
  render () {
    console.log(this.props.appointments);
    return (
      <div className="w-5/6 mx-auto mt-4">
      <span className="text-center"><h1>Appointments</h1></span>
      <br />
      { this.props.appointments.map(appt => <Appointment {...appt} key={appt.id} />) }
      </div>
    );
  }
}

const Appointment = ({
  id,
  name,
  start_time
}) => {
  const time = new Date(start_time).toISOString();
  const displayTime = `${time.substr(0, 10)}`

  return (
    <div id={id} className="p-4 mb-4 border border-black border-solid rounded">
    Date: {displayTime}
    <br />
    Name: {name}
    </div>
  );
}

export default Appointments;
