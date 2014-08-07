class ConfirmationMailer < ActionMailer::Base
  default from: "mhailr@gmail.com"

  def confirmation_email(name, message, email)
    @name = name
    @message = message
    @email = email
    mail(to: email, subject: "Sent from MuseumHack Timesheet app!")
  end
end
