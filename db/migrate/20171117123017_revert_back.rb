class RevertBack < ActiveRecord::Migration
  def change
    create_table :hash_elements do |t|

      t.timestamps null: false
    end
  end
end
