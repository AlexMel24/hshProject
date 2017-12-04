class UserController < ApplicationController

  def register
    @user = User.new
  end

  def create
    @user = User.new(strong_params)
      if @user.save
        redirect_to controller: 'user',  action: 'login'
      else
        render 'user/register'
      end
  end

  def login
  end

  def signin
    @user = User.find_by_email(params[:email])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      flash.now[:success] = "Welcome, #{@user.name}"
      render 'static_pages/welcome'
    else
      flash.now[:error] = 'Wrong combination of email + password'

      render 'user/login'
    end

  end

  def logout
    reset_session
    render 'static_pages/welcome'
  end

  private
    def strong_params
      params.permit(:name, :email, :password, :password_confirmation)
    end
end
