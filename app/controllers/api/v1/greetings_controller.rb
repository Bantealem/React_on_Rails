class Api::V1::GreetingsController < ApplicationController
  def index
    greetings = Greeting.all
    render json: greetings, status: 200
  end

  def show
    greeting = Greeting.find(params[:id])

    if greeting
      render json: greeting, status: 200
    else
      render json: { error: 'Greeting not found' }
    end
  end
end
