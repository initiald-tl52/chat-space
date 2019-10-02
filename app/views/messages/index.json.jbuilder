json.array! @messages do |message|
  json.id message.id
  json.content message.content
  json.image message.image
  json.user_id message.user_id
  json.group_id message.group_id
end