Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  get 'workflows', to: 'workflows#index', as: 'workflows'

  root 'home#index'


end
