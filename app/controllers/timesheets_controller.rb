class TimesheetsController < ApplicationController
  def new
    @timesheet = Timesheet.new
  end

  def create
    @timesheet = Timesheet.new(params[:timesheet])
      if @timesheet.valid?
        # GO ACTION MAILER: CHRIS & SAM
        @name = "#{@timesheet.firstname}, #{@timesheet.lastname}"
        @message = @timesheet
        @email = @timesheet.email

        ConfirmationMailer.confirmation_email(@name, @message, @email).deliver
        render :action => 'send_email'
        # render :partial => 'preview'
      else
        render :action => 'new'
      end
  end

  # def send_email
  #   @name = "#{@timesheet.firstname}, #{@timesheet.lastname}"
  #   @message = @timesheet
  #   @email = @timesheet.email

  #   ConfirmationMailer.confirmation_email(@name, @message, @email).deliver
  # end


end
