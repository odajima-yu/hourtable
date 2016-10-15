require 'rails_helper'

RSpec.describe WelcomeController, type: :controller do
  let(:params) { {} }

  describe 'GET #index' do
    subject(:response) { get :index, params: params }
    it { is_expected.to render_template :index }
  end
end
