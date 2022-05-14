class User < ApplicationRecord

    validates :email, :Session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true;
    validates :password, allow_nil: true, length: {minimum: 6}
    attr_reader :password

    before_validation :ensure_session_token

    def self.find_by_credentials(email, password) 
        user = User.find_by(email: email)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def password=(password) 
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password) 
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token! 
        self.session_token = SecureRandom.urlSafe_base64
        self.save
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlSafe_base64
    end

end
