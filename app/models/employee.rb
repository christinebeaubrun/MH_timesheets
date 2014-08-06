class Employee < ActiveRecord::Base

  validates :firstname, :lastname, :timesheets, presence: true
  has_many  :timesheets

end
