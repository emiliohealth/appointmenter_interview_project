Rails.application.routes.draw do
  resources :appointments, only: [:index, :create, :destroy]
end
