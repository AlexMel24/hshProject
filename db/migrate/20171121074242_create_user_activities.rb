class CreateUserActivities < ActiveRecord::Migration
  def up
    create_table :user_activities do |t|
      t.integer :user_id
      t.text :activity

      t.timestamps null: false
    end
  end
  def down
    drop_table :user_activities
  end
end
