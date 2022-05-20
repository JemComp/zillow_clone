class ListingUserIdNullFalse < ActiveRecord::Migration[5.2]
  def change
    change_column_null :listings, :user_id, false

  end
end
