class Timesheet

  include ActiveModel::Model
  include ActiveModel::Validations
  include ActiveModel::Conversion
  extend ActiveModel::Naming


  attr_accessor :firstname, :lastname, :email, :date, :start_time, :hours_worked, :position, :pay_rate, :grand_total, :subtotal, :total_hours, :shifts

  validates_presence_of :firstname, :lastname, :email, :start_time, :hours_worked, :position, :pay_rate, :grand_total, :subtotal, :total_hours, :shifts

  def initialize(attributes = {})
    attributes.each do |name, value|
      send("#{name}=", value)
    end
  end

  def persisted?
    false
  end

end
