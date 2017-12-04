class DeleteTableFromDb < ActiveRecord::Migration
  def change
    drop_table :hash_elements
  end
end
