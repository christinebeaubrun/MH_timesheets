class CreateTimesheets < ActiveRecord::Migration
  def change
    create_table :timesheets do |t|
      t.string   :name
      t.string   :email 
      t.string   :day_worked
      t.string   :start_time
      t.decimal  :hours_worked
      t.decimal  :total_hours_worked
      t.integer  :total_pay
      t.string   :position
      t.integer  :pay_rate
      t.string   :work_week
      t.integer  :grand_total
      t.timestamps
    end
  end
end
