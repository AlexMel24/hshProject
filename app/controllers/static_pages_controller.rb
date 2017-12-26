class StaticPagesController < ApplicationController

  include StaticPagesHelper
  # require 'lib\my_hash_class.rb'
  require "#{Rails.root}/lib/my_hash_class"
  def welcome
  end

  def hsh
    if session[:session_myhsh].nil?
      @myhsh = MyCustomArray.new
      session[:session_myhsh] = @myhsh.my_new_hash
    end
    @myhsh = MyCustomArray.new(session[:session_myhsh])
  end

  def new_hsh
    @myhsh = MyCustomArray.new
    session[:session_myhsh] = @myhsh.my_new_hash
    render('static_pages/hsh')
  end

  def array
    @myhsh = MyCustomArray.new(session[:session_myhsh])
    @arr = @myhsh.ar
    insert_activity('Get array')
    render('static_pages/hsh')
  end

  def no_nill
    @myhsh = MyCustomArray.new(session[:session_myhsh])
    @myhsh.delete_nil
    @nonill = @myhsh.ar
    insert_activity('Get no nil array')
    render('static_pages/hsh')
  end

  def get_max
    @myhsh = MyCustomArray.new(session[:session_myhsh])
    @myhsh.delete_nil
    @max = @myhsh.get_max
    insert_activity('Get max')
    render('static_pages/hsh')
  end

  def sort_ar
    @myhsh = MyCustomArray.new(session[:session_myhsh])
    @myhsh.sort
    @sorted = @myhsh.ar
    insert_activity('Sort array')
    render('static_pages/hsh')

  end

private

  def insert_activity(act_name)
    @user_activ = UserActivity.new
    @user_activ.user_id = session[:user_id]
    @user_activ.activity = act_name
    @user_activ.save
  end



end
