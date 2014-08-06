class ConfirmationMailer < ActionMailer::Base
  default from: "mhailr@gmail.com"

  def confirmation_email(name, message, email)
    @name = name
    @message = message
    @email = "christinebeaubrun@gmail.com"
    # @timesheet = timesheet
    mail(to: "mhailr@gmail.com", from: "christinebeaubrun@gmail.com", subject: "Sent from MuseumHack Timesheet app!")
  end
end
