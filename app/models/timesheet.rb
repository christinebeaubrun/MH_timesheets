class Timesheet

  include ActiveModel::Model
  include ActiveModel::Validations
  include ActiveModel::Conversion
  extend ActiveModel::Naming


<<<<<<< HEAD
  # validates_presence_of :firstname, :lastname, :start_time, :position, :work_week, :day_worked,
  #                       :hours_worked, :total_hours_worked, :shift_pay, :pay_rate, :grand_total, :email, :date, :subtotal_pay, :start_time
  # validates_format_of :email, :with => /^[-a-z0-9_+\.]+\@([-a-z0-9]+\.)+[a-z0-9]{2,4}$/i,  :multiline => true
  # validates :hours_worked, :total_hours_worked, :shift_pay, :pay_rate, :grand_total, numericality: true
=======
  attr_accessor :firstname, :lastname, :email, :date, :start_time, :hours_worked, :position, :pay_rate, :total_hours, :grand_total, :subtotal, :shifts

  validates_presence_of :firstname, :lastname, :email, :shifts
>>>>>>> a41842c5f9e2002e67e7dcd0af3625d87a907744

  def initialize(attributes = {})
    attributes.each do |name, value|
      send("#{name}=", value)
    end
  end

  def persisted?
    false
  end

end
