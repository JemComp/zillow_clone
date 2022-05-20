class Api::ListingsController < ApplicationController
    
    def create
        @listing = Listing.new(listing_params)
        @listing.user_id = current_user.id
        if @listing.save
            render :show
        else
            render json: @listing.errors.full_messages, status: 422
        end
    end
    
    def index 
        @listings = Listing.all
        render :index
    end

    def show
        @listing = Listing.find_by(id: params[:id])
        render :show
    end


    def update 
        @listing = Listing.find_by(id: params[:id])
        if @listing && @listing.user_id == current_user.id && @listing.update(listing_params)
            render :show
        else
            render json: @listing.errors.full_messages, status: 422
        end
    end

    def destroy
        @listing=Listing.find_by(id: params[:id])
        @article.destroy
        
        render :index
    end

    private
    def listing_params
        params.require(:listing).permit(:address, :zip_code, :city, :state, :lat, :lng, :beds, :baths, :sqft, :price, :description, photos: [])
    end
end