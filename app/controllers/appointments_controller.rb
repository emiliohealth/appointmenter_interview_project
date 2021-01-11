class AppointmentsController < ApplicationController
  def index
    @appointments = Appointment.all
  end

  def create
    @appointment = Appointment.create(appointment_params)
    render json: @appointment
  end

  private

  def appointment_params
    params.require(:appointment).permit(:name, :start_time)
  end
end
