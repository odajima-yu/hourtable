Rails.application.routes.draw do
  root 'welcome#index'

  devise_for :users,
             controllers: {
               confirmations: 'users/confirmations',
               omniauth_callbacks: 'users/omniauth_callbacks',
               passwords: 'users/passwords',
               registrations: 'users/registrations',
               sessions: 'users/sessions',
               unlocks: 'users/unlocks'
             },
             path_names: {
               sign_in: 'login',
               sign_out: 'logout'
             }
end
