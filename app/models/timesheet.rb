class Timesheet < ActiveRecord::Base

  belongs_to :employee
  validates_presence_of :name, length: { minimum: 2 }
  validates_format_of :email, :with => /^[-a-z0-9_+\.]+\@([-a-z0-9]+\.)+[a-z0-9]{2,4}$/i
  validates_presence_of :start_time, :position, :work_week, :day_worked, :employee
  validates :hours_worked, :total_hours_worked, :shift_pay, :pay_rate, :grand_total, numericality: true

end