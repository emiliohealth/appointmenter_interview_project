class AppointmentsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @appointments = Appointment.all
  end

  def create
    @appointment = Appointment.new(appointment_params)

    if @appointment.save
      render json: @appointment
    else
      render json: { errors: @appointment.errors.full_messages }, status: 422
    end
  end

  def destroy
    @appointment = Appointment.destroy(params[:id])
    render json: @appointment
  end

  private

  def appointment_params
    params.require(:appointment).permit(:name, :start_time)
  end
end
