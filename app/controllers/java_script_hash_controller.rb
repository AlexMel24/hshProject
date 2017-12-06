class JavaScriptHashController < ApplicationController
  before_action :is_user_loged?

  def jsshoh

  end

  private

  def is_user_loged?
    if session[:user_id].nil?
      flash.now[:success] = "Log in, first, please!"
      redirect_to login_path
    end
  end

end
