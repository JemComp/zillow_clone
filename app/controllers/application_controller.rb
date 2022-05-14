class ApplicationController < ActionController::Base

    helper_method :current_user, :logged_in?

    def current_user 
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def login!(user) 
        session[:session_token] = user.session_token
    end

    def logout!
        @current_user.reset_session_token!
        session[:session_token] = nil
    end

    def logged_in? 
        !current_user.nil?
    end 

    def require_logged_in
        unless logged_in?
            render json: ["Unauthorized User"], status 403
        end
    end

    def require_logged_out 
        if logged_in?
            render json: [""], status 422
        end
    end





end
