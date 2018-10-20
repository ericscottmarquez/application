Rails.application.routes.draw do

  get 'workflows', to: 'workflows#index', as: 'workflows'

  root 'hello_world#index'

  match '*path', to: 'hello_world#index', via: :all
  
  # root 'home#index'


end
