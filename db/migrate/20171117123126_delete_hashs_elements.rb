class DeleteHashsElements < ActiveRecord::Migration
  def change
    drop_table :hashelements
  end
end
