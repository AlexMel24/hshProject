Rails.application.routes.draw do
  root 'static_pages#welcome'

  get   '/hsh'         => 'static_pages#hsh'
  post  '/hsh'         => 'static_pages#array'
  get   '/register'    => 'user#register'
  post  '/register'    => 'user#create'
  get   '/login'       => 'user#login'
  post  '/login'       => 'user#signin'
  get   '/logout'      => 'user#logout'

  get   '/hsh/new'     => 'static_pages#hsh'
  post  '/hsh/new'     => 'static_pages#new_hsh'

  get   '/hsh/max'     => 'static_pages#hsh'
  post  '/hsh/max'     => 'static_pages#get_max'

  get   '/hsh/nonill'  => 'static_pages#hsh'
  post  '/hsh/nonill'  => 'static_pages#no_nill'

  get   '/hsh/sort'    => 'static_pages#hsh'
  post  '/hsh/sort'    => 'static_pages#sort_ar'

  get   '/jshsh'       => 'java_script_hash#jsshoh'

end
