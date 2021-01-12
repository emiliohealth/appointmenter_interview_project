class Appointment < ApplicationRecord
  validates :name, :start_time, presence: true
end
