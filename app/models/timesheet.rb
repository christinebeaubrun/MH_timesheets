class Timesheet

  include ActiveModel::Model

  # validates_presence_of :firstname, :lastname, :start_time, :position, :work_week, :day_worked,
  #                       :hours_worked, :total_hours_worked, :shift_pay, :pay_rate, :grand_total, :email, :date, :subtotal_pay, :start_time
  # validates_format_of :email, :with => /^[-a-z0-9_+\.]+\@([-a-z0-9]+\.)+[a-z0-9]{2,4}$/i,  :multiline => true
  # validates :hours_worked, :total_hours_worked, :shift_pay, :pay_rate, :grand_total, numericality: true
  attr_accessor :fullname, :email, :date, :start_time, :hours_worked, :position, :pay_rate, :total_hours, :grand_total, :subtotal
  attr_reader :shifts

  validates_presence_of :fullname, :email, :shifts

  def shifts=(shifts)
    @shifts = shifts.map {|shift| Shift.new(shift)}
  end

  def grand_total
    if shifts
      shifts.inject(0) {|memo, shift| memo + shift.subtotal }
      # shifts.map(&:subtotal).inject(:+)
    end
  end

  def total_hours
    if shifts
      shifts.inject(0) {|memo, shift| memo + shift.hours_worked }
    end
  end

  def persisted?
    false
  end

end
