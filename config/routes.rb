Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  devise_for :users
  root 'groups#index'
  resources :users, only: [:index, :edit, :update]
  resources :groups, onry: [:new, :create, :edit, :update] do
    resources :messages, only: [:index, :create, :show]
  end
end
