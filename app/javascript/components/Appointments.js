import React from "react";
import format from "date-fns/format";

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
    return (
      <div class="rounded border-solid border border-black mb-4 p-4">
      Time: {format(new Date(start_time), "yyyy-MM-dd hh:mm a")}
      <br />
      Name: {name}
      </div>
    );
  }

export default Appointments
