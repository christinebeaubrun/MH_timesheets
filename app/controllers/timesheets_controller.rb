class TimesheetsController < ApplicationController
  def new
    @timesheet = Timesheet.new
  end

  def create
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

        # ConfirmationMailer.confirmation_email(@name, @message, @email).deliver
        render :action => 'send_email'
        # redirect_to root_path, success: "Email Sent, you gettin paid!"
        # render :partial => ''
      else
        flash[:notice] = "ERRORS"
        # redirect_to(:back) and return
        # render :action => 'new'
      end
  end

  # def send_email
  #   @name = "#{@timesheet.firstname}, #{@timesheet.lastname}"
  #   @message = @timesheet
  #   @email = @timesheet.email

  #   ConfirmationMailer.confirmation_email(@name, @message, @email).deliver
  # end

end
