class AllowDiscriptionNull < ActiveRecord::Migration[5.2]
  def change
    change_column_null :listings, :description, true
  end
end
