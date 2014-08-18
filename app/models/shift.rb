class Shift 
  include ActiveModel::Model
  attr_accessor :date, :start_time, :position, :hours_worked
  attr_reader :subtotal

  def pay_rate=(rate)
    @pay_rate = rate
  end

  def pay_rate
    @pay_rate ||= rates[position]
  end

  def hours_worked
    @hours_worked.to_f
  end

  def subtotal
    pay_rate.to_f * hours_worked.to_f
  end

  private 
  def rates
    {
      "Tour Guide" => 32,
      "Co-host" => 22,
      "Admin" => 15.84
    }
  end

end