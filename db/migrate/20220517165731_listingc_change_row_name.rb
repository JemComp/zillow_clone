class ListingcChangeRowName < ActiveRecord::Migration[5.2]
  def change
    rename_column :listings, 'zip code', 'zip_code'

  end
end
