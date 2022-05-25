Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace 'api', defaults: { format: :json } do 
    resources :users, only: [:create, :show, :edit]
    resource :sessions, only: [:create, :destroy]
    resources :listings, only: [:create, :destroy, :show, :index, :update] do 
      resources :saves, only:[:create, :destroy]
    end
  end

end

