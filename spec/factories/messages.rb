FactoryBot.define do
  factory :message do
    content {Faker::Lorem.sentence}
    image {File.open("#{Rails.root}/public/images/job_tantei_foreign.png")}
    user
    group
  end
end