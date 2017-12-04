class HashElements < ActiveRecord::Migration
  def change
    create_table :hashelements do |t|
      t.text :hsh

      t.timestamps null: false
    end
  end
end
