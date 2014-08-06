class TimesheetsController < ApplicationController
  def new
    @timesheet = Timesheet.new 
  end

  def create
    @timesheet = Timesheet.new(params[:timesheet])
      if @timesheet.valid?
        # GO ACTION MAILER: CHRIS & SAM
        # render :partial => 'preview'
      else
        render :action => 'new'
      end
  end

  # def show
  #   @timesheet
  # end

end
