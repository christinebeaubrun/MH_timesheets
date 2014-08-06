class TimesheetsController < ApplicationController
  def new
    @timesheet = Timesheet.new 
  end

  def create
    @timesheet = Timesheet.new(params[:timesheet])
      if @timesheet.valid?
        flash[:notice] = "Timesheet sent! Thank you for contacting us."
        redirect_to root_url
      else
        render :action => 'new'
      end
  end

end
