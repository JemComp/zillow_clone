class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        # debugger
        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find_by(id: params[:id])
        if @user
            render :show
        else
            render json: ["some error"], status: 404
        end
    end

    private
    def user_params
        params.require(:user).permit(:email, :password)
    end
end
