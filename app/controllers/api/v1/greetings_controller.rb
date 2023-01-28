class Api::V1::GreetingsController < ApplicationController
  def index
    greetings = Greeting.all
    render json: greetings.as_json(only: %i[id message])
  end
end
