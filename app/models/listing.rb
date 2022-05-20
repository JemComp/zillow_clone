class Listing < ApplicationRecord
    validates :address, :city, :state, :zip_code, :price, :beds, :baths, :sqft, :lat, :lng, presence: true

    has_many_attached :photos


    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

end
