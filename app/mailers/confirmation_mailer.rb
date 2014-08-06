class ConfirmationMailer < ActionMailer::Base
  default from: "mhailr@gmail.com"

  def confirmation_email(timesheet)
    mail(to: "mhailr@gmail.com", subject: "Sent from MuseumHack Timesheet app!")
  end
end
