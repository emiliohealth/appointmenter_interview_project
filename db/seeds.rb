names = ["Denny", "Wendy", "Jimmy John"]

10.times do |i|
  start_time = (Time.now + rand(1..10).days + rand(1..10).hours).beginning_of_hour
  Appointment.create(name: names.sample, start_time: start_time)
end
