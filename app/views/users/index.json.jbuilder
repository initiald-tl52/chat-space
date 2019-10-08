json.array! @users do |user|
  json.name user.name
  json.id   user.id
  json.group_ids do
    json.array! user.group_users.each do|group_user|
      json.group_id group_user.id
    end
  end 
end
