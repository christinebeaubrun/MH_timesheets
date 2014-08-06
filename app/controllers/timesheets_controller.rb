class TimesheetsController < ApplicationController
  def new
    @timesheet = Timesheet.new 
  end

  def create
    # CREATE EMPLOYEE AND SAVE TIMESHEET TO EMPLOYEE
    # IF EMPLOYEE EXIST, SEARCH FOR THAT EMPLOYEE ELSE CREATE NEW EMPLOYEE
    # REDIRECT TO TIMESHEET SHOW AFTER SAVING TO DATABASE
  end

end
