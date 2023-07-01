source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.1.2"

gem "rails", "~> 7.0.5"

gem "active_interaction"
gem "bootsnap", require: false
gem "pg", "~> 1.1"
gem "puma", "~> 5.0"
gem "shakapacker", "= 6.6"
gem "sprockets-rails"
gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]

group :development, :test do
  gem "awesome_print"
  gem "debug", platforms: %i[ mri mingw x64_mingw ]
  gem "factory_bot_rails"
  gem "faker"
  gem "pry-byebug"
  gem "pry-rescue"
  gem "pry-stack_explorer"
end

group :development do
  gem "bullet"
  gem "rubocop"
  gem "standard", ">= 1.0"
  gem "web-console"
end

group :test do
  gem "capybara"
  gem "selenium-webdriver"
  gem "webdrivers"
end
