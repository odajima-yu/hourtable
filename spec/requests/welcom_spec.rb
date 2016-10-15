require 'rails_helper'

RSpec.describe 'Welcome', type: :request do
  describe 'GET /' do
    it { is_expected.to eq 200 }
  end
end
