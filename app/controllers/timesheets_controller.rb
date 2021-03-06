class TimesheetsController < ApplicationController
  def new
    @timesheet = Timesheet.new
  end

  def create
    @timesheet = Timesheet.new(params[:timesheet])
      if @timesheet.valid?
        @name = "#{@timesheet.fullname}"
        @message = @timesheet
        @email = @timesheet.email
        render 'send_email'

        payroll = ENV["RECIPIENT_EMAIL"]
        recipients = [payroll, @email]

        recipients.each do |email|
          ConfirmationMailer.confirmation_email(@name, @message, @email).deliver
        end

      else
        render :new
      end
  end
end
