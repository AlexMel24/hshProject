class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :is_user_loged?, only: [:hsh, :array, :no_nill, :get_max, :sort_ar]

  private
  def is_user_loged?
    if session[:user_id].nil?
      flash.now[:success] = "Log in, first, please!"
      redirect_to login_path
    end
  end

end
