Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/projects' => 'projects#index'
  post 'projects' => 'projects#create'
  get '/projects/show' => 'projects#show'

  get '/resumes' => 'resumes#show'
end
