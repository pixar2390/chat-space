# Chat＿space DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|nickname|string|null: false|
### Association
- has_many :users_groups
- has_many :chat_groups, through: :users_groups
- has_many :comments

## chat_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
- has_many :users_groups
- has_many :users, through: :users_groups
- has_many :comments

## user＿groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user|reference|null: false, foreign_key: true|
|chat_group|reference|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :chat_group

## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|image|string||
|text|text||
|user|referance|null: false, foreign_key: true|
|chat_group|referance|null: false, foreign_key: true|
### Association
- belongs_to :chat_group
- belongs_to :user
