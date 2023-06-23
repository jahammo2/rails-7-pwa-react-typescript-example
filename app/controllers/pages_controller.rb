class PagesController < ApplicationController
  def index
    puts "\n\n\n"
    puts ENV["NODE_ENV"]
    puts "\n\n\n"
    # binding.pry
  end
end
