json.user do 
    json.extract! user, :email, :id

    json.savedListingids user.saved_listing_ids
end

json.saves do
    user.saves.each do |save|
        json.set! save.id do 
            json.extract! save, :user_id, :listing_id
        end 
    end
end

json.listings do
    user.saved_listings.each do |listing|
        json.set! listing.id do 
            json.extract! listing, :id, :address, :city, :zip_code, :state, :price, :beds, :baths, :sqft, :lat, :lng, :user_id, :description
            json.photoUrls listing.photos.map { |photo| url_for(photo) }  
        end
    end
end