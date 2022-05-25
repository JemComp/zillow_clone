class Api::SaveController < ApplicationController

    def create
        @save = Save.new(user_id: current_user.id, listing_id: params[:id])
        @user = current_user
    
        if @save.save
          render "api/users/show"
        else
          render json: save.errors.full_messages, status: 422
        end
      end
    
      def destroy
        @save = Save.find_by(user_id: current_user.id, listing_id: params[:id])
        @user = current_user
        if @save.destroy
          render "api/users/show"
        else
          render json: @save.errors.full_messages, status: 422
        end
      end
end
