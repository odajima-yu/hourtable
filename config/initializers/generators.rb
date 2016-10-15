# Creating and Customizing Rails Generators & Templates
Rails.application.config.generators do |g|
  g.stylesheets false
  g.javascripts false
  g.helper false
  g.jbuilder true
  g.template_engine :slim
  g.test_framework :rspec, helper_specs: false, view_specs: false
end
