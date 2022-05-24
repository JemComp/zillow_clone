json.extract! listing, :id, :address, :city, :zip_code, :state, :price, :beds, :baths, :sqft, :lat, :lng, :user_id, :description
json.photoUrls listing.photos.map { |photo| url_for(photo) }  

  
