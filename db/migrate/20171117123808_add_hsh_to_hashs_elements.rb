class AddHshToHashsElements < ActiveRecord::Migration
  def change
    add_column :hash_elements, :hsh, :text
  end
end
