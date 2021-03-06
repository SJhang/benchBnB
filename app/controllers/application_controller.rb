class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def login(user)
    session[:session_token] = user.session_token
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def logged_in?
    return true if current_user
  end

  helper_method :logged_in?, :current_user
end
