class TimesheetsController < ApplicationController
  def new
    @timesheet = Timesheet.new
  end

  def create
    @timesheet = Timesheet.new(params[:timesheet])
      if @timesheet.valid?
        # GO ACTION MAILER: CHRIS & SAM
        render :partial => 'preview'
      else
        render :action => 'new'
      end
  end

  def show
    @timesheet
  end

  def send_email
    # @timesheet = Timesheet.new(params[:timesheet])
    ConfirmationMailer.confirmation_email(@name, @message, @email).deliver
  end

end
