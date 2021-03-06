# model for table 'users'
class User < ActiveRecord::Base

  has_many :user_activity, dependent: :destroy

  before_save { self.email = email.downcase }
  validates(:name, presence: true, length: { maximum: 50 })
  validates(:password, presence: true, length: { minimum: 6 })

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence:   true,
            format:     { with: VALID_EMAIL_REGEX },
            uniqueness: { case_sensitive: false }

  has_secure_password
end
