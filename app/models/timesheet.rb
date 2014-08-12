class Timesheet

  include ActiveModel::Model
  include ActiveModel::Validations
  include ActiveModel::Conversion
  extend ActiveModel::Naming

  attr_accessor :firstname, :lastname, :email, :start_time, :position, :hours_worked, :shifts,
                :total_hours, :pay_rate, :grand_total, :date, :start_time, :subtotal

  validates_presence_of :firstname, :lastname, :start_time, :position, :work_week, :shifts,
                        :hours_worked, :total_hours, :pay_rate, :grand_total, :email, :date, :subtotal, :start_time
  # validates_format_of :email, :with => /^[-a-z0-9_+\.]+\@([-a-z0-9]+\.)+[a-z0-9]{2,4}$/i,  :multiline => true
  # validates :hours_worked, :total_hours_worked, :shift_pay, :pay_rate, :grand_total, numericality: true

  def initialize(attributes = {})
    attributes.each do |name, value|
      send("#{name}=", value)
    end
  end

  def persisted?
    false
  end

end
