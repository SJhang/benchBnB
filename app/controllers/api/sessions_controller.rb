class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params[:username], user_params[:password])
    if @user
      login(@user)
      render :show
    else
      render json: "Invalid username/password", status: 402
    end
  end

  def destroy
    logout
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
