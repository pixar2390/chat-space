# Chat＿space DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|name|string|null: false|
### Association
- has_many :groups
- has_many :groups, through: :group_users
- has_many :messages

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
- has_many :group_users
- has_many :users, through: :group_users
- has_many :messages

## group_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user|reference|null: false, foreign_key: true|
|group|reference|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

## messegesテーブル
|Column|Type|Options|
|------|----|-------|
|image|string||
|content|string||
|user|referance|null: false, foreign_key: true|
|group|referance|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user
