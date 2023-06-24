Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get "/", to: "pages#index"
  get "/manifest.json" => "service_worker#manifest"
  get "/service-worker.js" => "service_worker#service_worker"
end
