json.array! @users do |user|
  json.id user.id
  json.name  user.name
  json.email  user.email
  json.pass_ward  user.encrypted_password
end