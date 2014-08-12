class TimesheetsController < ApplicationController
  def new
    @timesheet = Timesheet.new
  end

  def create
    binding.pry 
    @timesheet = Timesheet.new(params[:timesheet])
      if @timesheet.valid?
        @name = "#{@timesheet.firstname}, #{@timesheet.lastname}"
        @message = @timesheet
        @email = @timesheet.email
        payroll = "mhmailr@gmail.com"
        recipients = [payroll, @email]

        recipients.each do |email|
          ConfirmationMailer.confirmation_email(@name, @message, email).deliver
        end

        render :action => 'send_email'
      else
        render :new
      end
  end
end
