# model for table user_activities
class UserActivity < ActiveRecord::Base

  belongs_to :user

end
